let arr =["apple","banana","kiwi","fig"]
console.log(arr.map((item)=>{
    if(item.length > 3){
        return item.toUpperCase();
    } else {
        return item;
    }
}))


 find the max value from the arr [13,34,2,54,6,7]
let arr= [13,34,2,54,6,7];
console.log(arr.reduce((acc, item) => {
    if (item > acc) {
        return item;
    }
    return acc;
}, 0))