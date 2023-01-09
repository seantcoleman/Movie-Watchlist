const searchBar = document.getElementById('search-text')
const searchBtn = document.getElementById('search-btn')
const main = document.getElementById("main")
let watchlist = JSON.parse(localStorage.getItem("watchlist")) || []

searchBar.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') getMovieList()
})

searchBtn.addEventListener('click', getMovieList)

main.innerHTML = `
    <div class="empty-block">
        <img src="/images/movie-reel-icon.png" alt="">
        <p>Search for a movie</p>
    </div>
`

function getMovieList() {
    main.innerHTML = ''
    fetch(`http://www.omdbapi.com/?s=${searchBar.value}&apikey=b0dd4daf`)
    .then(res => res.json())
    .then(movies => {
        console.log(movies)
        const movieList = movies.Search.map(movie => movie.imdbID)
        console.log(movieList)
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
    if (!watchlist.includes(movie.id)) {
        document.getElementById(movie.id).children[1].innerHTML = "Added"
        document.getElementById(movie.id).children[0].src = "/images/checkmark.png"
        watchlist.push(movie.id)
        window.localStorage.setItem('watchlist', JSON.stringify(watchlist))
        document.getElementById(movie.id).removeAttribute('onclick')
    }
}

function getMovieHTML(data) {
    main.innerHTML += `
    <div class="movie-container">
        <img class="movie-poster" src="${data.Poster}" alt="">
        <div class="movie-text">
            <div class="title-rating">
                <h2 class="movie-title">${data.Title}</h2>
                <span class="rating">${data.Ratings[0].Value}</span>
            </div>
            <div class="length-genre-watchlist">
                <span class="movie-length">${data.Runtime}</span>
                <span class="genres">${data.Genre}</span>
                <div class="addRemove" onclick="addToWatchlist(${data.imdbID})" id="${data.imdbID}">
                    <img src="/images/add-icon.png">
                    <p class="add-to-watchlist")>Watchlist</p>
                </div>
            </div>
            <p class="movie-description">${data.Plot}</p>
        </div>
    </div>
    `
}

 

    