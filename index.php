<?php
// Grabs the URI and breaks it apart in case we have querystring stuff
$request = $_SERVER['REQUEST_URI'];
// Route it up!
switch ($request) {
    case '/gymbro/':
        require 'views/home.php';
        break;
    case '/gymbro/machines':
        require 'views/machines.php';
        break;
    case '/gymbro/dumbbells':
        require 'views/dumbbells.php';
        break;
    case '/gymbro/barbells':
        require 'views/barbells.php';
        break;
    // Everything else
    default:
        header('HTTP/1.0 404 Not Found');
        require 'views/404.php';
        break;
}
