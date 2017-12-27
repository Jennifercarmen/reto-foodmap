$(window).ready(function() {
  $('.splash').delay(3000).fadeOut(1000);
	
  var container = $('#container-restaurants');
  for (i = 0; i < data.length; i++) {
    container.append('<div class="col-xs-4"><div class="img-box"><p class="name-restaurant">' + data[i].name + '</p><div class="overlay"></div><img class="img-responsive img-restaurant" src=' + data[i].image + '></div></div>');
  }
});