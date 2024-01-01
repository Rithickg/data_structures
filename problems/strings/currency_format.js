 // currency format string 

function currencyFormatter(amount,currencyType){
    const formatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: currencyType,
    });
    const format = formatter.format(amount)
    return format;
}

console.log(currencyFormatter(250,'USD'))
console.log(currencyFormatter(250,'INR'))


// using concatination 

function currencyFormatter1(amount,currencyType){
    const currency = currencyType + amount.toFixed(2) 
    return currency
}
console.log(currencyFormatter1(350.455,'$'))
console.log(currencyFormatter1(350,'₹'))


// using local string 

function currencyFormatter2(amount,currencyType){
    const format = (amount).toLocaleString('en-US',{
        style:'currency',
        currency : currencyType
    })
    return format;
}

console.log(currencyFormatter2(450,'USD'))
console.log(currencyFormatter2(450.54,'INR'))


// using regex 
function currencyFormatter3(amount,currencyType){
    const format = currencyType + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,'$&')
    return format;
}

console.log(currencyFormatter3(500,'$'))
console.log(currencyFormatter3(550,'₹'))
