//  Control Flow in JavaScript

//  if...else if...else example
let weather = 'dry';

if (weather === 'dry') {
    console.log('Take a bottle');
} else if (weather === 'cloudy') {
    console.log('Take a jacket');
} else {
    console.log('Take an umbrella');
}

//  switch case example (alternative to multiple if-else)
switch (weather) {
    case 'dry':
        console.log('Take a bottle');
        break;
    case 'rainy':
        console.log('Take an umbrella');
        break;
    default:
        console.log('No data');
        break;
}

