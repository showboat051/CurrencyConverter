                            // Resources
const numberInput = document.getElementById("numberInput");
const convertButton = document.getElementById("convertButton");
const dropDownChoices = document.getElementById("dropDownChoices");
const dropdownMenu = document.getElementById("dropdownMenu");
const currencyInput = document.getElementById("currencyInput");
                            // Button Click
convertButton.addEventListener( "click" , function (e) {
    e.preventDefault();
})

// dropdownMenu.addEventListener("click" , function () {
//     e.preventDefault();
// })


function convertDollars () {
    if (numberInput.value === "") {
        alert("You have to enter a number")
    } else {
       let newPesos = numberInput.value * 18.34;
       console.log("Your " + numberInput.value + " dollars is " + newPesos + " in Pesos!");
}
} // convertDollars()

function currencyStorage (value) {
    let moneyType = dropDownChoices.value;
    console.log(moneyType);

}
