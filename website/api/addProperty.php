<?php
require("connection.php");
$response = new \stdClass();
session_start();

if (
    isset($_POST['title']) &&
    isset($_POST['description']) &&
    isset($_POST['location']) &&
    isset($_POST['category'])
) {
    $query = "INSERT INTO real_estate 
                (
                    title,
                    description,
                    location,
                    category
                )
            VALUES (?,?,?,?)";

    $stmt = mysqli_prepare($conn, $query);
    $testLoc = "test loc";

    mysqli_stmt_bind_param(
        $stmt,
        "ssss",
        $_POST['title'],
        $_POST['description'],
        $_POST['location'],
        $_POST['category']
    );

    $res = mysqli_stmt_execute($stmt);

    if ($res) {
        //select last inserted estate id
        $query1 = "SELECT max(estate_id) FROM real_estate";
        $stmt1 = mysqli_prepare($conn, $query1);
        $res1 = mysqli_stmt_execute($stmt1);
        if ($res1) {
            mysqli_stmt_bind_result($stmt1, $estateId);
            while (mysqli_stmt_fetch($stmt1)) {
                $response->message = "success";
                $response->data = $estateId;
            }
        } else {
            $response->message = "error";
            $response->data = "Something went wrong";
        }
    } else {
        $response->message = "error";
        $response->data = "Failed to add record";
    }
} else {
    $response->message = "error";
    $response->data = "Invalid parameters";
}

$conn->close();
echo json_encode($response);
