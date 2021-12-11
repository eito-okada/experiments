$("body > *").not("body > .loader").hide();
$(window).on('load', function() {
    $('#loader').slideUp(1000);
    $('#loader p').fadeOut(600);
    $("body > *").not("body > .loader, script").show();
})