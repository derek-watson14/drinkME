// CAROUSEL
$(document).ready(function(){
  $('.carousel').carousel(
  {
    fullWidth: true,
    indicators: true,
    duration: 100,
  }
  );
  //parallex 
  $('.parallax').parallax();   
});

function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 6000);
}
autoplay()   

// //text area#1
// $('#cocktailsearch').val();
//   M.textareaAutoResize($('#cocktailsearch'));

//   //text area#2
// $('#beersearch').val();
// M.textareaAutoResize($('#beersearch'));
  