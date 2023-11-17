<!DOCTYPE html>
<html lang="en">

<head>
    <?php include_once("components/header-imports.php") ?>
    <title>JEMCapital | Add Real Estate</title>
</head>

<body id="">
    <?php include_once("components/top-bar.php") ?>
    <div class="main-container">
        <div class="spacer"></div>
        <!-- banner -->
        <div class="page-banner-wrapper mb-20">
            <div class="page-banner">
                <img src="./assets/images/real_estate_5.jpg" alt="image">
                <div class="shader"></div>
            </div>
            <div class="heading-container">
                <a href="real-estate"> <span class="text-primary">Real Estate</span></a>
                <i class="fas fa-angle-double-right"></i>
                <span> Add New</span>
            </div>
        </div>
        <!-- banner -->

        <!-- content -->
        <div class="page-padded-body">
            <!-- auth view -->
            <div class="app-form flex-column" id="estate-login-view">
                <div class="container-100">
                    <h3>Login to Add New Property</h3>
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

            <!-- form view -->
            <div class="app-form flex-row" id="estate-form-view">
                <div class="container-100 app-input-wrapper">
                    <h3>Property Details</h3>
                </div>

                <div class="container-33 app-input-wrapper">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="input-title" />
                </div>
                <div class="container-33 app-input-wrapper">
                    <label for="category">Category</label>
                    <select name="category" id="input-category">
                        <option value="SALE">Sale</option>
                        <option value="RENT">Rent</option>
                    </select>
                </div>
                <div class="container-33 app-input-wrapper">
                    <label for="location">Location</label>
                    <input type="text" name="location" id="input-location" />
                </div>
                <div class="container-100 app-input-wrapper">
                    <label for="description">Description</label>
                    <textarea name="description" id="input-description" cols="30" rows="10"></textarea>
                </div>
                <button class="mt-20" id="button-save">SAVE</button>

                <div class="container-100 app-input-wrapper">
                    <h3>Images</h3>
                </div>
                <div class="container-100 flex-row">
                    <div id="image-input-wrapper">
                        <input id="input-image" disabled name="input-image" type="file" accept="image/*" />
                    </div>
                    <button disabled id="button-upload">Upload</button>
                </div>
                <div class="flex-row mt-20 full-width" id="images-container">
                    <!-- <div class="estate-image">
                        <img src="./assets/images/real_estate_2.jpg" alt="">
                        <div class="close-icon">
                            <i class="fas fa-times"></i>
                        </div>
                    </div> -->
                </div>

                <!-- Complete -->
                <button class="mt-20" disabled id="button-finish">FINISH</button>

            </div>
            <!-- form view -->
        </div>
        <!-- content -->
    </div>
    <?php include_once("components/footer.php") ?>
    <?php include_once("components/script-imports.php") ?>
</body>

</html>