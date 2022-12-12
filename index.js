const searchBar = document.getElementById('search-text')
const searchBtn = document.getElementById('search-btn')
const main = document.getElementById("main")

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
                    main.innerHTML += `
                    <div class="movie-container">
                        <img src="${data.Poster}" alt="">
                        <div class="movie-text">
                            <h2 class="movie-title">${data.Title}</h2>
                            <span class="rating">${data.Ratings[0].Value}</span>
                            <span class="movie-length">${data.Runtime}</span>
                            <span class="genres">${data.Genre}</span>
                            <button class="add-to-watchlist">Watchlist</button>
                            <p class="movie-description">${data.Plot}</p>
                        </div>
                    </div>
                    `
                })
        })
    })
}

    

 

    