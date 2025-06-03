                            // Resources
const numberInput = document.getElementById("numberInput");
const convertButton = document.getElementById("convertButton");
const dropDownChoices = document.getElementById("dropDownChoices");
const dropdownMenu = document.getElementById("dropdownMenu");
const currencyInput = document.getElementById("currencyInput");
const dropDownChoicesValue = dropDownChoices.value;
const conversionMessage = document.getElementById("conversionMessage");
                            // Button Click
convertButton.addEventListener( "click" , function (e) {
    e.preventDefault();
})

// Converts the dollar amount
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

                case 'EUR':
                    let newEuros = numberInput.value * 0.953;
                    let EuroMessage = "Your " + numberInput.value + " dollars is " + newEuros + " in Euros!"
                    let newEuroAmount = document.createElement("P");
                    let newEuroAmountValue = document.createTextNode(EuroMessage);
                    newEuroAmount.appendChild(newEuroAmountValue);
                    document.body.appendChild(newEuroAmount);              
                    console.log("Your " + numberInput.value + " dollars is " + newEuros + " in Pesos!");
                    break;
                
                case 'CAD' :
                    let newCADollars = numberInput.value * 1.433;
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

            
                                    //API CALL
        function newDollarCall (dropDownChoicesValue) {
            const apiKey = "086aadb25d6a6588c818f018"
            
            // API call
            fetch (`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${dropDownChoicesValue}`)
           
            .then ( res => {
                if(res.ok) {
                    return res.json()
                } else {
                    console.log ("didn't work")
                }
            })
            .then (data => {
                let currencyRates = data.conversion_rates;

              let allKeys = Object.keys(currencyRates);
            //   console.log(allKeys);

              let allEntries = Object.values(currencyRates)
              console.log(allEntries);
                

                console.log(data);
                console.log(allEntries);
                console.log(currencyRates.keys);
            //    conversionMessage.innerHTML("Your" + numberInput + "dollars is now " + " in ")

               
            }) // END OF API CALL


            console.log(dropDownChoicesValue);
        }  // newDollarCall()

