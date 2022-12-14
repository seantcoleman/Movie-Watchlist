const searchBar = document.getElementById('search-text')
const searchBtn = document.getElementById('search-btn')
const main = document.getElementById("main")
let watchlist = []

searchBar.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') getMovieList()
})
searchBtn.addEventListener('click', getMovieList)


function getMovieList() {
    main.innerHTML = ''
    fetch(`http://www.omdbapi.com/?s=${searchBar.value}&apikey=b0dd4daf`)
    .then(res => res.json())
    .then(movies => {
        const movieList = movies.Search.map(movie => movie.imdbID)
        movieList.forEach(movie => {
            fetch(`http://www.omdbapi.com/?i=${movie}&apikey=b0dd4daf`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.Response) getMovieHTML(data) 
                })
        })
    })
    .catch(err => main.innerHTML = `<p>Unable to find what you're looking for.</p>`)

}

function addToWatchlist(movie) {
    console.log(movie.id)
    watchlist.push(movie.id)
    window.localStorage.setItem('watchlist', JSON.stringify(watchlist))
}

function getMovieHTML(data) {
    main.innerHTML += `
    <div class="movie-container">
        <img src="${data.Poster}" alt="">
        <div class="movie-text">
            <h2 class="movie-title">${data.Title}</h2>
            <span class="rating">${data.Ratings[0].Value}</span>
            <span class="movie-length">${data.Runtime}</span>
            <span class="genres">${data.Genre}</span>
            <button id="${data.imdbID}" class="add-to-watchlist" onclick="addToWatchlist(${data.imdbID})")>Watchlist</button>
            <p class="movie-description">${data.Plot}</p>
        </div>
    </div>
    `
}

 

    