$(function(){
  $('body').css('display', 'none');
  $('body').fadeIn(800);

  $('a').on('click', function(){
    event.preventDefault();
    newLocation = this.href;
    $('body').fadeOut(800, function(){
      window.location = newLocation;
    });
  })
});
