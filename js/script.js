function myFunction() {
    var nav = document.getElementById("topnav");
    if (nav.className === "nav-main") {
        nav.className += " responsive";
    } else {
        nav.className = "nav-main";
    }
}
//Provides smooth scroll to the next section for the "Shop now" anchor on jumbotron section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Task 9. price of products in 5 major currencies
$('.currency').on('change', function () {
    // value in gbp
    var dumbbell = 179;
    var barbell = 250;
    var machine = 489;
    var symbol = String;
    var current = this.value;
    var GBP;
    var EUR;
    var JPY;
    var CAD;
    // getting the JSON file for current currencies values
    $.getJSON("http://apilayer.net/api/live?access_key=c9e7ab78feed4069a5ec7301966cc8a4&currencies=GBP,EUR,JPY,CAD&format=1", function (result) {
        $.each(result, function (i, result) {
            GBP = result.USDGBP;
            EUR = result.USDEUR;
            JPY = result.USDJPY;
            CAD = result.USDCAD;
        })
        // Depending on which currency is selected, will calculate its value accordingly
        if (current == 'gbp') {
            symbol = "&#8356;";
            dumbbell = symbol + dumbbell;
            barbell = symbol + barbell;
            machine = symbol + machine;
        }
        if (current == 'usd') {
            dumbbell = (dumbbell / GBP).toFixed(2);
            barbell = (barbell / GBP).toFixed(2);
            machine = (machine / GBP).toFixed(2);
            symbol = "&#36;";
            dumbbell = symbol + dumbbell;
            barbell = symbol + barbell;
            machine = symbol + machine;
        }
        if (current == 'eur') {
            dumbbell = (dumbbell * EUR).toFixed(2);
            barbell = (barbell * EUR).toFixed(2);
            machine = (machine * EUR).toFixed(2);
            symbol = "&euro;";
            dumbbell = symbol + dumbbell;
            barbell = symbol + barbell;
            machine = symbol + machine;
        }
        if (current == 'jpy') {
            dumbbell = (dumbbell * JPY).toFixed(2);
            barbell = (barbell * JPY).toFixed(2);
            machine = (machine * JPY).toFixed(2);
            symbol = "&yen;";
            dumbbell = symbol + dumbbell;
            barbell = symbol + barbell;
            machine = symbol + machine;
        }
        if (current == 'cad') {
            dumbbell = (dumbbell * CAD).toFixed(2);
            barbell = (barbell * CAD).toFixed(2);
            machine = (machine * CAD).toFixed(2);
            symbol = "&#36;";
            dumbbell = symbol + dumbbell;
            barbell = symbol + barbell;
            machine = symbol + machine;
        }
        //Changes the prices on the page to those that were calculated
        $('#dumbbell-price').html(dumbbell);
        $('#barbell-price').html(barbell);
        $('#machines-price').html(machine);
    });

});
// TASK 7
// Font size selection
function localFontsize(localfont) {
    if (localfont == 1) {
        $("h1").css("font-size", "1.5em");
    }
    if (localfont == 2) {
        $("h1").css("font-size", "1.3em");
    }
    if (localfont == 3) {
        $("h1").css("font-size", "1.7em");
    }
    if (localfont == 4) {
        $("h1").css("font-size", "1.9em");
    }
}
// To reduce amount of code function is created for setting and getting local storage items
function fontstorage(i) {
    localStorage.setItem('fontsize', i);
    var localfont = localStorage.getItem('fontsize');
    localFontsize(localfont);
}

$('.font-selection').on('change', function () {
    var current = this.value;
    if (current == 'Default') {
        fontstorage(1);
    }
    if (current == 'Small') {
        fontstorage(2);
    }
    if (current == 'Medium') {
        fontstorage(3);
    }
    if (current == 'Large') {
        fontstorage(4);
    }
});

var localfont = localStorage.getItem('fontsize');
$(document).ready ( localFontsize(localfont));


// Assigning background properties to the local storage values
function localBackground(localc) {
    if (localc == 1) {
        $("h1").css("background", "transparent");
    }
    if (localc == 2) {
        $("h1").css("background", "rgba(76, 175, 80, 0.3)");
    }
    if (localc == 3) {
        $("h1").css("background", "rgba(40, 40, 175, 0.3)");
    }
    if (localc == 4) {
        $("h1").css("background", "rgba(175, 80, 80, 0.3)");
    }
    if (localc == 5) {
        $("h1").css("background", "rgba(255, 255, 0, 0.3)");
    }
}

function backgroundstorage(i) {
    localStorage.setItem('background', i);
    var localc = localStorage.getItem('background');
    localBackground(localc);
}
//Function for H1 tag background selection
$('.background-selection').on('change', function () {
    var current = this.value;
    if (current == 'Default') {
        backgroundstorage(1);
    }
    if (current == 'Green') {
        backgroundstorage(2);
    }
    if (current == 'Blue') {
        backgroundstorage(3);
    }
    if (current == 'Red') {
        backgroundstorage(4);
    }
    if (current == 'Yellow') {
        backgroundstorage(5);
    }
});

// Loading the prefered header background color on page changes
var localb = localStorage.getItem('background');
$(document).ready ( localBackground(localb));
// ------------------ END --------------------------------------


// TASK 10 Form submission
// Function for Subscription form display
function toggleOverlay() {
    var overlay = document.getElementById('overlay');
    var subscription = document.getElementById('subscription-form');
    //Adds smooth scroll to the form.
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    overlay.style.opacity = .9;
    if (overlay.style.display == "block") {
        overlay.style.display = "none";
        subscription.style.display = "none";
        //Removes ability to scroll while the form is still in view
        $("body").css("overflow-y", "visible");

    } else {
        overlay.style.display = "block";
        subscription.style.display = "block";
        $("body").css("overflow-y", "hidden");
    }
};
//Data post to server
$('#subscription').submit(function (i) {
    i.preventDefault();
    $.ajax({
        type: 'post',
        url: 'http://www.talade.worcestercomputing.com/mailing.php',
        data: $('#subscription').serialize(),
        success: function (data) {
            alert(data);
        },
        error: function () {
            alert("Failed");
        }
    });
});
