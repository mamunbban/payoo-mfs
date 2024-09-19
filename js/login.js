
//Step-1 set event handler....
document.getElementById('btn-login')
    .addEventListener('click', function(event){
        //Step-2: prevent default behavior (prevent reloading browser)
        event.preventDefault();
        // console.log('login here')

       //Step-3: get the phone number
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;


        // console.log(phoneNumber, pinNumber);

        // if(phoneNumber === '5' && pinNumber === '1234'){
        //     console.log('you are login')
        // }
        // else{
        //     alert("not match")
        // }

})

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pinNumber)

    //validation...
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are logged in')
        window.location.href = "/home.html"
        
    }
    else{
        alert("phone or pin don't match")
    }
})