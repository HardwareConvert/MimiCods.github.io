"use script";

window.onload = function(){
    //Connect Convert(Fahrenheit)
    const convTempCBtn = document.getElementById("convTempCBtn");
    convTempCBtn.onclick = convTempCBtnClicked;
}

//Convert to Fahrenheit
//function convTempFBtnClicked(){
  //  const celsiusField = document.getElementById("celsius");
 //   let celsius = Number(celsiusField.value);

  //  let FahTemp = (celsius * 1.8) + 32;

  //  let message = "Fahrenheit Temp = " + FahTemp;

   // const resultsField = document.getElementById("results");
 //   resultsField.innerHTML = message;
//}

//Convert to Convert
function convTempCBtnClicked(){
    const fahrenheitField = document.getElementById("fahrenheit");
    let fahrenheit = Number(fahrenheitField.value);

    let CelTemp = (fahrenheit - 32) / 1.8;

    let message = "Celsius Temp = " + CelTemp;

    const resultsField = document.getElementById("results");
    resultsField.innerHTML = message;
}