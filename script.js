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

// Uses the API for the function
            // async function dollarCall (dropDownChoicesValue) {

            //     const url = 'https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=AUD&to=CAD&amount=1&language=en';
            //     const options = {
            //         method: 'GET',
            //         headers: {
            //             'x-rapidapi-key': 'fc171ca90fmsh4786f9f7d6594a2p12f96bjsn2e59fd4d2304',
            //             'x-rapidapi-host': 'currency-converter5.p.rapidapi.com'
            //         }
            //     };

            //     try {
            //         const response = await fetch(url, options);
            //         const result = await response.json();
            //         console.log(result);
            //     } catch (error) {
            //         console.error(error);
            //     }

                
            // } // dollarCall ()
            // const apiKey = '602579c1367d0b3bbcf0ce2fd752afac';   

        //    async function dollarCall (dropDownChoicesValue) {
        //         const url ="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_G4LewBblG08sWMH4vSHSSQ1Xfv3mPBhkVxFpQmzj&currencies=EUR%2CUSD%2CCAD";
        //         const options = {
        //             method: "GET",
        //         };
                
        //         try {
        //             const response = await fetch(url, options);
        //             const result = await response.json();
        //             console.log(result);
        //         } catch (error) {
        //             console.error(error);
        //         }

        //     } // dollarCall ()

        function dollarCall (dropDownChoicesValue) {
            const apiKey = "fca_live_G4LewBblG08sWMH4vSHSSQ1Xfv3mPBhkVxFpQmzj"
            
            // API call
            fetch (`https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`)
           
            .then ( res => {
                if(res.ok) {
                    return res.json()
                } else {
                    console.log ("didn't work")
                }
            })
            .then (data => {
                console.log(data.data);
                // for (i = 0; i < data.data.length; i ++) {
                //     console.log(data);
                // }
            }) // END OF API CALL



        }  // dollarCall()