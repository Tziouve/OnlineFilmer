const apiKey9 = '55bd92f1038596ac77644d4a54621417'; 

const comedyApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey9}&language=en-US&sort_by=popularity.desc&with_genres=35&page=1`;

$(document).ready(function () {
  $.get(comedyApiUrl, function (data) {
    const movies = data.results;

    const comedyListContainer = $('.comedy-list-container .comedy-list');

    movies.forEach(movie => {

      const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

      const movieLink = $(`<a href="details.php?id=${movie.id}" class="comedy-item"></a>`);

      const movieListItem = $('<div class="comedy-list-item">');

      const movieImage = $(`<img class="comedy-list-item-img" src="${imageUrl}" alt="${movie.title} Poster">`);

      movieLink.append(movieImage);

      movieListItem.append(movieLink);

      comedyListContainer.append(movieListItem);
    });
  });
});
