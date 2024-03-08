//sum Of all numbers in array using arrow functions
let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = (arr) => {
let summarr = 0;
    for(let i = 0 ; i < arr.length ; i++){
   summarr += arr[i];
}
console.log(summarr);
}
sum(arr);