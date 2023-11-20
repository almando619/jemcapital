<?php
require("connection.php");
$response = new \stdClass();
session_start();

if (
    isset($_POST['password'])
) {
    //validate password
    if ($_POST['password'] === "JEMCapital#2024") {
        $response->message = "success";
        $response->data = "Login successful";
    } else {
        $response->message = "error";
        $response->data = "Incorrect password";
    }
} else {
    $response->message = "error";
    $response->data = "Invalid parameters";
}

$conn->close();
echo json_encode($response);
