const apiKey4 = '55bd92f1038596ac77644d4a54621417';
const actionApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey4}&language=en-US&sort_by=popularity.desc&with_genres=28&page=1`;

$(document).ready(function () {
  // Fetch action movies from TMDb API
  $.get(actionApiUrl, function (data) {
    const movies = data.results;

    const actionListContainer = $('.action-list');

    movies.forEach(movie => {
      const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

      const movieLink = $(`<a href="details.html?id=${movie.id}" class="action-item"></a>`);

      const movieListItem = $('<div class="action-list-item">');
      const movieImage = $(`<img class="action-list-item-img" src="${imageUrl}" alt="${movie.title} Poster">`);

      movieLink.append(movieImage);

      movieListItem.append(movieLink);
      actionListContainer.append(movieListItem);
    });
  });
});
