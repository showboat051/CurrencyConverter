                            // Resources
const numberInput = document.getElementById("numberInput");
const convertButton = document.getElementById("convertButton");
// const dropDownValue = document.getElementById(dropDownValue);
const dropdownMenu = document.getElementsByClassName("dropdown-menu");

                            // Button Click
convertButton.addEventListener( "click" , function (e) {
    e.preventDefault();
})

// dropdownMenu.addEventListener("click" , function () {
//     e.preventDefault();
// })


function convertDollars (moneyType) {
    if (numberInput.value === "") {
        alert("You have to enter a number")
    } else {
console.log("You entered " + moneyType.value);    
}
} // convertDollars()

