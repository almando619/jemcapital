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
        <div id="welcome-banner" class="flex-column align-items-center app-padding justify-content-center">
            <div class="logo-wrapper">
                <img src="./assets/icons/logo.png" alt="JEM | Capital" id />
            </div>
            <h3 class="text-align-center mt-30">FINANCIAL CONSULTANCY COMPANY & REAL ESTATE AGENT</h3>
        </div>
        <div class="flex-row">
            <div class="container-100" id="image-container-1">
                <div class="welcome-shader app-padding flex-row align-items-center justify-content-center">
                    <h2>
                        We are a financial consultancy & real estate company offering a wide variety of services including
                        Accounting, Auditing, Tax, Advisory and many others. Click <a class="text-accent" href="about">here</a>
                        to learn more about us.
                    </h2>
                </div>

            </div>
        </div>
        <!-- Welcome section -->

        <!-- Services swiper -->
        <div class="app-padding mt-20 text-align-center">
            <h1>Our Services</h1>
        </div>
        <div class="swiper services-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div>
                        <a href="audit">
                            <img src="./assets/images/books_2.jpg" />
                            <div class="shader"></div>
                            <div class="title">Audit & Assurance</div>
                        </a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div>
                        <a href="tax">
                            <img src="./assets/images/tax_1.jpg" />
                            <div class="shader"></div>
                            <div class="title">Tax Consultation</div>
                        </a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div>
                        <a href="accounting">
                            <img src="./assets/images/business_3.jpg" />
                            <div class="shader"></div>
                            <div class="title">Accounting</div>
                        </a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div>
                        <a href="quickbook">
                            <img src="./assets/images/quickBooks_1.png" />
                            <div class="shader"></div>
                            <div class="title">Quickbook Accounting Software</div>
                        </a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div>
                        <a href="efd-machines">
                            <img src="./assets/images/efd_machines.png" />
                            <div class="shader"></div>
                            <div class="title">EFD Machines</div>
                        </a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div>
                        <a href="services">
                            <img src="./assets/images/more_services.png" />
                            <div class="shader"></div>
                            <div class="title"><span class="mr-10">View More Services</span><i class="fas fa-long-arrow-alt-right"></i></div>
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