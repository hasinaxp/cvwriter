function academicInfoTemplate() {
    this.exam = "";
    this.institute = "";
    this.board = "",
    this.year = "";
    this.marks = "";
    this.id = 0;
};

var acdemicArray = new Array();

var itemNumber = 0;

function makeList() {
    $(".degree-holder").html("");
    for(var i = 1; i <acdemicArray.length + 1; i++ ) {
        var tempHtml = "";
        tempHtml +="<div class='dynamic-data'>";
        tempHtml +="<div class='tab-exam'>";
        tempHtml += acdemicArray[i-1].exam;
        tempHtml +="</div>";
        tempHtml +="<div class='tab-institute'>";
        tempHtml += acdemicArray[i-1].institute;
        tempHtml +="</div>";
        tempHtml +="<div class='tab-institute'>";
        tempHtml += acdemicArray[i-1].board;
        tempHtml +="</div>";
        tempHtml +="<div class='tab-year'>";
        tempHtml += acdemicArray[i-1].year;
        tempHtml +="</div>";
        tempHtml +="<div class='tab-marks'>";
        tempHtml += acdemicArray[i-1].marks;
        tempHtml +="</div>";
        tempHtml += "<div><button class='btn-delete' data-id='";
        tempHtml += acdemicArray[i-1].id;
        tempHtml +="'> X </button></div>";
        tempHtml +="</div>";

        $(".degree-holder").append(tempHtml);
    }
}
$("#close-btn-add").on('click', function(){
    $("#add-form").fadeOut();
});

$("#btn-add").on('click', function() {
    $("#i-exam").val("");
    $("#i-school").val("");
    $("#i-board").val("");
    $("#i-year").val("");
    $("#i-marks").val(""); 
    $("#add-form").show();
});


$(".degree-holder").on('click','.btn-delete',function(){
    var kakId =$(this).attr("data-id");
    for(var i = 1; i < acdemicArray.length +1 ; i++){
        if(acdemicArray[i-1].id == kakId )
         acdemicArray.splice(i-1,1);
    }
    makeList();
    console.log(acdemicArray);

});

$("#btn-add-submit").on('click', function(){

    var temp = new academicInfoTemplate();
    temp.exam = $("#i-exam").val();
    temp.institute = $("#i-school").val();
    temp.board = $("#i-board").val();
    temp.year = $("#i-year").val();
    temp.marks = $("#i-marks").val();
    temp.id = ++itemNumber;
    acdemicArray.push(temp);
    
    console.log(acdemicArray);
    makeList();
    $("#add-form").fadeOut();

});