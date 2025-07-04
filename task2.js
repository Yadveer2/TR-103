//printing numbers between 1 to 50 that are divisible by both 3 and 2
let i=1
for(i=1;i<=50;i++){
    if(i%3==0 && i%2==0){
        console.log(i);
    }
}
//printing table for number that is entered by the user
let num=7
for(i=1;i<=10;i++){
    console.log(num,"*",i,"=",num*i);
    
}
//for loop on array
let arr=[1,2,3,4,5,6]
for(let j=0;j<arr.length;j++){
    console.log("element of array");
    console.log(arr[j]);
}