//Creating the variable for canvas and certain values in in
var canvas = document.getElementById("icon-canvas");
var c = canvas.getContext('2d');
var x1 = 80;
var y1 = 85;
var y2 = 100;
var y3 = 115;

//Once called starts creating a lot of small circles creating lines which result in looking like line with rounded sides
function animate() {
    requestAnimationFrame(animate);

    c.beginPath();
    c.arc(x1, 75, 8, 0, Math.PI * 2, false);
    c.strokeStyle = 'black';
    c.fill();
    c.stroke();
    if (x1 <= 220) {
        x1 += 1;
    }

    c.beginPath();
    c.arc(45, y1, 3, 0, Math.PI * 2, false);
    c.strokeStyle = 'black';
    c.fill();
    c.stroke();
    if (y1 >= 65) {
        y1 -= 1;
    }

    c.beginPath();
    c.arc(257, y1, 3, 0, Math.PI * 2, false);
    c.strokeStyle = 'black';
    c.fill();
    c.stroke();
    if (y1 >= 65) {
        y1 -= 1;
    }

    c.beginPath();
    c.arc(60, y2, 6, 0, Math.PI * 2, false);
    c.strokeStyle = 'black';
    c.fill();
    c.stroke();
    if (y2 >= 50) {
        y2 -= 1;
    }

    c.beginPath();
    c.arc(242, y2, 6, 0, Math.PI * 2, false);
    c.strokeStyle = 'black';
    c.fill();
    c.stroke();
    if (y2 >= 50) {
        y2 -= 1;
    }

    c.beginPath();
    c.arc(80, y3, 8, 0, Math.PI * 2, false);
    c.strokeStyle = 'black';
    c.fill();
    c.stroke();
    if (y3 >= 35) {
        y3 -= 1;
    }

    c.beginPath();
    c.arc(222, y3, 8, 0, Math.PI * 2, false);
    c.strokeStyle = 'black';
    c.fill();
    c.stroke();
    if (y3 >= 35) {
        y3 -= 1;
    }
}
//On click even for the nav bar logo
function onClickCanvas() {
    $('canvas').css('display', 'block');
    animate();
}

