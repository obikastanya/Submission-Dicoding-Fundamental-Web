const searchSubmit = document.querySelector("#searchSubmit");
searchSubmit.addEventListener('click', () => {
    let keyword = document.getElementById('search').value;
    if (keyword) {
        const baseURLSearch = `https://api.themoviedb.org/3/search/movie?api_key=bbb235f9dfd28f9bcb6dfa24d42f290f&language=en-US&query=${keyword}=2&include_adult=false`;
        fetch(baseURLSearch)
            .then(response => {
                return response.json()
            })
            .then(responJson => {
                if (responJson.results.length > 0) {
                    cariMovie(responJson.results);
                    detailMovie(responJson.results);
                }
                else {
                    notFound();
                }

            })
            .catch(error => {
                console.log(error)
            })
    }
});
const content = document.querySelector("#content");
function notFound() {
    content.innerHTML = `
    <style>
    .not-found{
        text-align:center;
    }
    .span-not-found{
        padding: 150px 0px 300px 0px;
        margin:auto!important;
    }
    </style>`;
    content.innerHTML += `
        <span class="span-not-found">
        <h1 class="not-found text-secondary">Movies Not Found</span></h1>
        </span>
    `;
}
function cariMovie(foundMovies) {
    const baseURLImage = `https://image.tmdb.org/t/p/w500/`;
    content.innerHTML = `
<style> 
    .image-card{
        height: 750px!important;
        100%;
        cursor: pointer;
    }
.card{
    margin: 0 0 30% 0;
}
    .card-body{
    overflow: hidden;
    height: 100px;
    font-size: 0.75em;
    text-align: center;
    padding: 5%;
    background-color: #011627;
    color:  #ffbe0b ;
    border-radius: 0px 0px 5px 5px;
        }
        .col-sm-3{
            padding: 0px;
       }
        </style>
    `;
    for (foundMovie of foundMovies) {
        let image = '';
        if (foundMovie.poster_path) {
            image = `${baseURLImage}${foundMovie.poster_path}`
        }
        else {
            image = `./src/img/NoLogo.jpg`;
        }
        content.innerHTML += `
        <div class="col-sm-3">
        <div class="card" style="width:100%">
            <img class="image-card" src="${image}" alt="${foundMovie.id}"/>
            <div class="card-body">
            <h5 class="card-title">${foundMovie.original_title}</h5>
            </div>
            </div>
        </div>
        `
    }
}
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
                        genreMovie.innerHTML += `
                        
                        <li> ${genre.name} </li>`;
                    }
                }
            }
        })
        .catch(error => {
            console.log(error)
        })
}
// new
function detailMovie(detail) {
    const baseURLImage = `https://image.tmdb.org/t/p/w500/`;
    const content = document.querySelector("#content");
    const cards = document.querySelectorAll(".image-card");
    // console.log(cards);
    for (card of cards) {
        card.addEventListener('click', event => {
            content.innerHTML = `<style>
            .jumbotron{
                background-color: white;
            }
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
            // logic, get id and genre movies
            let imgSelected = event.target;
            imgSelected = imgSelected.alt;
            let image = ``;
            for (detil of detail) {
                if (detil.id == imgSelected) {
                    if (detil.poster_path) {
                        image = `${baseURLImage}${detil.poster_path}`
                    }
                    else {
                        image = `./src/img/NoLogo.jpg`;
                    }
                    content.innerHTML += `
                <div class="col-sm-12">
                    <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                <section class="section1">
                    <img class="imgdetil" src="${image}" alt="${detil.id}"/>
                </section>
                <section class="section2">
                        <table class="table table-borderless">
                        <tbody>
                        <tr>
                            <td>Title  </td>
                            <td class="title"> ${detil.original_title}</td>
                        </tr>
                        <tr>
                            <td>Popularity  </td>
                            <td><span class="badge badge-primary">${detil.popularity}</span></td>
                        </tr>
                        <tr>
                            <td>Total Vote </td>
                            <td><span class="badge badge-warning">${detil.vote_count}</span></td>
                        </tr>
                        <tr>
                            <td>Genre  </td>
                            <td ><ul id="genre"></ul></td >
                        </tr >
                            <tr>
                                <td>Release Date  </td>
                                <td><span class="badge badge-success">${detil.release_date}</span></td>
                            </tr>
                        <tr>
                            <td>Overview </td>
                        </tr>
                        <tr>
                            <td colspan="2"><p  class="text-justify overview">${detil.overview}</p></td>
                        </tr>
                        </tbody >
                    </table >
                </section >
                </div >
                </div >
            </div >
        `;
                    getGenre(detil.genre_ids);
                }
            }
        });
    }
}

