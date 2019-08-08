// Init API
const omdb = new OMDB();

// Init UI

const ui = new UI();

// Get Movies

document.addEventListener('DOMContentLoaded', getMovies);

// search movies

document.getElementById('searchForm').addEventListener('submit', searchMovies)


// get movies function
function getMovies() {

    // make a request to the api
    omdb.getMovies().then(results => {
        ui.showMovies(results.movie);
        ui.showSeries(results.series);
        console.log(results.movie);
    }).catch(err => {
        console.log(err);
    })
}

//Search Movie function

function searchMovies(e) {
    const inputText = document.querySelector('.search');
    // GEt Input Text
    const userText = inputText.value;
    // console.log(userText)
    // make a call to API
    omdb.search(userText).then(results => {
        ui.showSearch(results)
    }).catch(err => {
        console.log(err)
    })

    e.preventDefault();

}
//Movie Clicked

function movieClicked(id) {
    sessionStorage.setItem('movieID', id);
    location.assign('./movie.html');
    return false;
}

// Movie Info
function movie_Info() {
    let id = sessionStorage.getItem('movieID');
    // console.log(id)


    //make a call to omdb API

    omdb.movieInfo(id).then(results => {
        ui.showInfo(results);
    }).catch(err => {
        console.log(err);
    })
}