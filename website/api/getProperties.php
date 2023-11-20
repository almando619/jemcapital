<?php
require("connection.php");
$response = new \stdClass();
session_start();

if (isset($_GET["estate-id"])) {
    $query = "SELECT 
                  estate_id,
                  title,
                  description,
                  location,
                  category,
                  status
                FROM 
                  real_estate
                WHERE
                  estate_id = ?
                ORDER BY estate_id DESC";
} else {
    $query = "SELECT 
                  estate_id,
                  title,
                  description,
                  location,
                  category,
                  status
                FROM 
                  real_estate
                ORDER BY estate_id DESC";
}


$stmt = mysqli_prepare($conn, $query);

if (isset($_GET["estate-id"])) {
    mysqli_stmt_bind_param($stmt, "i", $_GET["estate-id"]);
}

mysqli_stmt_execute($stmt);
mysqli_stmt_store_result($stmt);

if (mysqli_stmt_num_rows($stmt) > 0) {
    $response->message = "success";
    mysqli_stmt_bind_result($stmt, $estateId, $title, $description, $location, $category, $status);
    while (mysqli_stmt_fetch($stmt)) {
        $row = new \stdClass();
        $row->estateId = $estateId;
        $row->title = $title;
        $row->description = $description;
        $row->location = $location;
        $row->category = $category;
        $row->status = $status;

        //fetch images
        $query1 = "SELECT 
                    image_id,
                    image_path
                  FROM
                    real_estate_images
                  WHERE
                    estate_id = $estateId";

        $stmt1 = mysqli_prepare($conn, $query1);
        mysqli_stmt_execute($stmt1);
        mysqli_stmt_store_result($stmt1);
        if (mysqli_stmt_num_rows($stmt1) > 0) {
            mysqli_stmt_bind_result($stmt1, $imageId, $imagePath);
            while (mysqli_stmt_fetch($stmt1)) {
                $row1 = new \stdClass();
                $row1->imageId = $imageId;
                $row1->imagePath = $imagePath;
                $row->images[] = $row1;
            }
        } else {
            $row->images = array();
        }
        $response->data[] = $row;
    }
} else {
    $response->message = "success";
    $response->data = array();
}


$conn->close();
echo json_encode($response);
