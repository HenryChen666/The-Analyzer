// Function to verify that the phone number is correct.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something in a format of XXXXXXXXXX
    var filter = /^\d{10}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


function validateCredit(cardnumber) {
    var a = document.getElementById(cardnumber).value;
    // This filter asks for something in a format of XXXXXXXXXXXXXXXX
    var filter = /^\d{16}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function addDashes(f)
{
    f_val = f.value.replace(/\D[^\.]/g, "");
    f.value = f_val.slice(0,3)+"-"+f_val.slice(3,6)+"-"+f_val.slice(6,12);
}



// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#tel-input").on("change", function(){
        if (!validatePhone("tel-input")){
            alert("Wrong Format! Please Enter 10 Digits of your phone number");
            //$("#tel-input").val("(xxxxxxxxxx)");
            $("#tel-input").addClass("error");
        }
        else {
            $("#tel-input").removeClass("error");
        }
    });

    $("#ccn-input").on("change", function(){
        if (!validateCredit("ccn-input")){
            alert("Wrong Format! Please Enter 16 Digits of your Credit Card Number");
            //$("#ccn-input").val("(xxxxxxxxxxxxxxxxxxxx)");
            $("#ccn-input").addClass("error");
        }
        else {
            $("#ccn-input").removeClass("error");
        }
    });

    $("#tel-input1").on("change", function(){
        if (!validatePhone("tel-input1")){
            alert("Wrong Format! Please Enter 10 Digits of your phone number");
            //$("#tel-input").val("(xxxxxxxxxx)");
            $("#tel-input1").addClass("error");
        }
        else {
            $("#tel-input1").removeClass("error");
        }
    });

    $("#ccn-input1").on("change", function(){
        if (!validateCredit("ccn-input1")){
            alert("Wrong Format! Please Enter 16 Digits of your Credit Card Number");
            //$("#ccn-input").val("(xxxxxxxxxxxxxxxxxxxx)");
            $("#ccn-input1").addClass("error");
        }
        else {
            $("#ccn-input1").removeClass("error");
        }
    });

    $("#tel-input2").on("change", function(){
        if (!validatePhone("tel-input2")){
            alert("Wrong Format! Please Enter 10 Digits of your phone number");
            //$("#tel-input").val("(xxxxxxxxxx)");
            $("#tel-input2").addClass("error");
        }
        else {
            $("#tel-input2").removeClass("error");
        }
    });

    $("#ccn-input2").on("change", function(){
        if (!validateCredit("ccn-input")){
            alert("Wrong Format! Please Enter 16 Digits of your Credit Card Number");
            //$("#ccn-input").val("(xxxxxxxxxxxxxxxxxxxx)");
            $("#ccn-input2").addClass("error");
        }
        else {
            $("#ccn-input2").removeClass("error");
        }
    });
// Using date restrictions on datepicker
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)

var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020","07/01/2020"]
var unavailableDates1 = ["06/30/2020","07/01/2020","07/15/2020","07/27/2020"]
var unavailableDates2 = ["07/20/2020","07/21/2020","07/01/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates1(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 6)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}

function disableDates2(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0 || date.getDay()==6)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates1.indexOf(string) == -1 ]
}

function disableDates3(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates2.indexOf(string) == -1 ]
}
$("#date-picker1").datepicker(
    {
        dateFormat: setDateFormat,
        // no calendar before June 1rst 2020
        minDate: new Date('06/01/2020'),  
        maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates1
    }   
);

$("#date-picker2").datepicker(
    {
        dateFormat: setDateFormat,
        // no calendar before June 1rst 2020
        minDate: new Date('06/01/2020'),  
        maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates2
    }   
);

$("#date-picker3").datepicker(
    {
        dateFormat: setDateFormat,
        // no calendar before June 1rst 2020
        minDate: new Date('06/01/2020'),  
        maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates3
    }   
);
});