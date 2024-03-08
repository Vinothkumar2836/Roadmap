// Return all the palindromes in an array programs in anonymous function 

let palind=function(a){
     let res="";
     let ans="";
     for(i=0;i<a.length;i++)
     {
         res+=a[i];
         let count=0
         
         for(j=0;j<res.length;j++)
         {
             if(res[j]===res[((res.length-1)-j)])
             {
                 count++
                 
             }
         }
         if(count===res.length)
         {
             ans+=res+" "
         }
         res="";
     }
     return ans;
  
 }
 console.log(palind([1,11,34543,200,798,80108,8008,999,6116,70907,843]))


//  Return all the palindromes in an array program in IIFE


 (function(b){
     let res="";
     let ans="";
     for(i=0;i<b.length;i++)
     {
         res+=a[i];
         let count=0
         
         for(j=0;j<res.length;j++)
         {
             if(res[j]===res[((res.length-1)-j)])
             {
                 count++
                 
             }
         }
         if(count===res.length)
         {
             ans+=res+" "
         }
         res="";
     }
     console.log(ans);
  
 })([1,11,343,411,575,600,7887,80108,999,11]);

