<?php
require("connection.php");
$response = new \stdClass();
session_start();
if (isset($_POST['estate-id'])) {
  $estateId = $_POST['estate-id'];

  //delete all images
  $query = "SELECT 
              image_id,
              image_path
            FROM 
              real_estate_images
            WHERE
              estate_id = ?";

  $stmt = mysqli_prepare($conn, $query);
  mysqli_stmt_bind_param($stmt, "i", $estateId);
  mysqli_stmt_execute($stmt);
  mysqli_stmt_store_result($stmt);

  if (mysqli_stmt_num_rows($stmt) > 0) {
    mysqli_stmt_bind_result($stmt, $imageId, $imagePath);
    while (mysqli_stmt_fetch($stmt)) {
      //delete image from file system
      $itemImage = "..$imagePath";
      if (file_exists($itemImage))
        unlink($itemImage);
      //delete from db
      $res = mysqli_query($conn, "DELETE FROM real_estate_images WHERE image_id = $imageId");
    }
  }

  //delete estate property
  $res1 = mysqli_query($conn, "DELETE FROM real_estate WHERE estate_id = $estateId");
  if ($res1) {
    $response->message = "success";
    $response->data = "Property deleted successfully";
  } else {
    $response->message = "error";
    $response->data = "Something went wrong. Failed to delete property";
  }
} else {
  $response->message = "error";
  $response->data = "Invalid parameters";
}


$conn->close();
echo json_encode($response);
