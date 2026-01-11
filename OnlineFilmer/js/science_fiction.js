const apiKey14 = '55bd92f1038596ac77644d4a54621417'; 

const sciFiApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey14}&language=en-US&sort_by=popularity.desc&with_genres=878&page=1`;

$(document).ready(function () {
  $.get(sciFiApiUrl, function (data) {
    const movies = data.results;

    const sciFiListContainer = $('.science-fiction-list-container .science-fiction-list');

    movies.forEach(movie => {

      const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

      const movieLink = $(`<a href="details.php?id=${movie.id}" class="science-fiction-item"></a>`);

      const movieListItem = $('<div class="science-fiction-list-item">');

      const movieImage = $(`<img class="science-fiction-list-item-img" src="${imageUrl}" alt="${movie.title} Poster">`);

      movieLink.append(movieImage);

      movieListItem.append(movieLink);

      sciFiListContainer.append(movieListItem);
    });
  });
});
