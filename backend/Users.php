<?php

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

$userId = (int) $_GET['id'];

if (isset($userId) && !empty($userId)) {
    require "Connection.php";
    $sql = $conn->query("SELECT * FROM cadastro WHERE id_user = $userId");
        if ($sql->rowCount() > 0) {
            $users = $sql->fetchAll(PDO::FETCH_ASSOC);
            $result = true;
        } else {
            $result = false;
        }
} else {
    $result = false;
}
echo json_encode($user);

