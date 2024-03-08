//     2. Get all the countries with population of less than 2 lacs using Filter function
    const XMLHttpRequest = require('xhr2');
    const request=new XMLHttpRequest();
    request.open('GET','https://restcountries.com/v3.1/all','true');
    request.send();
    request.onload=function (){
        let countryData=JSON.parse(this.response);
        let popu=countryData.filter((element)=>{
            return element.population<200000;
        })
        console.log(popu);}