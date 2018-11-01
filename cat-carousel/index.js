'use strict';

function changeImage () {
  $('.thumbnails').on('click', '.thumbnail', function(event){
    console.log('clicker ran');
    const targetImage = $(event.currentTarget);
    //$(event.currentTarget).addClass('.hero');
    $(event.currentTarget).removeClass('.thumbnail', '.thumbnail img').addClass('.hero img');
    $('.hero').html($(event.currentTarget));

  });
}

$(changeImage);