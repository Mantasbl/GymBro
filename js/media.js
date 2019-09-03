
// Task 5. Custom Video controls
var video = document.getElementById("main-video");
var playbtn = document.getElementById("playbtn");
var volumebtn = document.getElementById("volbtn");
var seekbar = document.getElementById("seekbar");

function playVideo() {
    if (video.paused) {
        video.play();
        playbtn.innerHTML = "&#10074;&#10074;";
    } else {
        video.pause();
        playbtn.innerHTML = "&#9658;";
    }
}

playbtn.addEventListener("click", playVideo);

function muteVolume() {
    if (video.muted) {
        video.muted = false;
        volumebtn.innerHTML = "Mute";
    } else {
        video.muted = true;
        volumebtn.innerHTML = "Unmute";
    }
}

volumebtn.addEventListener("click", muteVolume);

//Seek Bar
function seekVid() {
    var slideto = video.duration * (seekbar.value / 100);
    video.currentTime = slideto;
}

function updateSeekbar() {
    var newtime = video.currentTime * (100 / video.duration);
    seekbar.value = newtime;
}

seekbar.addEventListener("change", seekVid);
video.addEventListener("timeupdate", updateSeekbar);

//Volume change
var volume = document.getElementById("vol-control");

volume.addEventListener("input", function () {
    video.volume = this.value / 100;
});

//Display and changes of Current time and video Duration
$(document).ready(function () {
    $("#main-video").on(
        "timeupdate",
        function (event) {
            onTrackedVideoFrame(this.currentTime, this.duration);
        });
});
//Changes the raw data into default time display
function onTrackedVideoFrame(currentTime, duration) {
    function transformer(time) {
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
        if (minutes < 10) {
            if (minutes < 1) {
                if (seconds < 10) {
                    return "00" + ":" + "0" + seconds;
                } else {
                    return "00" + ":" + seconds;
                }
            } else {
                if (seconds < 10) {
                    return "0" + minutes + ":" + "0" + seconds;
                } else {
                    return "0" + minutes + ":" + seconds;
                }
            }

        } else {
            if (seconds < 10) {
                return minutes + ":" + "0" + seconds;
            } else {
                return minutes + ":" + seconds;
            }
        }
    }

    var current = transformer(currentTime.toFixed(0));
    var duration = transformer(duration.toFixed(0));

    $("#current").text("( " + current); //Change #current to currentTime
    $("#duration").text(duration + " )");
};
