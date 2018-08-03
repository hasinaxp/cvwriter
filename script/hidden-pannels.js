$("#i-check-cast").on('change', function() {
    if(this.checked)
        $("#cast-pan").fadeIn();
    else
        $("#cast-pan").hide();
});

$("#i-check-workexp").on('change', function() {
    if(this.checked)
        $("#workexp-pan").fadeIn();
    else
        $("#workexp-pan").hide();
});