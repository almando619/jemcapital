<?php
require("connection.php");
$response = new \stdClass();
session_start();

if (isset($_FILES['image']) && isset($_POST['estate-id'])) {
    date_default_timezone_set("Africa/Nairobi");
    $now = date('Y_M_d_H_i_s');

    $filePath = "../assets/images/real-estate-uploads/" . $now . "-jem";

    if (move_uploaded_file($_FILES['image']['tmp_name'], $filePath)) {
        $imagePath = substr($filePath, 2);
        $estateId = (int)$_POST['estate-id'];

        $query = "INSERT INTO real_estate_images 
                    (
                        image_path,
                        estate_id
                    )
                VALUES (?,?)";

        $stmt = mysqli_prepare($conn, $query);

        mysqli_stmt_bind_param(
            $stmt,
            "si",
            $imagePath,
            $estateId
        );

        $res = mysqli_stmt_execute($stmt);

        if ($res) {
            //select uploaded image
            $query1 = "SELECT * FROM 
                            real_estate_images 
                       WHERE 
                            estate_id = $estateId 
                       ORDER BY 
                            image_id 
                        DESC LIMIT 1";
            $stmt1 = mysqli_prepare($conn, $query1);
            $res1 = mysqli_stmt_execute($stmt1);

            if ($res1) {
                $response->message = "success";
                mysqli_stmt_bind_result($stmt1, $imageId, $imagePath, $estateId);
                while (mysqli_stmt_fetch($stmt1)) {
                    $row = new \stdClass();
                    $row->imageId = $imageId;
                    $row->imagePath = $imagePath;
                    $row->estateId = $estateId;
                    $response->data[] = $row;
                }
            } else {
                $response->message = "error";
                $response->data = "Something went wrong";
            }
        } else {
            $response->message = "error";
            $response->data = "Failed to upload image";
        }
    }
} else {
    $response->message = "error";
    $response->data = "Invalid parameters";
}

$conn->close();
echo json_encode($response);
