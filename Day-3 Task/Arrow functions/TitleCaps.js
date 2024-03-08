// Convert all the strings to title caps in a string array using arrow functions
let strarr = ['vinoth','kumar','arun','vijay','vembuli','ram'];
let strarr1 = [];
let uppercase = (strarr) => {
for (let i in strarr){
let str = strarr[i].split("");
let str1 = str.shift();
let str2 = str1.toUpperCase();
console.log(str2+str.join('')); 
}
}
uppercase(strarr);
