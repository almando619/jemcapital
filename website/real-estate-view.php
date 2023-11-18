<!DOCTYPE html>
<html lang="en">

<head>
    <?php include_once("components/header-imports.php") ?>
    <title>JEMCapital | View Real Estate</title>
</head>

<body id="">
    <?php include_once("components/top-bar.php") ?>
    <div class="main-container">
        <div class="spacer"></div>
        <!-- banner -->
        <div class="page-banner-wrapper mb-20">
            <div class="page-banner">
                <img src="./assets/images/real_estate_3.jpg" alt="image">
                <div class="shader"></div>
            </div>
            <div class="heading-container">
                <a href="real-estate"> <span class="text-primary">Real Estate</span></a>
                <i class="fas fa-angle-double-right"></i>
                <span> View</span>
            </div>
        </div>
        <!-- banner -->

        <!-- content -->
        <div class="page-padded-body">
            <h2 class="mb-20" id="title"></h2>
            <div class="large-image-container" id="large-image-container">
                <img id="large-image" src="" alt="image">
            </div>
            <div class="flex-row" id="images-container">
                <!-- <div class="estate-image-small">
                    <img src="./assets/images/real_estate_2.jpg" alt="">
                </div> -->
            </div>

            <h3 class="mt-20" id="location">
                <i class="fas fa-map-marker-alt mr-10 text-accent"></i>
                <span> </span>
            </h3>
            <h3 class="mt-5 text-accent" id="category">
                <i class="fa-solid fa-clipboard mr-10 "></i>
                <span></span>
            </h3>


            <div class="mt-20" id="description">
                <p>

                </p>
            </div>

            <div class="mt-30">
                <h3 class="text-accent">
                    Interested in this property? Contact us through our contact information below 👇👇👇
                </h3>
            </div>


            <p>Or go back to real estate <a class="text-accent" href="real-estate">here</a> </p>
        </div>
        <!-- content -->
    </div>
    <?php include_once("components/footer.php") ?>
    <?php include_once("components/script-imports.php") ?>
</body>

</html>