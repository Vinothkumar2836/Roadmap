// Return median of two sorted arrays of the same size programs in anonymous
 let arr=function(a,b){
     let c=[];
     let n=a.length;
     let p=b.length;
     let i=0;
     let j=0;
     let med=0;
     while(i<n && j<p)
     {
         if(a[i]<b[j])
         {
             c.push(a[i])
             i++
         }
         else
         {
             c.push(b[j])
             j++
         }
     }
     
      if(i<n)
      {
          for(let k=i;k<n;k++)
          {
              c.push(a[k])
          }
      }
      else if(j<p)
      {
          for(let m=j;m<p;m++)
          {
              c.push(b[m])
          }
      }
      if(c.length%2===0)
      {
          med=(c[(c.length/2)-1]+c[c.length/2])/2
      }
      else
      {
          med=c[Math.floor(c.length/2)]
      }
      return med;
     
 }
 console.log(arr([1,2,3,7],[4,5,6,8]));


//  Return median of two sorted arrays of the same size programs in IIFE
(function(a,b){
     let c=[];
     let n=a.length;
     let p=b.length;
     let i=0;
     let j=0;
     let med=0;
     while(i<n && j<p)
     {
         if(a[i]<b[j])
         {
             c.push(a[i])
             i++
         }
         else
         {
             c.push(b[j])
             j++
         }
     }
     
      if(i<n)
      {
          for(let k=i;k<n;k++)
          {
              c.push(a[k])
          }
      }
      else if(j<p)
      {
          for(let m=j;m<p;m++)
          {
              c.push(b[m])
          }
      }
      if(c.length%2===0)
      {
          med=(c[(c.length/2)-1]+c[c.length/2])/2
      }
      else
      {
          med=c[Math.floor(c.length/2)]
      }
      console.log(med);
     
 }) ([1,2,3,7],[4,5,6,8]);