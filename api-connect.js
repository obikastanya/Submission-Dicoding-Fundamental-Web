const token = 'bbb235f9dfd28f9bcb6dfa24d42f290f';
const page = 1;
// get list
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${token}&language=en-US&page=${page}`)
    .then(response => {
        return response.json();

    })
    .then(responseJson => {
        // put response as params
        cetak(responseJson.results);
    })
    .catch(error => {
        console.log(error)
    });
// cetak list
function cetak(movies) {
    const content = document.querySelector(".list");
    for (movie of movies) {
        content.innerHTML += ` 
        <li>Judul : ${movie.original_title}</li>`;
    }
}