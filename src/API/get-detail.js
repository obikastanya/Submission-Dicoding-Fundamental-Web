const searchSubmit = document.querySelector("#searchSubmit");
searchSubmit.addEventListener('click', (event) => {
    let keyword = document.getElementById('search').value;
    const baseURLSearch = `https://api.themoviedb.org/3/search/movie?api_key=bbb235f9dfd28f9bcb6dfa24d42f290f&language=en-US&query=${keyword}=2&include_adult=false`;
    fetch(baseURLSearch)

        .then(response => {
            return response.json()
        })
        .then(responJson => {
            cetakDetail(responJson.results);
        })
        .catch(error => {
            console.log(error)
        })
});

function cetakDetail(details) {
    const baseURLImage = `https://image.tmdb.org/t/p/w500/`;
    const content = document.querySelector("#content");
    content.innerHTML = `
<style> 
    .image-card{
        height: 750px!important;
        width:280px;
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
        </style>
    `;
    for (detail of details) {
        console.log(detail.original_title);
        let image = '';
        if (detail.poster_path) {
            image = `${baseURLImage}${detail.poster_path}`
        }
        else {
            image = `./src/img/No_Logo.jpg`
        }
        content.innerHTML += `
        <div class="col-sm-3">
        <div class="card" style="width: 17.5rem;">
        <img class="image-card" src="${image}" alt="logo"/>
            <div class="card-body">
            <h1>${detail.original_title}<h1>  
            </div>
            </div>
        </div>
        `
    }

}