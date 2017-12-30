$(window).ready(function() {
  $('.bg-content').toggle();
  setTimeout(function() {
    $('.splash').fadeOut(1000);
    $('.bg-content').toggle();
  }, 3000);
	
  var container = $('#container-restaurants');
  for (i = 0; i < data.length; i++) {
    container.append(
      '<div class="col-xs-4 photo collection text-center flip">' +
				'<img class="img-responsive flip-1" src = ' + data[i].image + '>' +
				'<p class="type-restaurant">' + data[i].type + '</p>' +
				'<img class="img-responsive flip-2" src = ' + data[i].back + '>' +
			'</div>'
    );
  };

  $('#search').keyup(function() {
    var name = $(this).val();
    $('.collection').hide();
    $('.collection').each(function() {
      var search = $(this).text().toLowerCase();
      if (search.indexOf(name) !== -1) {
        $(this).show();
      }
    });
  });
	
  $('.collection').mouseover(function() {
    $('p', this).hide();
  });
  $('.collection').mouseout(function() {
    $('p', this).show();
  });
});