const weight = 110;
const height = 1.79; //typo in variabele type
const BMI = weight / (height * height);

let outcome = " "; //vergeten te initialiseren

console.log("Your BMI is: " + BMI.toFixed());

if (BMI < 25) {
  outcome = "Depending on your build, you might be overweight"; // outcome
  // moet een let zijn om te kunnen wijzigen
} else if (BMI < 18) {
  outcome = "Depending on your build, you might be underweight";
} else {
  outcome = "Looks like you're height / weight ratio is pretty healthy"; // haakje teveel in begin zin
}

console.log(outcome);