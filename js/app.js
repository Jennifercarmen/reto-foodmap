$(window).ready(function() {
  $('.bg-content').toggle();
  setTimeout(function() {
    $('.splash').fadeOut(1000);
    $('.bg-content').toggle();
  }, 3000);
	
  var container = $('#container-restaurants');
  for (i = 0; i < data.length; i++) {
    var grupo = 
		'<div class="col-xs-4 photo collection text-center flip">' +
			'<img class="img-responsive flip-1 content" src = ' + data[i].image + ' data-target="#imgModal" data-toggle="modal" data-name= "' + data[i].name + '" data-address= "' + data[i].address + '" data-phone= "' + data[i].phone + '" data-attention= "' + data[i].attention + '" data-type= "' + data[i].type + '" data-money= "' + data[i].money + '">' + 
			'<p class="type-restaurant">' + data[i].type + '</p>' +
			'<img class="img-responsive flip-2 content" src = ' + data[i].back + ' data-target="#imgModal" data-toggle="modal">' +
		'</div>';
    container.append(grupo);
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

  $('.content').click(function() {
    var name = $(this).data('name'),
    	address = $(this).data('address'),
      phone = $(this).data('phone'),
      attention = $(this).data('attention'),
      money = $(this).data('money'),
      type = $(this).data('type');
    $('.name').text(name);
    $('.address').text(address);
    $('.phone').text(phone);
    $('.attention').text(attention);
    $('.money').text(money);
    $('.type').text(type);
  });
	
  $('.collection').mouseover(function() {
    $('p', this).hide();
  });
  $('.collection').mouseout(function() {
    $('p', this).show();
  });
});