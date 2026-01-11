const apiKey3 = '55bd92f1038596ac77644d4a54621417';
const upcomingApiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey3}&language=en-US&page=1`;

$(document).ready(function () {
  $.get(upcomingApiUrl, function (data) {
    const movies = data.results;

    const upcomingListContainer = $('.upcoming-list');

    movies.forEach(movie => {
      const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

      const movieLink = $(`<a href="details.php?id=${movie.id}" class="upcoming-item"></a>`);

      const movieListItem = $('<div class="upcoming-list-item">');

      const movieImage = $(`<img class="upcoming-list-item-img" src="${imageUrl}">`);

      movieLink.append(movieImage);

      movieListItem.append(movieLink);
      upcomingListContainer.append(movieListItem);
    });
  });
});
