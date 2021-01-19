<?php

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

    require "Connection.php";
    $user = (int) $_GET['id'];

    if(isset($user) && !empty($user)){
        $sql2 = $conn->query("DELETE cadastro, modulo FROM cadastro INNER JOIN modulo 
        ON cadastro.id_user = modulo.fk_user WHERE cadastro.id_user = '$user'");

        $sql = $conn->query("DELETE FROM cadastro WHERE id_user = '$user'");

        $result = true;
        
    } else {
        $result = false;
    }
    echo json_encode(["sucess"=> $result]);