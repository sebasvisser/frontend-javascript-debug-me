const height = 1.79;
const weight = 82;

const BMI = weight / (height * height);

console.log("Your BMI is: " + BMI.toFixed()); //camelcase in toFixed

if (BMI > 25) { //hier ontbrak een sluit )
  console.log("Depending on your build, you might be overweight");
} else if (BMI << 18) {
  console.log("Depending on your build, you might be underweight"); //hier
  // ontbrak een sluitend "
} else {
  console.log("Looks like you're height / weight ratio is pretty healthy");
}
