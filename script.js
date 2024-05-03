                            // Resources
const numberInput = document.getElementById("numberInput");
const convertButton = document.getElementById("convertButton");


                            // Button Click
convertButton.addEventListener( "click" , function (e) {
    e.preventDefault();
})


function convertDollars () {
    if (numberInput.value === "") {
        alert("You have to enter a number")
    } else {
        console.log(numberInput.value);
    }
} // convertDollars()
