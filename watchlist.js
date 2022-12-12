fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b0dd4daf")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const main = document.getElementById("main")
        main.innerHTML = `
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