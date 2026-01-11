const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
console.log('Movie ID:', movieId);

const apiKey21 = '55bd92f1038596ac77644d4a54621417';
const detailApiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey21}&language=en-US`;

$.get(detailApiUrl, function (detailData) {
  console.log('Received detailData:', detailData);

  const genreNames = detailData.genres.map(genre => genre.name).join(', ');

  $('.movie-details').html(`
    <img src="https://image.tmdb.org/t/p/w185/${detailData.poster_path}" alt="${detailData.title} Poster" style="max-width: 100%; height: auto;">
    <h1>${detailData.title} (${genreNames})</h1>
    <p class="overview-paragraph">${detailData.overview}</p>
    <p>Critic Score: ${detailData.vote_average}</p>
    <!-- Add more details as needed -->
  `);
});
