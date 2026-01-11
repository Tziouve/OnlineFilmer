const apiKey17 = '55bd92f1038596ac77644d4a54621417';

const westernApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey17}&language=en-US&sort_by=popularity.desc&with_genres=37&page=1`;

$(document).ready(function () {
  $.get(westernApiUrl, function (data) {
    const movies = data.results;
    const westernListContainer = $('.western-list-container .western-list');

    movies.forEach(movie => {
      const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

      const movieLink = $(`<a href="details.php?id=${movie.id}" class="western-item"></a>`);

      const movieListItem = $('<div class="western-list-item">');
      
      const movieImage = $(`<img class="western-list-item-img" src="${imageUrl}" alt="${movie.title} Poster">`);

      movieLink.append(movieImage);
      movieListItem.append(movieLink);
      westernListContainer.append(movieListItem);
    });
  });
});
