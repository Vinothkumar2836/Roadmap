
// 1.Get all the countries from Asia continent /region using Filter function

const XMLHttpRequest = require('xhr2');
const request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const asia=countryData.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia);}