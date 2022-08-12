let triangleAnswer = function triangleChecker(){
    let num1 = parseInt.document.getElementById("num1Input").value;
    console.log("num1");
    let num2 = parseInt.document.getElementById("num2Input").value;
    console.log("num2");
    let num3 = parseInt.document.getElementById("num3Input").value;
    console.log("num3");

};

window.addEventListener("load", function() {
  const form = document.getElementById("form")
  form.addEventListener("submit", submitInput);
});

function submitInput(event) {
  event.preventDefault();
  triangleAnswer();
}