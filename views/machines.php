<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>GYMBRO - Gym Equipments 24/7</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/canvas.css">
    <script language="JavaScript" type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<body>
    <canvas id="icon-canvas"></canvas>
    <main class="main">

        <?php include ('components/navigationMain.php') ?>

        <header>
            <section class="jumbotron" id="header-machines">
                <div class="content-wrapper">
                    <h1>Exercise Machines</h1>
                    <p>Finest selection of high quality exercise machines</p>
                </div>
            </section>
        </header>
        <section class="product-display" id="barbell-display">
            <input type="checkbox" id="zoomCheck">
            <label for="zoomCheck">
                <img src="assets/product-machines.jpg" alt="Exercise Machine">
            </label>
            <div class="product-content">
                <h1>Machines</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus mollitia inventore eum delectus voluptatem molestiae. Inventore explicabo earum, libero! Rem.</p>
                <audio class="product-sound" controls>
                <source src="assets/gymsound.mp3">
                </audio>
                <p id="machines-price" class="product-price">489 &#163;</p>
                <select name="currency" class="currency">
                    <option value="gbp">GBP</option>
                    <option value="eur">EUR</option>
                    <option value="usd">USD</option>
                    <option value="cad">CAD</option>
                    <option value="jpy">JPY</option>
                </select>
                <a class="btn btn-product" href="#main-cards">Buy now</a>
            </div>
        </section>
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
<script src="js/canvas.js"></script>

</html>
