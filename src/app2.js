const container2 = document.querySelector('.container2');
const click1 = document.querySelector('.movie-title');
const navBackward = document.querySelector('.back');


const url = 'https://yts.mx/api/v2/list_movies.json?quality=3D';

const movieApp2 = async ()=>{
    var response = await fetch(url);
    var dataCollected = await response.json();
    return dataCollected;
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const slug = urlParams.get('movie');


const renderMovieApp2 = async ()=>{
    var html = '';
    var moviesList = await movieApp2();
    console.log(moviesList);
    const pageData = moviesList.data.movies.filter(movie => movie.slug === slug);
    
   
    pageData.map(movie2 => {
      var reducedSynopsis = movie2.synopsis;
      reducedSynopsis = (reducedSynopsis.length > 410) ? reducedSynopsis.slice(0,410)+'...' : reducedSynopsis;
      
         var list = `
         <div class="movie-container2">
         <div class="movie-items2">
         <img src="${movie2.large_cover_image}" alt="images/${movie2.title}" class="movie-image2"/>
        
         <a href='${movie2.url}' target="_blank"><button class='movie-download'>

         <svg width="16px" height="16px" fill:'#000'; "viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-file-download">
    
         <title>1157</title>
         
         <defs></defs>
         <g stroke="none" stroke-width="1" fill="#000000" fill-rule="evenodd">
             <g transform="translate(1.000000, 1.000000)" fill="#19181F">
                 <path d="M14.031,8.016 L14.031,12.016 L2,12.016 L2,8.016 L0,8.016 L0,15 L15.938,15 L15.938,8.016 L14.031,8.016 Z" class="si-glyph-fill"></path>
                 <path d="M8.072,8.947 L10.982,5.071 L8.968,5.05 L8.968,0.065 L7.03,0.065 L7.03,5.05 L5.03,5.05 L8.072,8.947 Z" class="si-glyph-fill"></path>
             </g>
         </g>
     </svg> &nbsp
         Download movie</button></a>
          </div>
         <div class="movie-description2">
         <h1 class="movie-title2">${movie2.title}</h1>
         <div class="movie-sub-group">
         <h3 class="movie-year2">${movie2.year}</h3>
         <p class="movie-sub-genre">${movie2.genres.join(' / ')}</p>
         </div>
         <p class="movie-item-p">
           ${reducedSynopsis};
         </p>
        </div>
        </div>`
         html += list;
         console.log(html);
    });
    container2.innerHTML = html;
};
renderMovieApp2();


navBackward.addEventListener('click', ()=>{
  history.back();
})