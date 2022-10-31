const api_url = 'https://yts.mx/api/v2/list_movies.json?quality=3D';

// Defining my variable for the index.html
var container = document.querySelector('.container');
var container2 = document.querySelector('.container2');
var movieImage = document.querySelector('.movie-image');
var movieTitle = document.querySelector('.movie-title');
var movieYear  = document.querySelector('.movie-year');
var socialIcon = document.querySelector('.social-icon');





const movieApp = async () => {
    try{
       const req = await fetch(api_url);
       const res = await req.json();
       return res;
    }
    catch(e){
        console.log('Error 404')
    }
       
}


const renderMovieApp = async ()=>{
    try{
        const movies = await movieApp();
        var html = ' ';

        movies.data.movies.slice(0,16).map(movie => {
            movieRating = Number.isInteger(movie.rating) ? movie.rating + '.0 / 10'  : movie.rating + ' / 10';
    
            
            let moviesList = ` <div class="movie-container">
            <div class="movie-items">
               
                <a href='./test2.html?movie=${movie.slug}'><img src='${movie.large_cover_image}' alt="images/${movie.title}" class="movie-image"/>
               <div class="fig-caption">
                <span class='icon-star'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:goldenrod;"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg></span>
                <h4 class="movie-rating">${movieRating}</h4>
                 </div>
                 </a>
            </div>
            <div class="movie-description">
                <p ><a href="./test2.html?movie=${movie.slug}" class="movie-title" >${movie.title}</a></p>
                <p class="movie-year">${movie.year}</p>
                </div>
           
            </div>
        </div>`;
        html += moviesList;
        });
     container.innerHTML = html;

    }
    catch(error){
        console.log(error);
    }

}
renderMovieApp();

  // <button class="movie-rating" >${movieRating}</button>
 // <div class='year-rating-container'></div>
//  <a class="movie-genre">${movie.genres[0]}</a>


