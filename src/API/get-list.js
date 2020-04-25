// get list
function getlist() {
    const page = 1;
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bbb235f9dfd28f9bcb6dfa24d42f290f&language=en-US&page=${page}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            cetak(responseJson.results);
            detailMovie(responseJson.results);
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
        height: 60%;
        cursor: pointer;
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
        .col-sm-3{
             padding: 0px;
        }
        </style>`
        ;
    for (movie of movies) {
        content.innerHTML += ` 
        <div class="col-sm-3">
        <div class="card" style="width: 100%;">
        <img class="image-card" src="${baseURLImage}${movie.poster_path}" alt="${movie.id}"/>
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


function detailMovie(detail) {
    const baseURLImage = `https://image.tmdb.org/t/p/w500/`;
    const content = document.querySelector("#content");
    const cards = document.querySelectorAll(".image-card");
    for (card of cards) {
        card.addEventListener('click', event => {
            content.innerHTML = `<style>
            .container{
                display: flex;
                flex-direction: row;
            }
            .section1{
                flex-basis: 60%;
            }
            .section2{
                flex-basis: 40%;
            }
            .overview{
                text-indent: 5em;
            }
            </style> `;
            // logic, get id movies
            let imgSelected = event.target;
            imgSelected = imgSelected.alt;
            for (detil of detail) {
                if (detil.id == imgSelected) {
                    content.innerHTML += `
                <div class="col-sm-12">
                <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <section class="section1">
                    <img src="${baseURLImage}${detil.poster_path}" alt="${detil.id}"/>
                </section>
                <section class="section2">
                        <table class="table table-borderless">
                        <tbody>
                        <tr>
                            <td>Title  </td>
                            <td><strong> ${detil.original_title}</strong></td>
                        </tr>
                        <tr>
                            <td>Popularity  </td>
                            <td>${detil.popularity}</td>
                        </tr>
                        <tr>
                            <td>Vote Count  </td>
                            <td>${detil.vote_count}</td>
                        </tr>
                        <tr>
                            <td>Genre  </td>
                            <td ><ul id="genre"></ul></td >
                        </tr>
                        <tr>
                            <td>Release Date  </td>
                            <td>${detil.release_date}</td>
                        </tr>
                        <tr>
                            <td>Overview </td>
                        </tr>
                        <tr>
                            <td colspan="2" ><p class="text-justify overview">${detil.overview}</p></td>
                        </tr>
                        </tbody>
                    </table>
                </section>
                </div>
                </div>
            </div>
            `;
                    getGenre(detil.genre_ids);
                }
            }
            // end logic

        });
    }
}

// new
function getGenre(genre_ids) {
    let genreMovie = document.getElementById('genre');
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=bbb235f9dfd28f9bcb6dfa24d42f290f&language=en-US`)
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            for (genre of responseJson.genres) {
                for (genreid of genre_ids) {
                    if (genreid == genre.id) {
                        // genreMovie.push(genre.name);
                        genreMovie.innerHTML += `<li> ${genre.name} </li>`;
                    }
                }
            }
        })
        .catch(error => {
            console.log(error)
        })
}