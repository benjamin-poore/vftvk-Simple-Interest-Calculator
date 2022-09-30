function compute() {
  var principal = document.getElementById("principal").value;
  if (principal < 1) {
    alert("Enter a positive number");
    // focus principal input and return function to skip calculations
    document.getElementById("principal").focus();
    return;
  }
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);
  //   using template literals to insert values into result
  document.getElementById(
    "result"
  ).innerHTML = `If you deposit <mark>${principal}</mark>,<br/>   
    at an interest rate of <mark>${rate}%</marK>.<br/>
    You will receive an amount of <mark>${interest}</mark>,<br/>
    in the year <mark>${year}</mark>`;
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
