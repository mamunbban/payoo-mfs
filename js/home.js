//Step--1: add an event handler to the add money button inside the form 

document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    //prevent page reload after form submit
    event.preventDefault();
       
    //Step-2: get money to be added to the account 
    const inputAddMoney = document.getElementById('input-add-money').value
    console.log(inputAddMoney)

    //get the pin number
    const pinNumber = document.getElementById('input-pin-number').value
    console.log(pinNumber)
    })