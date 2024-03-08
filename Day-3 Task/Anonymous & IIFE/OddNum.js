 // Print odd numbers in an array program in anonymous 
let odd=function(a){
  let  res="";
  for(let i=0;i<a.length;i++)
  {
      if(a[i]%2!==0)
      {
          res+=a[i]+" ";
      }
  }
  return res;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))

// Print odd numbers in an array program in IIFE 
(function(a){
  let  res="";
  for(i=0;i<a.length;i++)
  {
      if(a[i]%2!==0)
      {
          res+=a[i]+" "
      }
  }
  console.log(res);
})([1,2,3,4,5,7]);
