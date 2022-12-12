const searchBar = document.getElementById('search-text')
const searchBtn = document.getElementById('search-btn')
const main = document.getElementById("main")

    searchBtn.addEventListener('click', function() {
        fetch(`http://www.omdbapi.com/?s=${searchBar.value}&apikey=b0dd4daf`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            for (let movie of data.Search) {

                main.innerHTML += `
               <div class="movie-container">
                   <img src="${movie.Poster}" alt="">
                   <div class="movie-text">
                       <h2 class="movie-title">${movie.Title}</h2>
                       <span class="rating">1</span>
                       <span class="movie-length">345</span>
                       <span class="genres">Action</span>
                       <button class="add-to-watchlist">Watchlist</button>
                       <p class="movie-description">The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.</p>
                   </div>
               </div>
               `
            }
        })
    })

 

    