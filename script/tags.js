var languageArray = new Array();
var hobbyArray = new Array();
var extraCurricularArray = new Array();

var languageString = "";
var hobbyString = "";
var extraCurricularString = ""; 

function showLanguageTags() {
    $("#con-l").html("");
   for(var i = 0; i <languageArray.length; i++) {
       var tempHtml = "";
        tempHtml +="<div class='it-l'>" + languageArray[i] +"</div>";
        $("#con-l").append(tempHtml);
   }

}

function showHobbyTags() {
    $("#con-h").html("");
    for(var i = 0; i <hobbyArray.length; i++) {
        var tempHtml = "";
         tempHtml +="<div class='it-l'>" + hobbyArray[i] +"</div>";
         $("#con-h").append(tempHtml);
    }
    
}

function showExtraTags() {
    $("#con-e").html("");
    for(var i = 0; i <extraCurricularArray.length; i++) {
        var tempHtml = "";
         tempHtml +="<div class='it-l'>" + extraCurricularArray[i] +"</div>";
         $("#con-e").append(tempHtml);
    }
    
}


$("#i-lang").on('keyup', function() {
    languageString = $("#i-lang").val();
    if(languageString[languageString.length -1] == ',')
    {
        var item = "";
        for(var i = 0; i < languageString.length -1; i++){
            item += languageString[i];
        }
        languageArray.push(item);
        $("#i-lang").val("");
    }
    showLanguageTags();
    console.log(languageArray);
});

$("#i-hobby").on('keyup', function() {
    hobbyString = $("#i-hobby").val();
    if(hobbyString[hobbyString.length -1] == ',')
    {
        var item = "";
        for(var i = 0; i < hobbyString.length -1; i++){
            item += hobbyString[i];
        }
        hobbyArray.push(item);
        $("#i-hobby").val("");
    }
    showHobbyTags();
    console.log(hobbyArray);
});

$("#i-eca").on('keyup', function() {
    extraCurricularString = $("#i-eca").val();
    if(extraCurricularString[extraCurricularString.length -1] == ',')
    {
        var item = "";
        for(var i = 0; i < extraCurricularString.length -1; i++){
            item += extraCurricularString[i];
        }
        extraCurricularArray.push(item);
        $("#i-eca").val("");
    }
    showExtraTags();
        console.log(hobbyArray);
});