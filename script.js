                            // Resources
const numberInput = document.getElementById("numberInput");
const convertButton = document.getElementById("convertButton");
const dropDownChoices = document.getElementById("dropDownChoices");
const dropdownMenu = document.getElementById("dropdownMenu");
const currencyInput = document.getElementById("currencyInput");
const dropDownChoicesValue = dropDownChoices.value;
                            // Button Click
convertButton.addEventListener( "click" , function (e) {
    e.preventDefault();
})

// dropdownMenu.addEventListener("click" , function () {
//     e.preventDefault();
// })


// function convertDollars (dropDownChoicesValue) {
//     if (numberInput.value === "") {
//         alert("You have to enter a number")
//     } else {
//        let newPesos = numberInput.value * 18.34;
//        let newCADollars = numberInput.value * 1.368;
//        console.log(dropDownChoicesValue);
//        console.log("Your " + numberInput.value + " dollars is " + newPesos + " in Pesos!");
//        console.log("Your " + numberInput.value + " dollars is " + newCADollars + " in Canadian Dollars!");

// }
// } // convertDollars()

function convertDollars (dropDownChoicesValue) {
    if (numberInput.value === "") {
        alert("You have to enter a number");
    } else {
        let conversionMessage;
        let newDollarAmount = document.createElement("P");
        let newDollarAmountValue;
        // let newDollarAmountValue = document.createTextNode(conversionMessage);
        newDollarAmount.appendChild(newDollarAmountValue);
        document.body.appendChild(newDollarAmount);
       
        switch(dropDownChoicesValue) {
            case 'pesos':
                
                let newPesos = numberInput.value * 18.34;
                
                // Creates new display for the converted amount
                
                
                // creates the statement for new dollar conversion
                conversionMessage = "Your " + numberInput.value + " dollars is " + newPesos + " in Pesos!"
                newDollarAmountValue.appendChild(conversionMessage);
                newDollarAmountValue.innerHTML;
                console.log("Your " + numberInput.value + " dollars is " + newPesos + " in Pesos!");
                break;
                
                case 'Canadian' :
                    let newCADollars = numberInput.value * 1.368;
                    
    

                    console.log("Your " + numberInput.value + " dollars is " + newCADollars + " in Canadian Dollars!");
                    break;
                    default:
                        alert("Enter a Number");
                    } // end of switch case 
                    
                } // end of if statement
            }// convertDollars()

