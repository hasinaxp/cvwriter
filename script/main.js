
/*===================after tje page is ready to use==========================*/ 
var Shifted = false;

$(document).ready( function() {
    textSlider();
    $(".info-form").hide();
    $(".dynamic-result").hide();
    var counter = 0;
    
    function textSlider() {
        $(".info #in1").hide();
        $(".info #in2").hide();
        $(".info #in3").hide();
        $("#in1").show("slide", {direction : "right"}, 1000);
        $("#in1").delay(5500).hide("slide",{direction: "left"}, 1000);
    
    
        var count = 2;
        setInterval(function() {
            $(" #in" + count).show("slide", {direction : "right"}, 1000);
            $(".info #in" + count).delay(5500).hide("slide",{direction: "left"}, 1000);
    
            if(count == 3)
                count = 1;
            else
                count++;
        },7000);
    }
    
    
    //initialize form filling event button
    $("#form-btn").on('click', function() {
        if(!Shifted){
            $(".info").animate(
                {
                    top : '-=200px',
                    opacity : '0'
                },"slow"
            );
        }
       shifted = true;
        initData();
        $("#form-btn").hide();
        $("#disclaimer").show();
        $("#cast-pan").hide();
        $("#workexp-pan").hide();
    });

    $("#ab").on('click', function() {
        if(!Shifted){
            $(".info").animate(
                {
                    top : '-=200px',
                    opacity : '0'
                },"slow"
            );
        }
       shifted = true;
        initData();
        $("#form-btn").hide();
        $("#about").show();
        $("#cast-pan").hide();
        $("#workexp-pan").hide();
    });
    
    
    
    //disclaimer close button
    $("#close-btn-disclaimer").on('click', function(){
        $("#form-btn").show();
        $("#disclaimer").fadeOut();
        if(shifted){
            $(".info").animate(
                {
                    top : '+=200px',
                    opacity : '1'
                },"slow"
            );
        }
        shifted = false;
        
    });
    
    $("#close-btn-about").on('click', function(){
        $("#form-btn").show();
        $("#about").fadeOut();
        if(shifted){
            $(".info").animate(
                {
                    top : '+=200px',
                    opacity : '1'
                },"slow"
            );
        }
        shifted = false;
    });
    
    $("#close-btn-personal").on('click', function(){
        $("#form-btn").show();
        $("#personal-information").fadeOut();
        if(shifted){
            $(".info").animate(
                {
                    top : '+=200px',
                    opacity : '1'
                },"slow"
            );
        }
        shifted = false;
    });
    
    $("#close-btn-contact").on('click', function(){
        $("#form-btn").show();
        $("#contact-information").fadeOut();
        if(shifted){
            $(".info").animate(
                {
                    top : '+=200px',
                    opacity : '1'
                },"slow"
            );
        }
        shifted = false;
    });
    
    $("#close-btn-academic").on('click', function(){
        $("#form-btn").show();
        $("#academic-information").fadeOut();
        if(shifted){
            $(".info").animate(
                {
                    top : '+=200px',
                    opacity : '1'
                },"slow"
            );
        }
        shifted = false;
    });
    
    $("#close-btn-extra").on('click', function(){
        $("#form-btn").show();
        $("#extra-information").fadeOut();
        if(shifted){
            $(".info").animate(
                {
                    top : '+=200px',
                    opacity : '1'
                },"slow"
            );
        }
        shifted = false;
    });
});

