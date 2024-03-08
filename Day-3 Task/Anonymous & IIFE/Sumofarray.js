// Sum of all numbers in an array program in anonymous function 
let sum =function(a){
     let  res=0;
     for(i=0;i<a.length;i++)
     {
             res+=a[i]
     }
     return res;
  
 }
 console.log(sum([1,2,3,4,5,6,4,5,6,7,5,6,7]))


// // Sum of all numbers in an array program in IIFE

(function(a){
     let  res=0;
     for(i=0;i<a.length;i++)
     {
             res+=a[i]
     }
     console.log(res);
 }([1,2,3,4,5,6,4,5,6,7,5,6,7]));

 