<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>GYMBRO - Gym Equipments 24/7</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/canvas.css">
    <script language="JavaScript" type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.10/js/all.js" integrity="sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+" crossorigin="anonymous"></script>

</head>

<body>
    <canvas id="icon-canvas"></canvas>
    <main class="main">

        <?php include ('components/navigationMain.php') ?>

        <header>
            <section class="jumbotron" id="header-home">
                <div class="content-wrapper">
                    <h1>Welcome to GYMBRO</h1>
                    <p>All purpose highest quality gym equipment</p>
                    <a class="btn btn-main" href="#main-cards">Shop Now</a>
                </div>
            </section>
        </header>
        <section class="cards" id="main-cards">
            <ul class="card-flex">
                <li id="first-card">
                    <a class="card-links" href="/gymbro/dumbbells">
                        <div class="card">
                            <img src="assets/main-dumbbells.jpg">
                            <div class="card-content">
                                <h3 class="card-title">Dumbbells</h3>
                                <article>Dumbbells provides you with an efficient and compact way of training nearly any muscle group, anywhere.</article>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="card-links" href="/gymbro/barbells">
                        <div class="card">
                            <img src="assets/main-barbell.jpg">
                            <div class="card-content">
                                <h3 class="card-title">Barbells</h3>
                                <article>Barbells allow more complex exercices to be done with weights of any range, providing you with equipment flexibility and longevity</article>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="card-links" href="/gymbro/machines">
                        <div class="card">
                            <img src="assets/main-machine.jpg">
                            <div class="card-content">
                                <h3 class="card-title">Machines</h3>
                                <article>Exercise machines saves you from the hassle of stocking piles of free weights and compressing everything in one place</article>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
        <section id="video-section">
            <video id="main-video">
               <source src="assets/gym-video.mp4" type="video/mp4">
               Your browser does not support the video tag
           </video>
            <div class="media-controls">
                <button id="playbtn">&#9658;</button>
                <button id="volbtn">Mute</button>
                <input id="vol-control" class="slider" type="range" min="0" max="100" step="1">
                <input type="range" min="0" max="100" value="0" step="1" id="seekbar" class="slider">
                <span id="current">00:00</span>
                <span id="duration">00:00</span>
            </div>
        </section>
        <!-- Overlay and Subscription form -->
        <div id="overlay"></div>
        <div id="subscription-form">
            <form id="subscription">
                <p>Subscribe to our newsletter</p>
                <input type="text" name="firstname" placeholder="First Name" required pattern="^[A-Z]'?[-a-zA-Z]+$">
                <input type="text" name="lastname" placeholder="Last Name" required pattern="^[A-Z]'?[-a-zA-Z]+$">
                <input type="email" name="emailaddress" placeholder="Email" required pattern="[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\">
                <input type="submit" id="submit-btn">
                <button onmousedown="toggleOverlay()" class="btn form-close">Close Form</button>
            </form>
        </div>
        <?php include('components/mainFooter.php') ?>

    </main>
</body>
<script src="js/script.js"></script>
<script src="js/media.js"></script>
<script src="js/canvas.js"></script>

</html>
