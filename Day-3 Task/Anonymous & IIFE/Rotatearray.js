// Rotate an array by k times programs in anonymous function IIFE
let rotate=function(a,k){
    let n=a.length;
    let c=[];
    let  d="";
   for(i=0;i<n;i++)
   {
       c[(i+k)%(n)]=a[i]
   }
   for(i=0;i<c.length-1;i++)
   {
       d+=c[i]+" "
   }
   d+=c[c.length-1]
   return d;
 }
 console.log(rotate([1,2,3,4,5],2))

// Rotate an array by k times programs in IIFE

(function(a,k){
     let n=a.length;
     let c=[];
     let d="";
   for(i=0;i<n;i++)
   {
       c[(i+k)%(n)]=a[i]
   }
   for(i=0;i<c.length-1;i++)
   {
       d+=c[i]+" "
   }
   d+=c[c.length-1]
   console.log(d);
 }) ([1,2,3,4,5],3);


