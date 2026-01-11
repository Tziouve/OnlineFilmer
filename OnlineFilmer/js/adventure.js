const apiKey6 = '55bd92f1038596ac77644d4a54621417';
const adventureApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey6}&language=en-US&sort_by=popularity.desc&with_genres=12&page=1`;

$(document).ready(function () {
  
  $.get(adventureApiUrl, function (data) {
    const movies = data.results;

    const adventureListContainer = $('.adventure-list-container .adventure-list');

    movies.forEach(movie => {
      const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

      const movieLink = $(`<a href="details.php?id=${movie.id}" class="adventure-item"></a>`);

      const movieListItem = $('<div class="adventure-list-item">');
      const movieImage = $(`<img class="adventure-list-item-img" src="${imageUrl}" alt="${movie.title} Poster">`);

      movieLink.append(movieImage);

      movieListItem.append(movieLink);
      adventureListContainer.append(movieListItem);
    });
  });
});