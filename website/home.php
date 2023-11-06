<!DOCTYPE html>
<html lang="en">

<head>
    <?php include_once("components/header-imports.php") ?>
    <title>JEMCapital | Home</title>
</head>

<body id="home-body">
    <?php include_once("components/top-bar.php") ?>
    <div class="main-container" id="home-container">
        <div class="spacer"></div>
        <!-- Welcome section -->
        <div class="flex-row">
            <div class="container-50 app-padding flex-row justify-content-center">
                <div id="image-container-1">
                </div>
            </div>
            <div class="container-50 app-padding">
                <div class="logo-wrapper">
                    <img src="./assets/icons/logo.png" alt="JEM | Capital" id />
                </div>
                <h2>We are a financial consultancy & real estate company offering a wide variety of services including
                    Accounting, Auditing, Tax, Advisory and many others.</h2>
            </div>
        </div>
        <!-- Welcome section -->

        <!-- Services swiper -->
        <div class="app-padding mt-20 text-align-center">
            <h1>What we Offer</h1>
        </div>
        <div class="swiper services-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div>
                        <a href="/services-audit">
                            <img src="./assets/images/books_2.jpg" />
                            <div class="shader"></div>
                            <div class="title">Audit & Assurance</div>
                        </a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div>
                        <a href="/services-tax">
                            <img src="./assets/images/tax_1.jpg" />
                            <div class="shader"></div>
                            <div class="title">Tax Consultation</div>
                        </a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div>
                        <a href="/services-accounting">
                            <img src="./assets/images/business_3.jpg" />
                            <div class="shader"></div>
                            <div class="title">Accounting</div>
                        </a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div>
                        <a href="/services-quickbook">
                            <img src="./assets/images/quickBooks_1.png" />
                            <div class="shader"></div>
                            <div class="title">Quickbook Software</div>
                        </a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div>
                        <a href="/services-budgeting">
                            <img src="./assets/images/laptop_3.jpg" />
                            <div class="shader"></div>
                            <div class="title">Budgeting</div>
                        </a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div>
                        <a href="/services-budgeting">
                            <img src="./assets/images/laptop_3.jpg" />
                            <div class="shader"></div>
                            <div class="title">See All Services</div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <!-- Services swiper -->
    </div>
    <?php include_once("components/footer.php") ?>
    <?php include_once("components/script-imports.php") ?>
</body>

</html>