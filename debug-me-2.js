const height = 1.79;
const weight = 56;

const BMI = weight / (height * height); //typo in variabelenaam

console.log("Your BMI is: " + BMI.toFixed());

if (BMI > 25) {
  console.log("Depending on your build, you might be overweight");// wisselende " en ' gebruikt
} else if (BMI < 18) { //if vergeten
  console.log("Depending on your build, you might be underweight");
} else {
  console.log("Looks like you're height / weight ratio is pretty healthy");
}