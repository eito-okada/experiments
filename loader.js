$("body > *").not("body > .loader").hide();
$(window).on('load', function() {
    var number = 1 + Math.floor(Math.random() * 4);
    if (number == 1) {
        $("#loader").animate({ height: "120%" }, 100, "linear").animate({ height: "0%" }, 500)
        $('#loader p').fadeOut(600);
    } else if (number == 2) {
        $('#loader').fadeOut(2000);
        $('#loader p').fadeOut(600);
    } else if (number == 3) {
        $("#loader").animate({ height: "120%", marginBottom: '50%' }, 100).animate({ marginTop: '100%', height: '0%' }, 500)
        $('#loader p').fadeOut(600);
    } else {
        $("#loader").animate({ marginLeft: "100%" }, 800, "linear").fadeOut(1000);
        $('#loader p').fadeOut(600);
    }
    $("body > *").not("body > .loader, script").show();
})