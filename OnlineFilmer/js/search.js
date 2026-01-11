$(document).ready(function() {
  const apiKey15 = '55bd92f1038596ac77644d4a54621417';

  $('#search-form').submit(function(event) {
      event.preventDefault();

      const query = $('.search-input').val();

      $.ajax({
          url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey15}&query=${query}`,
          method: 'GET',
          success: function(response) {
              displaySearchResults(response.results);
          },
          error: function(error) {
              console.error('Error fetching search results:', error);
          }
      });
  });

  function displaySearchResults(results) {
      $('.search-results-dropdown').empty();

      if (results.length === 0) {
          $('.search-results-dropdown').append('<li>No results found</li>');
          $('.search-results-dropdown').show(); // Show the dropdown even with no results
          return;
      }

      results.forEach(function(movie) {
          const movieTitle = movie.title;
          const releaseYear = movie.release_date ? `(${movie.release_date.slice(0, 4)})` : '';

          const movieListItem = $(`<li><a href="details.php?id=${movie.id}">${movieTitle} ${releaseYear}</a></li>`);

          $('.search-results-dropdown').append(movieListItem);
      });

      $('.search-results-dropdown').show();
  }

  $(document).on('click', function(event) {
      if (!$(event.target).closest('.search-box').length) {
          $('.search-results-dropdown').hide();
      }
  });

  $('.search-input').on({
      focus: function() {
          $('.search-results-dropdown').show();
      },
      blur: function() {
          setTimeout(function() {
              $('.search-results-dropdown').hide();
          }, 200);
      }
  });
});
