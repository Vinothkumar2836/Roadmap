//Return all the prime numbers in an array using arrow functions
let arr = [2,3,2,4,5,6,7,8,1,10,11,12,13,14,15,16];
let num = [] ;
let prime = (arr) =>{ 
for (let i in arr)
{
    if(arr[i] === 1){
        let a = arr.indexOf(1);
        arr.splice(a,1);
    }
    else if(arr[i] %2 !== 0 && arr[i] %3 !== 0){
        num.push(arr[i]);  
    }
    if(arr[i] === 3){
        num.unshift(3);
    }    
    if(arr[i] === 2){
        num.unshift(2);
    }   
}
console.log(num.join(","));
}
prime(arr);
