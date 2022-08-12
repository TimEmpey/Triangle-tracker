let triangleAnswer = function triangleChecker(){
    let num1 = parseInt(document.getElementById("num1Input")).value;
    let num2 = parseInt(document.getElementById("num2Input")).value;
    let num3 = parseInt(document.getElementById("num3Input")).value;

let triType;
if (num1 === num2 && num1 === num3 && num2 === num3){
    triType = "Equal";
    console.log("Equal");
  } else if (num1 === num2 || num1 === num3 || num2 === num3){
    triType = "Isosceles";
    console.log("Isosceles");
  } else if (num1 + num2 <= num3 || num1 + num3 <= num2 || num2 + num3 <= num1){
    triType = "Not a Triangle";
    console.log("Not a Triangle");
  } else (num1 != num2 && num1 != num && num2 != num3);{
    triType ="Scalene";
    console.log("Scalene");
  };

  document.getElementById("output").innertext = triType;

};

window.addEventListener("load", function() {
  const form = document.getElementById("userInput");
  form.addEventListener("submit", submitInput);
});

function submitInput(event) {
  event.preventDefault();
  triangleAnswer();
};