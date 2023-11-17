<?php
require("connection.php");
$response = new \stdClass();
session_start();

if (isset($_FILES['image-id'])) {
    $imageId = $_POST['image-id'];

    //deleting image
    $res = mysqli_query($conn, "SELECT image_path FROM real_estate_images WHERE image_id = $imageId");
    $row = mysqli_fetch_assoc($res);

    $itemImage = '..' . $row['image_path'];
    if (file_exists($itemImage))
        unlink($itemImage);

    $res = mysqli_query($conn, "DELETE FROM image_path WHERE image_id = $imageId");

    if ($res) {
        $response->message = "success";
        $response->data = "Image deleted successfully";
    } else {
        $response->message = "error";
        $response->data = "Failed to delete image";
    }
} else {
    $response->message = "error";
    $response->data = "Invalid parameters";
}

$conn->close();
echo json_encode($response);
