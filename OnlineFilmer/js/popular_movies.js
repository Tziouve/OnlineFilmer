const apiKey = '55bd92f1038596ac77644d4a54621417';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

$(document).ready(function () {
  $.get(apiUrl, function (data) {
    const movies = data.results;

    const movieListContainer = $('.movie-list');

    movies.forEach(movie => {
      const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

      const movieLink = $(`<a href="details.php?id=${movie.id}"></a>`);

      const movieListItem = $('<div class="movie-list-item">');

      const movieImage = $(`<img class="movie-list-item-img" src="${imageUrl}">`);

      movieLink.append(movieImage);

      movieListItem.append(movieLink);
      movieListContainer.append(movieListItem);
    });
  });
});