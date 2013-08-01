$(document).ready(function(){
    var options = {
        nextButton: true,
        prevButton: true,
        animateStartingFrameIn: false,
		autoPlay: false,
        autoPlayDelay: 3000,
        preloader: false,
        pauseOnHover: false,
        preloadTheseFrames: [3],
        preloadTheseImages: [
            "images/PlayFair_030513-01.png",
            "images/PlayFair_030513-02.png",
            "images/PlayFair_030513-03.png"
        ]
    };
    
    var sequence = $("#sequence").sequence(options).data("sequence");

    sequence.afterLoaded = function() {
        $("#sequence-theme .nav").fadeIn(100);
        $("#sequence-theme .nav li:nth-child("+(sequence.settings.startingFrameID)+") img").addClass("active");
    }

    sequence.beforeNextFrameAnimatesIn = function() {
        $("#sequence-theme .nav li:not(:nth-child("+(sequence.nextFrameID)+")) img").removeClass("active");
        $("#sequence-theme .nav li:nth-child("+(sequence.nextFrameID)+") img").addClass("active");
    }
    
    $("#sequence-theme").on("click", ".nav li", function() {
        $(this).children("img").removeClass("active").children("img").addClass("active");
        sequence.nextFrameID = $(this).index()+1;
        sequence.goTo(sequence.nextFrameID);
    });
});