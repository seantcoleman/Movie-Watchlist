let watchlist = JSON.parse(window.localStorage.getItem('watchlist'))
const watchlistEl = document.getElementById('watchlist')

function getWatchlist() {
    watchlistEl.innerHTML = ''
    watchlist.forEach(movie => {
        fetch(`http://www.omdbapi.com/?i=${movie}&apikey=b0dd4daf`)
            .then(res => res.json())
            .then(data => {
                watchlistEl.innerHTML += `
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
    const index = watchlist.indexOf(movie.id)
    watchlist.splice(index, 1)
    window.localStorage.setItem('watchlist', JSON.stringify(watchlist))
    emptyWatchlistTrigger()
}

function emptyWatchlistTrigger() {
    if (watchlist.length > 0) {
        getWatchlist()
        watchlistEl.style.justifyContent = "flex-start"
    } else {
        watchlistEl.innerHTML = `
        <div class="empty-block">
            <img src="/images/movie-reel-icon.png" alt="">
            <p>Watchlist is empty</p>
        </div>
        `
        watchlistEl.style.justifyContent = "center"
    }
}

emptyWatchlistTrigger()


