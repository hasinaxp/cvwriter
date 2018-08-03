var cvData = {
    personalData : {
        name : "",
        fatherName : "",
        motherName : "",
        gender : "",
        dateOfBirth : "",
        nationality : "",
        religion : "",
        hasCast : false,
        cast : ""
    },
    contactData : {
        address : "",
        phoneNumber : "",
        emailAddress : ""
    },
    academicData : [],
    extraData : {
        languagesKnown : [],
        hobbies : [],
        extraCurricularActivities : [],
        hasWorkExperience : false,
        workExperience : ""
    }
};

function initData() {
    cvData = {
        personalData : {
            name : "",
            fatherName : "",
            motherName : "",
            gender : "",
            dateOfBirth : "",
            nationality : "",
            religion : "",
            hasCast : false,
            cast : ""
        },
        contactData : {
            address : "",
            phoneNumber : "",
            emailAddress : ""
        },
        academicData : [],
        extraData : {
            languagesKnown : [],
            hobbies : [],
            extraCurricularActivities : [],
            hasWorkExperience : false,
            workExperience : ""
        }
    };
    $("#i-name").val("");
    $("#i-father-name").val("");
    $("#i-mother-name").val("");
    $("#i-gender").val("");
    $("#i-dob").val("");
    $("#i-nationality").val("");
    $("#i-religion").val("");
    $("#i-cast").val("");
    $("#i-address").val("");
    $("#i-phone").val("");
    $("#i-email").val("");
    $("#i-lang").val("");
    $("#i-hobby").val("");
    $("#i-eca").val("");
    acdemicArray = [];
    languageArray = [];
    hobbyArray = [];
    extraCurricularArray = [];
    $("#i-workwxp").val("");
}
function getPersonalData() {
    cvData.personalData.name = $("#i-name").val();
    cvData.personalData.fatherName = $("#i-father-name").val();
    cvData.personalData.motherName = $("#i-mother-name").val();
    cvData.personalData.gender = $("#i-gender").val();
    cvData.personalData.dateOfBirth = $("#i-dob").val();
    cvData.personalData.nationality = $("#i-nationality").val();
    cvData.personalData.religion = $("#i-religion").val();
    var tempCheck = $("#i-check-cast").prop("checked") ? true : false;
    cvData.personalData.hasCast = tempCheck;
    cvData.personalData.cast = $("#i-cast").val();
        
}

function getContactData() {
    cvData.contactData.address = $("#i-address").val();
    cvData.contactData.phoneNumber = $("#i-phone").val();
    cvData.contactData.emailAddress = $("#i-email").val();
}

function getAcademicData() {
    cvData.academicData = acdemicArray;
}

function getExtraData() {
    cvData.extraData.languagesKnown = languageArray;
    cvData.extraData.hobbies = hobbyArray;
    cvData.extraData.extraCurricularActivities = extraCurricularArray;
    var tempCheck = $("#i-check-workexp").prop("checked") ? true : false;
    cvData.extraData.hasWorkExperience = tempCheck;
    cvData.extraData.workExperience = $("#i-workexp").val();
}

// -----------------result formatting-----------------------------------------------------------

function formatResult() {
    $("#person-name").text(cvData.personalData.name);
    $("#n-dob").text(cvData.personalData.dateOfBirth);
    $("#n-address").text(cvData.contactData.address);
    $("#n-email").text(cvData.contactData.emailAddress);
    $("#n-mobile").text(cvData.contactData.phoneNumber);

    $(".language-container").html("");
    for(var i = 0; i < cvData.extraData.languagesKnown.length; i++) {
       var tempHtml = "<div>";
       tempHtml += cvData.extraData.languagesKnown[i];
       tempHtml += "</div>";
       $(".language-container").append(tempHtml);
    }

    $(".hobby-container").html("");
    for(var i = 0; i < cvData.extraData.hobbies.length; i++) {
       var tempHtml = "<div>";
       tempHtml += cvData.extraData.hobbies[i];
       tempHtml += "</div>";
       $(".hobby-container").append(tempHtml);
    }

    $(".skill-container").html("");
    for(var i = 0; i < cvData.extraData.extraCurricularActivities.length; i++) {
       var tempHtml = "<div>";
       tempHtml += cvData.extraData.extraCurricularActivities[i];
       tempHtml += "</div>";
       $(".skill-container").append(tempHtml);
    }

    $("#n-father-name").text(cvData.personalData.fatherName);
    $("#n-mother-name").text(cvData.personalData.motherName);
    $("#n-gender").text(cvData.personalData.gender);
    $("#n-nationality").text(cvData.personalData.nationality);
    $("#n-religion").text(cvData.personalData.religion);

    if(cvData.personalData.hasCast == false)
        $("#x-cast").css("opacity","0");
    else
    $("#x-cast").css("opacity","1.0");

    $("#n-cast").text(cvData.personalData.cast);

    $(".academic-detail-container").html("");
    for(var i = 0; i < cvData.academicData.length; i++) {
       var tempHtml = "<div class='academic-temp'>";
       tempHtml +="<div id='n-degree'>";
       tempHtml +=cvData.academicData[i].exam;
       tempHtml +="</div>";
       tempHtml +="<div id='n-institute'>";
       tempHtml +=cvData.academicData[i].institute;
       tempHtml +="</div>"
       tempHtml +="<div id='n-board'>";
       tempHtml +=cvData.academicData[i].board;
       tempHtml +="</div>"
       tempHtml +="<div id='n-year'>";
       tempHtml +=cvData.academicData[i].year +" - " +cvData.academicData[i].marks;
       tempHtml +="</div>"
       
       tempHtml += "</div>";
       $(".academic-detail-container").append(tempHtml);
    }

    if(cvData.extraData.hasWorkExperience == false)
        $(".block-extra").css("opacity","0");
    else
        $(".block-extra").css("opacity","1.0");

    $("#n-workexp").text(cvData.extraData.workExperience);

}



//------------------event codes-----------------------------------------------------------------
$("#btn-agree").on('click', function () {
    $("#disclaimer").fadeOut();
    $("#personal-information").show();
});

$("#btn-personal-submit").on('click', function () {
    getPersonalData();
    console.log(cvData.personalData);
    $("#personal-information").fadeOut();
    $("#contact-information").show();
});

$("#btn-contact-submit").on('click', function () {
    getContactData();
    console.log(cvData.contactData);
    $("#contact-information").fadeOut();
    $("#academic-information").show();
});

$("#btn-academic-submit").on('click', function () {
    getAcademicData();
    console.log(cvData.academicData);
    $("#academic-information").fadeOut();
    $("#extra-information").show();
});

$("#btn-extra-submit").on('click', function () {
    getExtraData();
    console.log(cvData);
    $("#extra-information").fadeOut();
    formatResult();
    $(".dynamic-result").show();
});
$("#close-spd").on('click', function () {
    $(".dynamic-result").fadeOut();
    $("#form-btn").show();
     $(".info").animate(
        {
            top : '+=200px',
            opacity : '1'
        },"slow"
    );
});


