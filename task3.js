function convertcurrency(val, from, to) {
    from = from.toUpperCase(); 
    to = to.toUpperCase(); 
    switch (from + '_' + to) {
        case 'USD_EUR':
            console.log(val * 0.91);
            break;
        case 'USD_INR':
            console.log(val * 83);
            break;
        case 'EUR_USD':
            console.log(val * 1.10);
            break;
        case 'EUR_INR':
            console.log(val * 91.2); 
            break;
        case 'INR_USD':
            console.log(val / 83);
            break;
        case 'INR_EUR':
            console.log(val * 0.01096); 
            break;
        default:
            console.log("Conversion not supported");
            break;
    }
}

convertcurrency(100, 'inr', 'eur');  
