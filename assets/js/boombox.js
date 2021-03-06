/*----------------------------IOS Switch Background ----------------- */
$(document).ready(function () {

    $("#button").click(function () {

        var classname = $("#button").attr('class');

        if (classname == 'button-on') {

            $("#button").attr('class', 'button');
            $("#tutorial").attr('class', 'tutorial');
            $("#block-speaker").attr('class', 'block-speaker');
            $(document.getElementById("background").style.backgroundColor = "#8a8a8aff");
            $(document.getElementById("speaker-small-color-changer").style.backgroundColor = "#8d8d8d");
            $(document.getElementById("speaker-big-color-changer").style.backgroundColor = "#8d8d8d");
            $(document.getElementById("speaker-power").style.borderColor = "gray");
            $("#tutorial-2").attr('class', 'tutorial-2-hide');
            $("#tutorial").attr('class', 'tutorial-hide');
            $("#block-speaker").attr('class', 'block-speaker-hide');
            

        }
        else {

            $("#button").attr('class', 'button-on');
            $("#tutorial").attr('class', 'tutorial-hide');
            $("#tutorial-2").attr('class', 'tutorial-2');
    
            $("#block-speaker").attr('class', 'block-speaker-hide');
            $(document.getElementById("background").style.backgroundColor = "#97F2F3");
            $(document.getElementById("speaker-small-color-changer").style.backgroundColor = "#97F2F3");
            $(document.getElementById("speaker-big-color-changer").style.backgroundColor = "#97F2F3");
            $(document.getElementById("speaker-power").style.borderColor = "#00ff00");

        }

    });

});

/*----------------------------IOS Power Switch Screen ----------------- */
$(document).ready(function () {

    $("#screen-button").click(function () {

        var classname = $("#screen-button").attr('class');

        if (classname == 'screen-button-on') {

            $("#screen-button").attr('class', 'screen-button');
            $("#screen-switch").attr('class', 'light-switch-screen-bg');
            $("#screen-top-up").attr('class', 'screen-top-up');
            $("#screen-bottom-up").attr('class', 'screen-bottom-up');
            $("#welcome").text("BYE");
            $("#volume-box").attr('class', 'volume-box');
            $("#volume-bar").attr('class', 'volume-bar');
            $("#welcome-intro1").attr('class', 'welcome-triangle-hide');
            $("#welcome-intro2").attr('class', 'welcome-triangle-hide');
            $("#welcome-intro3").attr('class', 'welcome-triangle-hide');
            $("#music-player").removeClass('music-player');
            $("#play").removeClass('fas fa-play');
            $("#next").removeClass('fas fa-forward');
            $("#back").removeClass('fas fa-backward');
            $("#seekslider").attr('class', 'seekslider-hide');
            $("#menu-button").removeClass('menu-button');
            $("#item-1").attr('class', 'item-hide');
            $("#item-2").attr('class', 'item-hide');
            $("#item-3").attr('class', 'item-hide');
            $("#item-4").attr('class', 'item-hide');
            $("#changeRed").attr('class', '');
            $("#changeBlue").attr('class', '');
            $("#changeGreen").attr('class', '');
            $("#changeOrange").attr('class', '');
            $("#color-picker").attr('class', '');
            $("#color-menu-bar").attr('class', '');
            $("#color-menu-bar > h2").text("");
            $("#menu-button > h5").text("");
            $("#changeRed > h2").text("");
            $("#changeBlue > h2").text("");
            $("#changeGreen > h2").text("");
            $("#changeOrange > h2").text("");
            $("#click-to-enter").text("");
            $("#timebox").attr('class', 'timebox-hide');
            $("#playlist_status").attr('class', 'playlist-name-hide');
            $("#thumbnail").attr('class', 'thumbnail-hide');
            $("#song-picker").attr('class', 'song-picker-hide');
            $("#libary-menu-bar").attr('class', '');
            $("#libary-menu-bar > h2").text("");
            $("#thumbnail").attr('class', 'thumbnail-song1-hide');
            

        }
        else {

            $("#screen-button").attr('class', 'screen-button-on');
            $("#screen-switch").attr('class', 'light-switch-screen-bg-on');
            $("#volume-box").attr('class', 'volume-box');
            $("#volume-bar").attr('class', 'volume-bar');
            $("#screen-top-up").attr('class', 'screen-top-down');
            $("#screen-bottom-up").attr('class', 'screen-bottom-down');
            $("#welcome").text("WELCOME");
            $("#click-to-enter").text("Click Me");
            $("#welcome-intro1").attr('class', '');
            $("#welcome-intro2").attr('class', '');
            $("#welcome-intro3").attr('class', '');
        }

    });

});


