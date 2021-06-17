const weight = 110;
const height = 1.79; // deze moet voor BMI variable gedeclareerd zijn
const BMI = weight / (height * height); //operator verkeerd om \ ipv /

console.log("Your BMI is: " + BMI.toFixed());

if (BMI < 25) {
  console.log("Depending on your build, you might be overweight");
} else if (BMI < 18) {
  console.log("Depending on your build, you might be underweight");
} else {
  console.log("Looks like you're height / weight ratio is pretty healthy");
}