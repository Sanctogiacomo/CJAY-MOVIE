var body = document.querySelector('body');
var nav = document.querySelector('nav');
var darkModeLogo = document.getElementById('dark-mode-logo');
var lightModeLogo = document.getElementById('light-mode-logo');
var lightMode = document.getElementById('light-mode');
var darkMode = document.getElementById('dark-mode');
var btnLogin = document.querySelector('#btn-login');
var btnJoin = document.querySelector('#btn-join')

// Defining my variable for the index.html
var container = document.querySelector('.container');
var container2 = document.querySelector('.container2');
var movieContainer = document.getElementsByClassName('movie-container');
var movieImage = document.getElementsByClassName('movie-image');
var movieTitle = document.querySelector('.movie-title');
var movieYear  = document.querySelector('.movie-year');

lightMode.addEventListener('click', ()=>{
    // lightMode.style.display = 'none';
    // darkMode.style.display = 'block';

    // darkModeLogo.style.display = 'none';
    // lightModeLogo.style.display = 'block';

    // body.style.backgroundColor = '#1D827C';
    // // movieTitle.style.color = 'black';
    // // movieYear.style.color = 'black';
    // nav.style.backgroundColor = '#036862'
    // btnLogin.style.backgroundColor = '#2e2d354e'
    alert('Service not available for you!\nPlease Subscribe to be able to use this service.');
   
    
})




darkMode.addEventListener('click', ()=>{
    lightMode.style.display = 'block';
    darkMode.style.display = 'none';

    darkModeLogo.style.display = 'block';
    lightModeLogo.style.display = 'none';

    body.style.backgroundColor = '#19181F';
    nav.style.backgroundColor = 'rgb(30, 29, 37)';
    btnLogin.style.backgroundColor = 'rgb(30, 29, 37)';

    // movieTitle.style.color = 'White';
    // movieYear.style.color = 'White';
})


btnJoin.addEventListener('click', ()=>{
     alert('Service not available at the moment!\nPlease check back later.')
});

btnLogin.addEventListener('click', ()=>{
    alert('Service not available at the moment!\nPlease check back later.')
});