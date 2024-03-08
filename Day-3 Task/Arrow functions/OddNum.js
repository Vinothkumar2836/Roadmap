
//Print odd numbers in an array using arrow functions
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let oddNumber = [];
let odd = (arr) => {
    for(let i in arr){
    if(arr[i] % 2 !== 0){
    oddNumber.push(arr[i]);     
}
    }
    console.log(oddNumber);
}
odd(arr);
