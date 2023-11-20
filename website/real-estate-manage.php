<!DOCTYPE html>
<html lang="en">

<head>
    <?php include_once("components/header-imports.php") ?>
    <title>JEMCapital | Manage Real Estate</title>
</head>

<body id="">
    <?php include_once("components/top-bar.php") ?>
    <div class="main-container">
        <div class="spacer"></div>
        <!-- banner -->
        <div class="page-banner-wrapper mb-20">
            <div class="page-banner">
                <img src="./assets/images/real_estate_4.jpg" alt="image">
                <div class="shader"></div>
            </div>
            <div class="heading-container">
                <a href="real-estate"> <span class="text-primary">Real Estate</span></a>
                <i class="fas fa-angle-double-right"></i>
                <span> Manage</span>
            </div>
        </div>
        <!-- banner -->

        <!-- content -->
        <div class="page-padded-body">
            <!-- auth view -->
            <div class="app-form flex-column" id="estate-login-view">
                <div class="container-100">
                    <h3>Login to Manage Properties</h3>
                </div>
                <div class="container-33 app-input-wrapper">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="input-password" />
                </div>
                <div class="container-33 app-input-wrapper">
                    <button id="btn-login">LOGIN</button>
                </div>
            </div>
            <!-- auth view -->

            <!-- table view -->
            <div class="app-form" id="estate-table-view">
                <!-- <table class="properties-table">
                    <thead>
                        <th>S/N</th>
                        <th>Title</th>
                        <th>Images</th>
                        <th>Edit</th>
                        <th>Visibility</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="sn">1</td>
                            <td>House for sell in Morombo Center</td>
                            <td class="total-images">4</td>
                            <td class="td-icon">
                                <a href="#">
                                    <i class="fa-solid fa-pen-to-square text-accent"></i>
                                </a>
                            </td>
                            <td class="td-icon">
                                <a href="#">
                                    <i class="fa-solid fa-eye text-accent"></i> -->
                <!-- <i class="fa-solid fa-eye-slash text-accent"></i> -->
                <!-- </a>
                            </td>
                            <td class="td-icon">
                                <a href="#">
                                    <i class="fa-solid fa-trash-can text-accent"></i>
                                </a>
                            </td>
                        </tr>

                    </tbody>
                </table> -->
            </div>
            <!-- table view -->
        </div>
        <!-- content -->
    </div>
    <?php include_once("components/footer.php") ?>
    <?php include_once("components/script-imports.php") ?>
</body>

</html>