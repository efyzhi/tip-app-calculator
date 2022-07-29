const billInput = document.querySelector("#bill");
const numberInput = document.querySelector("#number");
const tipPerPerson = document.querySelector(".amt");
const tipPerTotal = document.querySelector('.tot');
const btnTips = document.querySelectorAll(".btn");
const customTip = document.querySelector("#custom");
const resetBtn = document.querySelector(".btn-reset");
const error = document.querySelector(".zero");


billInput.addEventListener('input', billInputTip)
numberInput.addEventListener('input', numberInputTip)
btnTips.forEach(function(vol){
    vol.addEventListener('click', selectClick)
})
customTip.addEventListener("input", tipCustomTip);
resetBtn.addEventListener("click", resetBtnTip);

billInput.value = "0.0";
numberInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
tipPerTotal.innerHTML = "$" + (0.0).toFixed(2);


let billValue = 0.0;
let numberValue = 1;
let tipValue = 0.15;

function billInputTip() {
   billValue = parseFloat(billInput.value)
    calculateTip();
}

function numberInputTip() {
    numberValue = parseFloat(numberInput.value)

    if (numberValue < 1){
        error.style.display = "flex"
        numberInput.style.border = "thick solid red"
    }else {
        error.style.display = "none"
        numberInput.style.border = "none"
    }
    calculateTip();
}
 
function selectClick(e){
    btnTips.forEach(function(vol){
        if (e.target.innerHTML == vol.innerHTML) {
            vol.classList.add("active-tip")
        }else {
            vol.classList.remove("active-tip")
            tipValue = parseFloat(vol.innerHTML) / 100;
        }
    })
    calculateTip();
}

function calculateTip(){
    if (numberValue >= 1){
        let tipAmount = (billValue * tipValue) / numberValue;
        let  total = (billValue * tipAmount) / numberValue;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        tipPerTotal.innerHTML = "$" + total.toFixed(2);
    }
}

function tipCustomTip() {
    tipValue = parseFloat(customTip.value / 100);
    calculateTip();
}

function resetBtnTip() {
    billInput.value = "0.0";
    billInputTip()
    numberInput.value = "1";
    numberInputTip()
    customTip.value = "";

}