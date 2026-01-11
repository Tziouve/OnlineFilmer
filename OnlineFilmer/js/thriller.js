const apiKey16 = '55bd92f1038596ac77644d4a54621417'; 

const thrillerApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey16}&language=en-US&sort_by=popularity.desc&with_genres=53&page=1`;

$(document).ready(function () {
  $.get(thrillerApiUrl, function (data) {
    const movies = data.results;

    const thrillerListContainer = $('.thriller-list-container .thriller-list');

    movies.forEach(movie => {
      const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

      const movieLink = $(`<a href="details.php?id=${movie.id}" class="thriller-item"></a>`);

      const movieListItem = $('<div class="thriller-list-item">');

      const movieImage = $(`<img class="thriller-list-item-img" src="${imageUrl}" alt="${movie.title} Poster">`);

      movieLink.append(movieImage);

      movieListItem.append(movieLink);

      thrillerListContainer.append(movieListItem);
    });
  });
});
