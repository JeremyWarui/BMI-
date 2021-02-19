$("button").on("click", bmiCalc);
function bmiCalc(firstInput, secondInput) {
    var firstInput = parseInt(($("#kgs").val()));
    var secondInput = parseInt(($("#cm").val()));
    var bmi = (firstInput / ((Math.pow((secondInput / 100), 2)))).toFixed(1);
    var heightSquared = Math.pow((secondInput / 100), 2);
    var weight = Math.round( 24.9 * heightSquared);
    if (bmi < 18.5) {
        $("span").text("Your BMI is " + bmi + ". You are underweight. Your Ideal weight is " + weight);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        $("span").text("Your BMI is " + bmi + ". You have ideal weight.");
    } else if (bmi > 24.9) {
        $("span").text("Your BMI is " + bmi + ". You are overweight.  Your Ideal weight is " + weight);
    } else {
        alert("Kindly enter a number!");
    }
    $(".answer").css("visibility", "visible");
}
