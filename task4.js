function convertTemperature(val, from, to) {
    from = from.toUpperCase();
    to = to.toUpperCase();

    switch (from + '_' + to) {
        case 'C_F':
            console.log((val * 9/5) + 32); 
            break;
        case 'C_K':
            console.log(val + 273.15); 
            break;
        case 'F_C':
            console.log((val - 32) * 5/9); 
            break;
        case 'F_K':
            console.log((val - 32) * 5/9 + 273.15); 
            break;
        case 'K_C':
            console.log(val - 273.15); 
            break;
        case 'K_F':
            console.log((val - 273.15) * 9/5 + 32); 
            break;
        case 'C_C':
        case 'F_F':
        case 'K_K':
            console.log(val);
            break;
        default:
            console.log("Conversion not supported");
            break;
    }
}


convertTemperature(100, 'C', 'F');   
  

