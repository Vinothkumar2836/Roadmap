
// Convert all the strings to title caps in a string array program in anonymous function 

let str=function (string) {
     let str1 = string.toLowerCase().split(" ");
     for(let i = 0; i< str1.length; i++){
        str1[i] = str1[i][0].toUpperCase() + str1[i].slice(1);
     }
  str1.join(" ");
  let res="";
  for(let i=0;i<str1.length;i++)
  {
      res+=str1[i]+" "
  }
  
  return res;
  }
  console.log(str("Hi i am vinothkumar"));


// // Convert all the strings to title caps in a string array program in IIFE

(function (string) {
   let str1 = string.toLowerCase().split(" ");
     for(let i = 0; i< str1.length; i++){
      str1[i] = str1[i][0].toUpperCase() + str1[i].slice(1);
     }
     str1.join(" ");
     let res="";
  for(let i=0;i<str1.length;i++)
  {
      res+=str1[i]+" "
  }
  
  console.log(res);
  }) ("I am a full stack developer");

uppercase(strarr);