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


function convertDollars (dropDownChoicesValue) {
    if (numberInput.value === "") {
        alert("You have to enter a number");
    } else {
      
       
        switch(dropDownChoicesValue) {
            case 'pesos':
                let newPesos = numberInput.value * 18.34;
                let conversionMessage = "Your " + numberInput.value + " dollars is " + newPesos + " in Pesos!"
                let newDollarAmount = document.createElement("P");
                let newDollarAmountValue = document.createTextNode(conversionMessage);
                newDollarAmount.appendChild(newDollarAmountValue);
                document.body.appendChild(newDollarAmount);              
                console.log("Your " + numberInput.value + " dollars is " + newPesos + " in Pesos!");
                break;
                
                case 'Canadian' :
                    let newCADollars = numberInput.value * 1.368;
                     let cadMessage = "Your " + numberInput.value + " dollars is " + newCADollars + " in Canadian Dollars!"
                     let newCADAmount = document.createElement("P");
                     let newCADAmountValue = document.createTextNode(cadMessage);
                    newCADAmount.appendChild(newCADAmountValue);
                    document.body.appendChild(newCADAmount);     
    

                    console.log("Your " + numberInput.value + " dollars is " + newCADollars + " in Canadian Dollars!");
                    break;
                    default:
                        alert("Enter a Number");
                    } // end of switch case 
                    
                } // end of if statement
            }// convertDollars()

