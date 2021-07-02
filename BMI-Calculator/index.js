window.onload = () =>{
    let btn = document.getElementById("btn");
    btn.addEventListener("click", calculateBmi);
};


function calculateBmi() {
    
  let userWeight = parseInt(document.getElementById("weight").value);
  let userHeight = parseInt(document.querySelector("#height").value);
  let errWeight = document.querySelector("#errWeight");
  let errHeight = document.querySelector("#errHeight");
  let bmiValue = document.getElementById("bmi");

  if (userHeight === "" || isNaN(userHeight)) {
    errHeight.innerHTML = "Provide Valid Height";
  } else if (userWeight === "" || isNaN(userWeight)) {
    errWeight.innerHTML = "Provide valid weight";
  } else {
    let calculateBmi = Math.round(
      userWeight / ((userHeight * userHeight) / 10000)
    );

    if (calculateBmi < 18.6)
      bmiValue.innerHTML = `Mild Thinness : ${calculateBmi}`;
    else if (calculateBmi >= 18.6 && calculateBmi <= 25)
      bmiValue.innerHTML = `Normal : ${calculateBmi}`;
    else if (calculateBmi >= 25 && calculateBmi <= 30)
      bmiValue.innerHTML = `Overweight : ${calculateBmi}`;
    else bmiValue.innerHTML = `Obese Class : ${calculateBmi}`;
  }
}



