(() => {

    
    let buttons = document.querySelectorAll("button"),
        things = {};

    function getData() {
        fetch("./data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            things = data;
        })
    }

    function showData() {

        let key = this.dataset.key;

        const   photo_thing = document.querySelector(".p_avatar"),
                name_thing = document.querySelector(".p_name"),
                description_thing = document.querySelector(".p_description");

        photo_thing.querySelector('img').src = `images/${things[key].biopic}`; 
        name_thing.textContent = things[key].name;
        description_thing.textContent = things[key].description;
    }

    getData();

    buttons.forEach(button => button.addEventListener("click", showData));
})()