const apiKey12 = '55bd92f1038596ac77644d4a54621417'; 
const familyApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey12}&language=en-US&sort_by=popularity.desc&with_genres=10751&page=1`;

$(document).ready(function () {

  $.get(familyApiUrl, function (data) {

    const movies = data.results;

    const familyListContainer = $('.family-list-container .family-list');

    movies.forEach(movie => {
      const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

      const movieLink = $(`<a href="details.php?id=${movie.id}" class="family-item"></a>`);

      const movieListItem = $('<div class="family-list-item">');

      const movieImage = $(`<img class="family-list-item-img" src="${imageUrl}" alt="${movie.title} Poster">`);

      movieLink.append(movieImage);

      movieListItem.append(movieLink);

      familyListContainer.append(movieListItem);
    });
  });
});
