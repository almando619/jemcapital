<?php
require("connection.php");
$response = new \stdClass();
session_start();

if (
    isset($_POST['status']) &&
    isset($_POST['estate-id'])
) {
    $query = "UPDATE real_estate SET
                status = ?,
             WHERE 
                estate_id = ?";

    $stmt = mysqli_prepare($conn, $query);

    mysqli_stmt_bind_param(
        $stmt,
        "si",
        $_POST['status'],
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
