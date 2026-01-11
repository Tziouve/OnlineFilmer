const apiKey2 = '55bd92f1038596ac77644d4a54621417';
const topRatedApiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey2}&language=en-US&page=1`;

$(document).ready(function () {

  $.get(topRatedApiUrl, function (data) {
    const movies = data.results;

    const topRatedListContainer = $('.top-rated-list');

    movies.forEach(movie => {
      const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

      const movieLink = $(`<a href="details.php?id=${movie.id}" class="top-rated-item"></a>`);

      const movieListItem = $('<div class="top-rated-list-item">');

      const movieImage = $(`<img class="top-rated-list-item-img" src="${imageUrl}">`);

      movieLink.append(movieImage);

      movieListItem.append(movieLink);
      topRatedListContainer.append(movieListItem);
    });
  });
});

