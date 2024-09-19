document.getElementById('btn-add-money')
          .addEventListener('click',function(event){
        event.preventDefault();

        //Get money and the pin number
        const addMoney = document.getElementById('input-add-money').value
        const addMoneyNumber = parseFloat(addMoney)
        const pinNumber = document.getElementById('input-pin-number').value
        console.log(addMoney, pinNumber)

        if(pinNumber === '1234'){
            console.log('add money done')
            //add money to the account
            const balance = document.getElementById('account-balance').innerText
            console.log(balance)

            const balanceNumber = parseFloat(balance)

            //new balance 
            const newBalance = addMoneyNumber + balanceNumber

            //update the DOM with update balance
            document.getElementById('account-balance').innerText = newBalance


        }
        else{
            alert("doesn't match")
        }
    }
)