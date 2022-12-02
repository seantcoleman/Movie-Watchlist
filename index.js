

fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b0dd4daf")
    .then(res => res.json())
    .then(data => console.log(data))