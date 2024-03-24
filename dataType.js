alert("Welcome my esteem User");

const username = prompt("Please enter your Username", "Daucko");
const cohortNumber = prompt("Please enter your Cohort No", 14);
const dataType = prompt("Please enter your data:");

if (!isNaN(dataType)) {
  alert(`Input is a number`);
} else {
  alert("Input is a string");
}
