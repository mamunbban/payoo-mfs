//Step--1: add an event handler to the add money button inside the form 

document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    //prevent page reload after form submit
    event.preventDefault();
       
    //Step-2: get money to be added to the account 
    const inputAddMoney = document.getElementById('input-add-money').value
    console.log(inputAddMoney)

    //Step-3: get the pin number
    const pinNumber = document.getElementById('input-pin-number').value
    console.log(pinNumber)

    if(pinNumber === '1234'){
        console.log('add money complete')

         //step-4: get the current balance
    const balance = document.getElementById('account-balance').innerText
    console.log(typeof balance)
   

    //Step--5 add addMoney input with balance
    const addMoneyNumber = parseFloat(inputAddMoney);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMoneyNumber + balanceNumber;
    console.log(newBalance)

    //Step-6: update the balance in the DOM/UI
    document.getElementById('account-balance').innerText = newBalance;
    }

   

    else{ alert("don't match")

    }

    })