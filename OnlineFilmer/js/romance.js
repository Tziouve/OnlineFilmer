const apiKey5 = '55bd92f1038596ac77644d4a54621417';
const romanceApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey5}&language=en-US&sort_by=popularity.desc&with_genres=10749&page=1`;

$(document).ready(function () {
  $.get(romanceApiUrl, function (data) {
    const movies = data.results;

    const romanceListContainer = $('.romance-list-container .romance-list');

    movies.forEach(movie => {
      const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

      const movieLink = $(`<a href="details.php?id=${movie.id}" class="romance-item"></a>`);

      const movieListItem = $('<div class="romance-list-item">');

      const movieImage = $(`<img class="romance-list-item-img" src="${imageUrl}" alt="${movie.title} Poster">`);

      movieLink.append(movieImage);

      movieListItem.append(movieLink);
      romanceListContainer.append(movieListItem);
    });
  });
});