/*----------------------------color Switch Buttons ----------------- */
function changeRed() {
    document.getElementById("background").style.backgroundColor = "#ff8b92";
    document.getElementById("volume-box").style.borderColor = "#ff8b92";
    document.getElementById("speaker-small-color-changer").style.backgroundColor = "#ff8b92";
    document.getElementById("speaker-big-color-changer").style.backgroundColor = "#ff8b92";
    document.getElementById("volume-bar").style.backgroundColor = "#ff8b92";
    document.getElementById("welcome").style.color = "#ff8b92";
    document.getElementById("clock").style.color = "#ff8b92";
    document.getElementById("seekslider").style.backgroundColor = "#ff8b92";
    document.getElementById("playlist_status").style.color = "#ff8b92";
    document.getElementById("thumbnail").style.borderColor = "#ff8b92";
    document.getElementById("play").style.color = "#ff8b92";
    document.getElementById("click-to-enter").onmouseover = function () {
        this.style.textDecorationColor = "#ff8b92";
    }
    document.getElementById("click-to-enter").onmouseout = function () {
        this.style.backgroundColor = "transparent";
    }
    document.getElementById("item-2").onmouseover = function () {
        this.style.backgroundColor = "#ff8b92";
    }
    document.getElementById("item-2").onmouseout = function () {
        this.style.backgroundColor = "white";
    }
    document.getElementById("item-3").onmouseover = function () {
        this.style.backgroundColor = "#ff8b92";
    }
    document.getElementById("item-3").onmouseout = function () {
        this.style.backgroundColor = "white";
    }
    document.getElementById("item-4").onmouseover = function () {
        this.style.backgroundColor = "#ff8b92";
    }
    document.getElementById("item-4").onmouseout = function () {
        this.style.backgroundColor = "white";
    }
    document.getElementById("menu-button").onmouseover = function () {
        this.style.borderColor = "#ff8b92";
    }
    document.getElementById("menu-button").onmouseout = function () {
        this.style.borderColor = "black";
    }

};
function changeBlue() {
    document.getElementById("background").style.backgroundColor = "#97F2F3";
    document.getElementById("volume-box").style.borderColor = "#97F2F3";
    document.getElementById("speaker-small-color-changer").style.backgroundColor = "#97F2F3";
    document.getElementById("speaker-big-color-changer").style.backgroundColor = "#97F2F3";
    document.getElementById("volume-bar").style.backgroundColor = "#97F2F3";
    document.getElementById("welcome").style.color = "#97F2F3";
    document.getElementById("clock").style.color = "#97F2F3";
    document.getElementById("seekslider").style.backgroundColor = "#97F2F3";
    document.getElementById("playlist_status").style.color = "#97F2F3";
    document.getElementById("thumbnail").style.borderColor = "#97F2F3";
    document.getElementById("play").style.color = "#97F2F3";
    document.getElementById("click-to-enter").onmouseover = function () {
        this.style.textDecorationColor = "#97F2F3";
    }
    document.getElementById("click-to-enter").onmouseout = function () {
        this.style.backgroundColor = "transparent";
    }
    document.getElementById("item-2").onmouseover = function () {
        this.style.backgroundColor = "#97F2F3";
    }
    document.getElementById("item-2").onmouseout = function () {
        this.style.backgroundColor = "white";
    }
    document.getElementById("item-3").onmouseover = function () {
        this.style.backgroundColor = "#97F2F3";
    }
    document.getElementById("item-3").onmouseout = function () {
        this.style.backgroundColor = "white";
    }
    document.getElementById("item-4").onmouseover = function () {
        this.style.backgroundColor = "#97F2F3";
    }
    document.getElementById("item-4").onmouseout = function () {
        this.style.backgroundColor = "white";
    }
    document.getElementById("menu-button").onmouseover = function () {
        this.style.borderColor = "#97F2F3";
    }
    document.getElementById("menu-button").onmouseout = function () {
        this.style.borderColor = "black";
    }
};
function changeGreen() {
    document.getElementById("background").style.backgroundColor = "#d1eb79"
    document.getElementById("volume-box").style.borderColor = "#d1eb79";
    document.getElementById("speaker-small-color-changer").style.backgroundColor = "#d1eb79";
    document.getElementById("speaker-big-color-changer").style.backgroundColor = "#d1eb79";
    document.getElementById("volume-bar").style.backgroundColor = "#d1eb79";
    document.getElementById("welcome").style.color = "#d1eb79";
    document.getElementById("clock").style.color = "#d1eb79";
    document.getElementById("seekslider").style.backgroundColor = "#d1eb79";
    document.getElementById("playlist_status").style.color = "#d1eb79";
    document.getElementById("thumbnail").style.borderColor = "#d1eb79";
    document.getElementById("play").style.color = "#d1eb79";
    document.getElementById("click-to-enter").onmouseover = function () {
        this.style.textDecorationColor = "#d1eb79";
    }
    document.getElementById("click-to-enter").onmouseout = function () {
        this.style.backgroundColor = "transparent";
    }
    document.getElementById("item-2").onmouseover = function () {
        this.style.backgroundColor = "#d1eb79";
    }
    document.getElementById("item-2").onmouseout = function () {
        this.style.backgroundColor = "white";
    }
    document.getElementById("item-3").onmouseover = function () {
        this.style.backgroundColor = "#d1eb79";
    }
    document.getElementById("item-3").onmouseout = function () {
        this.style.backgroundColor = "white";
    }
    document.getElementById("item-4").onmouseover = function () {
        this.style.backgroundColor = "#d1eb79";
    }
    document.getElementById("item-4").onmouseout = function () {
        this.style.backgroundColor = "white";
    }
    document.getElementById("menu-button").onmouseover = function () {
        this.style.borderColor = "#d1eb79";
    }
    document.getElementById("menu-button").onmouseout = function () {
        this.style.borderColor = "black";
    }


};

