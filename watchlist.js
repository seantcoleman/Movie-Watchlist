let movieWatchlist = JSON.parse(window.localStorage.getItem('watchlist'))
const watchlist = document.getElementById('watchlist')

function getWatchlist() {
    movieWatchlist.forEach(movie => {
        console.log(movie)
        fetch(`http://www.omdbapi.com/?i=${movie}&apikey=b0dd4daf`)
            .then(res => res.json())
            .then(data => {
                watchlist.innerHTML += `
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
                        <div class="addRemove" onclick="removeFromWatchlist(${data.imdbID})" id="${data.imdbID}" >
                            <img src="/images/remove-icon.png">
                            <p class="add-to-watchlist")>Remove</p>
                        </div>
                    </div>
                    <p class="movie-description">${data.Plot}</p>
                </div>
            </div>
                `
            })
    })
}

function removeFromWatchlist(movie) {
    console.log(movie.id)
}

if (movieWatchlist) {
    getWatchlist()
    watchlist.style.justifyContent = "flex-start"
} else {
    watchlist.innerHTML = `
    <div class="empty-block">
        <img src="/images/movie-reel-icon.png" alt="">
        <p>Watchlist is empty</p>
    </div>
    `
}

