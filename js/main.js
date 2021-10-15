(() => {
    let buttons = document.querySelectorAll("button"),
        //things = {};

    function getData() {
        fetch("./data.json")
        then(res => res.json())
        .then(data => {
            things = data;

            buildControls(data);
            console.log(data);
        })
        .catch(error => console.error(error));
    }

    function showData() {
        let key = this.dataset.key;

        let photo_thing = document.getElementsByClassName("p_avatar"),
            name_thing = document.getElementsByClassName("p_name"),
            description_thing = document.getElementsByClassName("p_description");

        photo_thing.textContent = things[key].biopic;
        name_thing.textContent = things[key].name;
        description_thing.textContent = things[key].description;
    }

    getData(null);

    buttons.forEach(button => button.addEventListener("click", showData));
})()