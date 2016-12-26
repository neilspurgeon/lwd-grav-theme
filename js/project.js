$(document).ready(function() {

  $('.horizontal-scroll').mousewheel(function(event, delta) {
    if (window.innerWidth >= 1000) {
      this.scrollLeft -= (delta * 30);
      event.preventDefault();
    }
  });
});