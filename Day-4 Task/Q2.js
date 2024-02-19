// Iterating over all for loops.(for,for in,for of,foreach)


let MyResume=[{
     "Personal Details": {
       "Name": "VINOTHKUMAR P",
       "Email": "VINOTHBE42836@gamil.com",
       "Phone": 7358745748,
       "Degree": "B.E",
       "Location": {
         "Address": "NO:24/17,Hussain Subedar Street,Alandur",
         "PostalCode": 600016,
         "City": "Chennai",
         "State": "Tamilnadu",
         "Country": "India"
       },
     },
     "Work Experience": [
       {
         "Company": "Standard Chartered Global Business Services",
         "Position": "TEST ANALYST",
         "StartDate": "2023-09-25",
         "EndDate": "till now",
         "Summary": "Testing the quality of the applications" ,
       },
       {
          "Company": "Optimum Infosystem Pvt Ltd,Chennai",
          "Position": "Consultant",
          "StartDate": "2022-07-20",
          "EndDate": "2023-09-22",
          "Summary": "Testing the quality of the applications",
        },

     ],
     "Education": [
       {
         "Institution": "Jawahar Engineering College",
         "Department": "Mechanical Engineering",
         "StudyType": "Fulltime",
         "Batch Start Year": 2013,
         "Batch End Year": 2017,
         "GPA": 7.5,
       }
     ],
     "Skills": [
       {
         "Name": "JAVA,SELENIUM,javascript",
       }
         ],
     "Languages": [
       {
         "language": "Tamil,English",
       }
     ],
     "Interests": [
       {
         "name": "Script Writter",
       }
     ]
   }]

for (let index = 0; index < MyResume.length; index++) {
   console.log(MyResume[index]["Personal Details"].Location);
   console.log(MyResume[index]["Personal Details"].Degree);
   console.log(MyResume[index]["Personal Details"].Name);
   console.log(MyResume[index]["Personal Details"].Phone);
   console.log(MyResume[index]["Personal Details"].Location.Address);
   console.log(MyResume[index]["Personal Details"].Location.City);
   console.log(MyResume[index]["Personal Details"].Location.Country);
   console.log(MyResume[index]["Personal Details"].Email)

}

  //for Each
 MyResume.forEach(function(obj) {console.log(obj)});
 
// for In
 for (let key in MyResume) {
     console.log(key);
     console.log(MyResume[key]);
     console.log(MyResume[key]["Personal Details"].Location);
     console.log(MyResume[key]["Work Experience"][0]);
 }

//for Of
for (let x of MyResume) {
     console.log(Object.values(x));
}
 