function changeOrange() {
    document.getElementById("background").style.backgroundColor = "#FDCF76"
    document.getElementById("volume-box").style.borderColor = "#FDCF76";
    document.getElementById("speaker-small-color-changer").style.backgroundColor = "#FDCF76";
    document.getElementById("speaker-big-color-changer").style.backgroundColor = "#FDCF76";
    document.getElementById("volume-bar").style.backgroundColor = "#FDCF76";
    document.getElementById("welcome").style.color = "#FDCF76";
    document.getElementById("clock").style.color = "#FDCF76";
    document.getElementById("seekslider").style.backgroundColor = "#FDCF76";
    document.getElementById("playlist_status").style.color = "#FDCF76";
    document.getElementById("thumbnail").style.borderColor = "#FDCF76";
    document.getElementById("play").style.color = "#FDCF76";
    document.getElementById("click-to-enter").onmouseover = function () {
        this.style.textDecorationColor = "#FDCF76";
    }
    document.getElementById("click-to-enter").onmouseout = function () {
        this.style.backgroundColor = "transparent";
    }
    document.getElementById("item-2").onmouseover = function () {
        this.style.backgroundColor = "#FDCF76";
    }
    document.getElementById("item-2").onmouseout = function () {
        this.style.backgroundColor = "white";
    }
    document.getElementById("item-3").onmouseover = function () {
        this.style.backgroundColor = "#FDCF76";
    }
    document.getElementById("item-3").onmouseout = function () {
        this.style.backgroundColor = "white";
    }
    document.getElementById("item-4").onmouseover = function () {
        this.style.backgroundColor = "#FDCF76";
    }
    document.getElementById("item-4").onmouseout = function () {
        this.style.backgroundColor = "white";
    }
    document.getElementById("menu-button").onmouseover = function () {
        this.style.borderColor = "#FDCF76";
    }
    document.getElementById("menu-button").onmouseout = function () {
        this.style.borderColor = "black";
    }
};
/*----------------------------Screen Zoom Effect ----------------- */
$(document).on('click', '#speaker-top', function () {
    $(this).addClass('screen-top-zoom').removeClass('screen-top');
    $(this).find('#screen-switch').addClass('light-switch-screen-bg').removeClass('light-switch-screen-hide');
    $(this).find('#volume-box').addClass('volume-box').removeClass('volume-box-hide');
    $(this).children().addClass('inner-screen-area').removeClass('inner-screen-area-hide');
    $(this).siblings().addClass('speaker-box-hide').removeClass('speaker-box-show');
    $(this).find('.welcome-hide').removeClass('welcome-hide').addClass('welcome-show');
    $("#tutorial-2").attr('class', 'tutorial-2-hide');


});

