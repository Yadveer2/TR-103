let arr=[5,7,9,19];
console.log(arr.every(value));
function value(num){
        return num % 2==0;
    }
    console.log(arr.every((num)=>num % 2==0));
    console.log(arr.some(fun));
    function fun (num){
        return num %2==0;
    }
    
    console.log(arr.some(fun));
    function fun (num){
            return num %2==0;
        }
        arr.forEach(num=> {
                num=num*2;
                console.log(num);
            })
        console.log(arr.length);
        arr.push(110);
        console.log(arr);
        arr.pop();
        console.log(arr);
        arr.shift();
        console.log(arr);
        arr.unshift(0);
        console.log(arr);
