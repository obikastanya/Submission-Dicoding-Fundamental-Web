// get list
function getlist() {
    const page = 1;
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bbb235f9dfd28f9bcb6dfa24d42f290f&language=en-US&page=${page}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            cetak(responseJson.results);
        })
        .catch(error => {
            console.log(error)
        })
}
getlist();
// cetak list
function cetak(movies) {
    const baseURLImage = `https://image.tmdb.org/t/p/w500/`;
    const content = document.querySelector("#content");
    content.innerHTML = ` `;
    content.innerHTML += ` 
        <style> 
    .image-card{
        height: 60%
    }
.card{
    margin: 0 0 30% 0;
}
    .card-body{
    overflow: hidden;
    height: 250px;
    font-size: 0.75em;
    text-align: justify;
    padding: 5%;
        }
        </style>`
        ;
    for (movie of movies) {
        content.innerHTML += ` 
        <div class="col-sm-3">
        <div class="card" style="width: 17.5rem;">
        <img class="image-card" src="${baseURLImage}${movie.poster_path}" alt="gambar"/>
            <div class="card-body">
                <h5 class="card-title">${movie.original_title}</h5>
                <p><strong>Popularity : ${movie.popularity}</strong></p>
                <p><strong>Release Date : ${movie.release_date}</strong></p>
                <p class="card-text">${movie.overview}</p>
            </div>
            </div>
        </div>
        `;
    }
}
// back to home
const home = document.getElementById('gohome');
home.addEventListener('click', getlist);