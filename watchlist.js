let movieWatchlist = JSON.parse(window.localStorage.getItem('watchlist'))
console.log(movieWatchlist)

movieWatchlist.forEach(movie => {
    console.log(movie)
    fetch(`http://www.omdbapi.com/?i=${movie}&apikey=b0dd4daf`)
        .then(res => res.json())
        .then(data => {
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
                    <div class="addRemove">
                        <img src="/images/remove-icon.png">
                        <p id="${data.imdbID}" class="add-to-watchlist" onclick="addToWatchlist(${data.imdbID})")>Remove</p>
                    </div>
                </div>
                <p class="movie-description">${data.Plot}</p>
            </div>
        </div>
            `
        })
})

