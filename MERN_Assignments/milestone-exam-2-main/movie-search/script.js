const searchBox = document.getElementById('search-box')
const movieContainer = document.querySelector('.movie-container')
const loader = document.querySelector('.loader')
const errorElement = document.querySelector('.error');
const apiKey = '2357dc4a'

const img = '//encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQDYau3Hs4-xw1i8jVSUY4BlF4FLmg8lQqg&usqp=CAU'

//function display movie list with data
function displayMovieList(movieData) {
    movieContainer.innerHTML = ''
    errorElement.textContent = ''
    movieData.forEach((movie) => {
        const movieElement = document.createElement("div")
        movieElement.classList.add("movie-list")
        const movieImg = document.createElement("img")
        movieImg.classList.add('movie-img')
        movieImg.src = movie.Poster !== 'N/A' ? movie.Poster : img
        movieImg.alt = "movie image"
        const movieTitle = document.createElement("h3")
        movieTitle.classList.add("movie-title")
        movieTitle.textContent = movie.Title
        const button = document.createElement('button')
        button.classList.add("watch-now")
        button.textContent = 'Watch Now'

        movieElement.appendChild(movieImg)
        movieElement.appendChild(movieTitle)
        movieElement.appendChild(button)

        movieContainer.appendChild(movieElement)
    });
}

//function to fetch data from api
async function searchMovie(searchTerm) {
    try {
        const response = await fetch(`//www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${searchTerm}`)
        const data = await response.json()
        if (data.Response === "True") {
            displayMovieList(data.Search)
        } else {
            errorElement.textContent = 'No result found'
        }
    } catch (error) {
        console.log(error)
        errorElement.textContent = 'Oops! something went wrong. Please try again later'
    }
    loader.style.display = 'none'
}

function handleSearch() {
    const searchTerm = searchBox.value.trim()
    if (searchTerm !== '') {
        movieContainer.innerHTML = ''
        loader.style.display = 'block'
        searchMovie(searchTerm)
    } else {
        errorElement.textContent = 'Please enter a movie name to search'
    }
}

searchBox.addEventListener('input', handleSearch)