/*----------------------------Screen Zoom out ----------------- */
$(document).on('click', '#background', function () {
    $('#speaker-top').removeClass('screen-top-zoom').addClass('screen-top');
    $('#speaker-box').removeClass('speaker-box-hide').addClass('speaker-box-show');
    $('#volume-box').addClass('volume-box-hide').removeClass('volume-box');
    $('.welcome-show').removeClass('welcome-show').addClass('welcome-hide');
});

/*---------------------------- welcome animation ----------------- */

$(document).on('click', '#click-to-enter', function () {
    $("#welcome").text("");
    $("#click-to-enter").text("");
    $("#welcome-intro1").attr('class', 'welcome-triangle-hide');
    $("#welcome-intro2").attr('class', 'welcome-triangle-hide');
    $("#welcome-intro3").attr('class', 'welcome-triangle-hide');
    $("#menu").attr('class', 'menu');
    $("#music-player").removeClass('music-player');
    $("#play").removeClass('fas fa-play');
    $("#next").removeClass('fas fa-forward');
    $("#back").removeClass('fas fa-backward');
    $("#seekslider").attr('class', 'seekslider-hide');
    $("#item-2 > h1").text("Player");
    $("#item-3 > h1").text("Libary");
    $("#item-4 > h1").text("Colors");
    $("#item-1").attr('class', 'item-1');
    $("#item-2").attr('class', 'item-2');
    $("#item-3").attr('class', 'item-3');
    $("#item-4").attr('class', 'item-4');
    $("#changeRed").attr('class', '');
    $("#changeBlue").attr('class', '');
    $("#changeGreen").attr('class', '');
    $("#changeOrange").attr('class', '');
    $("#color-picker").attr('class', '');
    $("#color-menu-bar").attr('class', '');
    $("#menu-button > 5").text("");
    $("#menu-button").attr('class', '');
    $("#color-menu-bar > h2").text("");
    $("#changeRed > h2").text("");
    $("#changeBlue > h2").text("");
    $("#changeGreen > h2").text("");
    $("#changeOrange > h2").text("");
    $("#item-1 > h1").text("HOME");


});

/*---------------------------- menu screen ----------------- */

$(document).on('click', '#menu-button', function () {
    $("#welcome-intro1").attr('class', 'welcome-triangle-hide');
    $("#welcome-intro2").attr('class', 'welcome-triangle-hide');
    $("#welcome-intro3").attr('class', 'welcome-triangle-hide');
    $("#menu").attr('class', 'menu');
    $("#music-player").removeClass('music-player');
    $("#play").removeClass('fas fa-play');
    $("#next").removeClass('fas fa-forward');
    $("#back").removeClass('fas fa-backward');
    $("#timebox").attr('class', 'timebox-hide');
    $("#seekslider").attr('class', 'seekslider-hide');
    $("#item-2 > h1").text("Player");
    $("#item-3 > h1").text("Libary");
    $("#item-4 > h1").text("Colors");
    $("#item-1").attr('class', 'item-1');
    $("#item-2").attr('class', 'item-2');
    $("#item-3").attr('class', 'item-3');
    $("#item-4").attr('class', 'item-4');
    $("#changeRed").attr('class', '');
    $("#changeBlue").attr('class', '');
    $("#changeGreen").attr('class', '');
    $("#changeOrange").attr('class', '');
    $("#color-picker").attr('class', '');
    $("#color-menu-bar").attr('class', '');
    $("#menu-button > h5").text("");
    $("#menu-button").attr('class', '');
    $("#color-menu-bar > h2").text("");
    $("#changeRed > h2").text("");
    $("#changeBlue > h2").text("");
    $("#changeGreen > h2").text("");
    $("#changeOrange > h2").text("");
    $("#item-1 > h1").text("HOME");
    $("#playlist_status").attr('class', 'playlist-name-hide');
    $("#thumbnail").attr('class', 'thumbnail-hide');
    $("#song-picker").attr('class', 'song-picker-hide');
    $("#libary-menu-bar").attr('class', '');
    $("#libary-menu-bar > h2").text("");
    $("#thumbnail").attr('class', 'thumbnail-song1-hide');



});

