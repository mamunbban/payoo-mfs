document.getElementById('show-cash-out-btn').addEventListener('click', function(){
    // console.log('done')
    //show cash out form
    document.getElementById('cash-out-form').classList.remove('hidden')
    document.getElementById('add-money-form').classList.add('hidden')
})

//show addMoney form
document.getElementById('show-add-money-btn')
        .addEventListener('click', function(){

            document.getElementById('add-money-form').classList.remove('hidden');
            document.getElementById('cash-out-form').classList.add('hidden')

})