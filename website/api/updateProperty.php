<?php
require("connection.php");
$response = new \stdClass();
session_start();

if (
    isset($_POST['title']) &&
    isset($_POST['description']) &&
    isset($_POST['location']) &&
    isset($_POST['category']) &&
    isset($_POST['estate-id'])
) {
    $query = "UPDATE real_estate SET
                title = ?,
                description = ?,
                location = ?,
                category=?
             WHERE 
                estate_id = ?";

    $stmt = mysqli_prepare($conn, $query);

    mysqli_stmt_bind_param(
        $stmt,
        "ssssi",
        $_POST['title'],
        $_POST['description'],
        $_POST['location'],
        $_POST['category'],
        $_POST['estate-id']
    );

    $res = mysqli_stmt_execute($stmt);

    if ($res) {
        $response->message = "success";
        $response->data = "Property updated successfully";
    } else {
        $response->message = "error";
        $response->data = "Failed to update property";
    }
} else {
    $response->message = "error";
    $response->data = "Invalid parameters";
}

$conn->close();
echo json_encode($response);