/*---------------------------- music Player ----------------- */

$(document).on('click', '#item-2', function () {
    $("#welcome-intro1").attr('class', 'welcome-triangle1');
    $("#welcome-intro2").attr('class', 'welcome-triangle2');
    $("#welcome-intro3").attr('class', 'welcome-triangle3');
    $("#welcome").text("");
    $("#click-to-enter").text("");
    $("#music-player").addClass('music-player');
    $("#play").addClass('fas fa-play');
    $("#next").addClass('fas fa-forward');
    $("#back").addClass('fas fa-backward');
    $("#seekslider").attr('class', 'seekslider');
    $("#menu-button").addClass('menu-button');
    $("#item-1").attr('class', 'item-hide');
    $("#item-2").attr('class', 'item-hide');
    $("#item-3").attr('class', 'item-hide');
    $("#item-4").attr('class', 'item-hide');
    $("#menu-button > h5").text("HOME");
    $("#timebox").attr('class', 'timebox');
    $("#playlist_status").attr('class', 'playlist-name');
    $("#thumbnail").attr('class', 'thumbnail');

});
/*---------------------------- Song picker ----------------- */

$(document).on('click', '#item-3', function () {
    $("#song-picker").attr('class', 'song-picker');
    $("#item-1").attr('class', 'item-hide');
    $("#item-2").attr('class', 'item-hide');
    $("#item-3").attr('class', 'item-hide');
    $("#item-4").attr('class', 'item-hide');
    $("#feels").attr('class', 'feels');
    $("#odessa").attr('class', 'odessa');
    $("#granted").attr('class', 'granted');
    $("#pinkcloud").attr('class', 'pinkcloud');
    $("#libary-menu-bar").attr('class', 'libary-menu-bar');
    $("#libary-menu-bar > h2").text("Libary");
    $("#menu-button > h5").text("HOME");
    $("#item-1 > h1").text("");
    $("#menu-button").attr('class', 'menu-button');
    $("#feels > h2").text("Feels - Laxcity");
    $("#odessa > h2").text("Odessa - Sonns");
    $("#granted > h2").text("Granted - Laxcity");
    $("#pinkcloud > h2").text("Hittin Hard - Pinkcloud)");
    $("#thumbnail-1").attr('class', 'thumbnail-song1');
    $("#thumbnail-2").attr('class', 'thumbnail-song1');
    $("#thumbnail-3").attr('class', 'thumbnail-song1');
    $("#thumbnail-4").attr('class', 'thumbnail-song1');
    


});

/*---------------------------- color picker ----------------- */

$(document).on('click', '#item-4', function () {
    $("#color-picker").attr('class', 'color-picker');
    $("#item-1").attr('class', 'item-hide');
    $("#item-2").attr('class', 'item-hide');
    $("#item-3").attr('class', 'item-hide');
    $("#item-4").attr('class', 'item-hide');
    $("#changeRed").attr('class', 'changeRed');
    $("#changeBlue").attr('class', 'changeBlue');
    $("#changeGreen").attr('class', 'changeGreen');
    $("#changeOrange").attr('class', 'changeOrange');
    $("#color-menu-bar").attr('class', 'color-menu-bar');
    $("#color-menu-bar > h2").text("Pick a Color");
    $("#changeRed > h2").text("RED");
    $("#changeBlue > h2").text("BLUE");
    $("#changeGreen > h2").text("GREEN");
    $("#changeOrange > h2").text("ORANGE");
    $("#menu-button > h5").text("HOME");
    $("#item-1 > h1").text("");
    $("#menu-button").attr('class', 'menu-button');
});


