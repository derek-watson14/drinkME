// CAROUSEL
$(document).ready(function(){
  $('.carousel').carousel(
  {
    fullWidth: true,
    indicators: true,
    duration: 100,
  }
  );
});

function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 6000);
}
autoplay()   