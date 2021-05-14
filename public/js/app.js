
//alert('public JS')
console.log('client side js rendered!')

fetch('http://puzzle.mead.io/puzzle').then(response => {
    console.log(response)
    response.json().then(data => {
        console.log(data)
    })
})