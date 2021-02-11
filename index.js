$("button").on("click", bmiCalc);

function bmiCalc(firstInput, secondInput) {

    var firstInput = $("#kgs").val();
    var secondInput = $("#cm").val();

    var bmi = (firstInput / ((Math.pow((secondInput / 100), 2)))).toFixed(1);

    if (bmi < 19.5) {
        $("span").text("Your BMI is " + bmi + ". You are underweight.");
    } else if (bmi >= 19.6 && bmi <= 21.5) {
        $("span").text("Your BMI is " + bmi + ". You have ideal weight.");
    } else {
        $("span").text("Your BMI is " + bmi + ". You are obese.");
    }
    $(".answer").css("visibility", "visible");

}