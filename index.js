

fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b0dd4daf")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let main = document.getElementById("main")
        main.innerHTML = `
        <div class="movie-container">
            <img src="" alt="">
            <div class="movie-text">
                <h2 class="movie-title">Blade Runner</h2>
                <span class="rating">8.1</span>
                <span class="movie-length">117 min</span>
                <span class="genres">Action, Drama Sci-Fi</span>
                <button class="add-to-watchlist">Watchlist</button>
                <p class="movie-description">A bladerunner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.</p>
            </div>
        </div>
        `
    })