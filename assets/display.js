// On document load
document.addEventListener('DOMContentLoaded', function() {
  // Auto init Materialize
  M.AutoInit();

  // Carousel
  var elem = document.querySelector('.carousel');
  var instance = M.Carousel.init(elem, {
    duration: 300,
    indicators: true,
    fullWidth: true,
  });
  function autoplay() {
    instance.next();
    setTimeout(autoplay, 5000)
  }
  autoplay();
});

  