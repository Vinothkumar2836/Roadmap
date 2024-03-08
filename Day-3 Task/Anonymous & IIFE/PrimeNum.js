// Return all the prime numbers in an array programs in anonymous function 


let sum =function(a){
     let  res="";
     for(i=0;i<a.length;i++)
     {
         let count=0;
         for(j=1;j<=a[i];j++)
         {
             if(a[i]%j===0)
             {
                 count++
             }
         }
         if(count==2)
         {
             res+=a[i]+" "
         }
     }
     return res;
  
 }
 console.log(sum([1,2,3,4,5,6,7,8,9,11]))

// //  Return all the prime numbers in an array program in IIFE


(function(a){
     let  res="";
     for(i=0;i<a.length;i++)
     {
         let count=0;
         for(j=1;j<=a[i];j++)
         {
             if(a[i]%j===0)
             {
                 count++
             }
         }
         if(count==2)
         {
             res+=a[i]+" "
         }
     }
     console.log(res);
  
 }([1,2,3,4,5,6,7,8,9,11,15,16,18]));
