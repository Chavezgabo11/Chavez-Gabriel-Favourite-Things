<?php 

$result = array();

// if a user passes an ID via a query string (id=1)
// htewn we should retrieve the row of data that matches and pass it back to the app
function getOneProf($conn, $prof) {        
    $query = "SELECT * FROM profs WHERE id='".$prof."'";

    // this is the database result -> the raw data that SQL gives us
    $runQuery = $conn->query($query);    

    // process our DB result and make something we can use with AJAX
    while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
     $result[] = $row;
    }

    return $result;
}


function getAllProfs($conn) {
    $query = "SELECT * FROM profs";

    // this is the database result -> the raw data that SQL gives us
    $runQuery = $conn->query($query);    

    // process our DB result and make something we can use with AJAX
    while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
     $result[] = $row;
    }

    return $result;
}