/*---------------------------- clock ----------------- */
// This is code from W3schools.com 
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('clock').innerHTML =
        h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
};
/*---------------------------- Music player  ----------------- */
// This is code i learned and used the parts of the code for my music player
// it is from http://www.developphp.com/video/JavaScript/Audio-Playlist-Array-Tutorial

function initAudioPlayer() {

    var audio, playbutton, seekslider, mutebutton, playfeels, playodessa, playgranted, volumeslider, seeking = false, seekto, curtimetext, durtimetext;
    var dir = "assets/audio/";
    var playlist = ["Feels - Laxcity", "Odessa - Sonns", "Granted - Laxcity", "Hittin Hard - Pinkcloud"];
    var playlist_index = 0;
    var ext = ".mp3";
    audio = new Audio();
    audio.src = dir + playlist[0] + ext;
    audio.loop = false;
    audio.pause();
    playlist_status.innerHTML = playlist[playlist_index];
    // set object reference
    playbutton = document.getElementById("play");
    seekslider = document.getElementById("seekslider");
    volumeslider = document.getElementById("volume-bar");
    curtimetext = document.getElementById("curtimetext");
    mutebutton = document.getElementById("mutebutton");
    durtimetext = document.getElementById("durtimetext");
    playlist_status = document.getElementById("playlist_status");
    playfeels = document.getElementById("feels");
    playodessa = document.getElementById("odessa");
    playgranted = document.getElementById("granted");
    //add event handling
    mutebutton.addEventListener("click", mute);
    playbutton.addEventListener("click", playPause);
    seekslider.addEventListener("mousedown", function (event) { seeking = true; seek(event); });
    seekslider.addEventListener("mousemove", function (event) { seek(event); });
    seekslider.addEventListener("mouseup", function () { seeking = false; });
    volumeslider.addEventListener("mousemove", setvolume);
    audio.addEventListener("timeupdate", function () { seektimeupdate(); });
    audio.addEventListener("ended", function () { switchTrack(); });
    function playPause() {
        if (audio.paused) {
            audio.play();
            playbutton.style.color = "#97F2F3";
        } else {
            audio.pause();
            playbutton.style.color = "black";
        }
    }
    function mute(){
		if(audio.muted){
		    audio.muted = false;
		    mutebutton.style.color = "#cccccc";
	    } else {
		    audio.muted = true;
		    mutebutton.style.color = "red";
	    }
	}
    //////////////////////
    function switchTrack() {
        if (playlist_index == (playlist.length - 1)) {
            playlist_index = 0;
        } else {
            playlist_index++;
        }
        playlist_status.innerHTML = playlist[playlist_index];
        audio.src = dir + playlist[playlist_index] + ext;
        audio.play();
    }

    function seek(event) {
        if (seeking) {
            seekslider.value = event.clientX - seekslider.offsetLeft;
            seekto = audio.duration * (seekslider.value / 100);
            audio.currentTime = seekto;
        }
    }
    function setvolume() {
        audio.volume = volumeslider.value / 100;
    }
    function seektimeupdate() {
        var nt = audio.currentTime * (100 / audio.duration);
        seekslider.value = nt;
        var curmins = Math.floor(audio.currentTime / 60);
        var cursecs = Math.floor(audio.currentTime - curmins * 60);
        var durmins = Math.floor(audio.duration / 60);
        var dursecs = Math.floor(audio.duration - durmins * 60);
        if (cursecs < 10) { cursecs = "0" + cursecs; }
        if (dursecs < 10) { dursecs = "0" + dursecs; }
        curtimetext.innerHTML = curmins + ":" + cursecs;
        durtimetext.innerHTML = durmins + ":" + dursecs;
    }
    function playfeels() {
        audio.src = dir + playlist[0] + ext;
        audio.loop = false;
    }
    function playodessa() {
        audio.src = dir + playlist[1] + ext;
        audio.loop = false;
    }
    function playgranted() {
        audio.src = dir + playlist[2] + ext;
        audio.loop = false;
    }


}
window.addEventListener("load", initAudioPlayer);