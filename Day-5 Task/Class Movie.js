class Movie
{    
constructor(title,studio,rating){ 
    this.title = title;
    this.studio = studio;
    this.rating = rating;           
    if(this.rating === undefined){ 
        this.rating = "PG";
    }
}
getPG()                          
    {
           if(this.rating == "PG"){
            console.log(`Movie : ${this.title},${this.studio},${this.rating}`);
        }       
        }
}
let movies = [];
movies.push(new Movie("Casino Royale","Eon Productions","PG13"));
movies.push(new Movie("Home Alone","20th century Fox","PG"));
movies.push(new Movie("The Revenant", "RatPac Entertainment","R"));
movies.push(new Movie("National Treasure","Walt Disney Pictures")); //Rating is undefined 
movies.push(new Movie("Jaws","Universal Pictures","PG"));

for(let j in movies) {
    console.log(movies[j]);
    }

for (let i in movies){
    movies[i].getPG();
}

