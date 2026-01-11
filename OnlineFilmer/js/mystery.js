const apiKey13 = '55bd92f1038596ac77644d4a54621417'; 

const mysteryApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey13}&language=en-US&sort_by=popularity.desc&with_genres=9648&page=1`;

$(document).ready(function () {

  $.get(mysteryApiUrl, function (data) {
    const movies = data.results;

    const mysteryListContainer = $('.mystery-list-container .mystery-list');

    movies.forEach(movie => {
      const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

      const movieLink = $(`<a href="details.php?id=${movie.id}" class="mystery-item"></a>`);

      const movieListItem = $('<div class="mystery-list-item">');

      const movieImage = $(`<img class="mystery-list-item-img" src="${imageUrl}" alt="${movie.title} Poster">`);

      movieLink.append(movieImage);

      movieListItem.append(movieLink);

      mysteryListContainer.append(movieListItem);
    });
  });
});
