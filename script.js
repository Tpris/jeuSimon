$(document).ready(function () {
    $(".pad.shape1").click(function () {
        $(".pad.shape1").animate({ opacity: '50%' }, 1000);
        $(".sound1")[0].play();
        $(".pad.shape1").animate({ opacity: '100%' }, 1000);
        verif(1)
    });
    $(".pad.shape2").click(function () {
        $(".pad.shape2").animate({ opacity: '50%' }, 1000);
        $(".sound2")[0].play();
        $(".pad.shape2").animate({ opacity: '100%' }, 1000);
        verif(2)
    });
    $(".pad.shape3").click(function () {
        $(".pad.shape3").animate({ opacity: '50%' }, 1000);
        $(".sound3")[0].play();
        $(".pad.shape3").animate({ opacity: '100%' }, 1000);
        verif(3)
    });
    $(".pad.shape4").click(function () {
        $(".pad.shape4").animate({ opacity: '50%' }, 1000);
        $(".sound4")[0].play();
        $(".pad.shape4").animate({ opacity: '100%' }, 1000);
        verif(4)
    });

    $(".pad.shape1").hide()
    $(".pad.shape2").hide()
    $(".pad.shape3").hide()
    $(".pad.shape4").hide()
    counter = 0
    $(".level").html("Appuyez ici pour commencer")
    $(".circle").click(function () {
        $(".pad.shape1").show()
        $(".pad.shape2").show()
        $(".pad.shape3").show()
        $(".pad.shape4").show()
        x = setInterval(bip, 2000);
    });

});
var pad = []
var level = 1
var nbCoup = 4
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
}

function bip() {
    counter++
    if (counter > nbCoup) clearInterval(x)
    else {
        let nb = getRandomInt(3)
        $(".pad.shape" + nb).trigger("click")
    }
}

function verif(nb) {
    pad.push(nb)
    if (pad.length > nbCoup) {
        if (pad[pad.length - 1] != pad[pad.length - (nbCoup + 1)]) {
            pad = []
            counter = 0
            nbCoup = 4
            level = 1
            $(".level").html("Faux ! appuyez ici pour recommencer")
            $(".pad.shape1").hide()
            $(".pad.shape2").hide()
            $(".pad.shape3").hide()
            $(".pad.shape4").hide()
        }
        else {
            $(".level").html("vrai !")
            if (pad.length == (2 * nbCoup)) {
                pad = []
                counter = 0
                nbCoup += 2
                level++
                x = setInterval(bip, 2000);
            }
        }
    }
    else $(".level").html("Level " + level)
}


