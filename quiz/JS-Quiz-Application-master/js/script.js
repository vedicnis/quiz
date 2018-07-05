//Function to count correct answers and print results to document 
function myFunction() {

    //Create variable to count correct answers 
    var correctAnswers = 0;

    //Create variables for each question's input value
    var q1 = document.getElementById("q1a").checked;
    var q2 = document.getElementById("q2c").checked;
    var q3 = document.getElementById("q3b").checked;
    var q4 = document.getElementById("q4a").checked;
    var q5 = document.getElementById("q5a").checked;
    var q6 = document.getElementById("q6c").checked;
    var q7 = document.getElementById("q7a").checked;
    var q8 = document.getElementById("q8c").checked;
    var q9 = document.getElementById("q9b").checked;
    var q10 = document.getElementById("q10a").checked;
    var q11 = document.getElementById("q11a").checked;
    var q12 = document.getElementById("q12a").checked;
    var q13 = document.getElementById("q13b").checked;
    var q14 = document.getElementById("q14a").checked;
    var q15 = document.getElementById("q15a").checked;
   

    //Assign correct answers to field inputs
     /* if (q1.toUpperCase() === "CHINA") {
        correctAnswers += 1;
    } if (q2) {
        correctAnswers += 1;
    } if ((q3.toUpperCase() === "VICTORIA") || (q3.toUpperCase() === "LAKE VICTORIA")) {
        correctAnswers += 1;
    } if (q4) {
        correctAnswers += 1;
    } if (q5.toUpperCase() === "FLORIDA") {
        correctAnswers += 1;
    } if (q6.toUpperCase() === "TANGENT") {
        correctAnswers += 1;
    } if (q7) {
        correctAnswers += 1;
    } if ((q8.toUpperCase() === "FIVE") || (q8 === "5"))  {
        correctAnswers += 1;
    }  if ((q9.toUpperCase() === "NINETY") || (q9 === "90")) {
        correctAnswers += 1;
    }  if (q10) {
        correctAnswers += 1;
    } if (q11) {
        correctAnswers += 1;
    } if (q12.toUpperCase() === "SALT") {
        correctAnswers += 1;
    } if (q13) {
        correctAnswers += 1;
    }  if (q14.toUpperCase() === "ALUMINIUM") {
        correctAnswers += 1;
    }  if (q15) {
        correctAnswers += 1;
    }  if (q16) {
        correctAnswers += 1;
    }  if (q17.toUpperCase() === "AUSTRIA") {
        correctAnswers += 1;
    }  if (q18) {
        correctAnswers += 1;
    }  if (q19.toUpperCase() === "FRANCE") {
        correctAnswers += 1;
    }  if ((q20.toUpperCase() === "TEN") || (q20 === "10")) {
        correctAnswers += 1;
    }
*/
         //Print results (and statement) to document, dependant on outcome
         if (correctAnswers === 15) {
        document.getElementById("result").innerHTML = "Congratulations! You got all 15 answers correct";}
    else if (correctAnswers >= 10) {
        document.getElementById("result").innerHTML = "Congratulations! You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 5) {
        document.getElementById("result").innerHTML = "You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got " + correctAnswers + " answers correct";}
    else if (correctAnswers === 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got 1 answer correct";}
    else if (correctAnswers === 0) {
        document.getElementById("result").innerHTML = "You didn't answer a single answer correctly!";}

        //Print correct answers to form
        document.getElementById("answers").innerHTML = "Correct answers: (1) a) a!flatten(merge({1,2},{11, 12})) (2)c) updatearray (3) b) false (4)a) todecimal (5)a) 12/13/2011 12:00 PM GMT+00:00 (6)c) calworkhours() (7)a) intervalds(2, 4, 5) (8) c) varchar (9)  b) false (10)a) b (11)a) true (12) a) none(13)a) 7.389056 (14)a) int() (15) a) 5";

        //Reset contents of form
        document.getElementById("quiz-form").reset();
}


