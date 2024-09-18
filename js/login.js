
//Step-1 set event handler....
document.getElementById('btn-login')
    .addEventListener('click', function(event){
        //Step-2: prevent default behavior (prevent reloading browser)
        event.preventDefault();
        console.log('login here')

       //Step-3: get the phone number
        const phoneNumber = document.getElementById('phone-number').value;
        console.log(phoneNumber);

})