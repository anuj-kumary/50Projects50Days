const calculateBtn = document.getElementById("calculate-btn");
const result = document.querySelector(".result");

calculateBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let loanAmount = document.getElementById("amount").value;
  let getInterest = document.getElementById("interest").value;
  let getMonths = document.getElementById("months").value;

  if (loanAmount !== "" && getMonths !== "" && getInterest !== "") {
    const interest = (loanAmount * (getInterest * 0.01)) / getMonths;
    const total = loanAmount / getMonths + interest;
    const totalInterest = total * getMonths - loanAmount;
    const totalPayment = total * getMonths;

    result.style.display = "block";

    document.querySelector(".monthly-payment").innerHTML =
      "Monthly Payment :- " + total;
    document.querySelector(".interest").innerHTML =
      "Total Interest :- " + totalInterest;
    document.querySelector(".total-payment").innerHTML =
      "Total Payment :- " + totalPayment;
  } else {
    alert("Please Enter the Value");
  }
});
