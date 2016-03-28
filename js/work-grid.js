// external js: packery.pkgd.js
$(document).ready(function() {

  var preloadedContent = $('#preloaded-content');
  var imgs = $('img');
  var imgCount = imgs.length;

  if (imgs[0]) {
    // hide loading content
    preloadedContent.css('visibility', 'hidden');
    $('body').append('<img id="loading-icon" style="position: fixed; top: 40%; z-index: 99999; left: 50%; width: 60px; margin-left: -30px;" src="/user/themes/lwd/images/loading-icon.svg"/>');

    // load each image
    imgs.bind( 'load', function(){
      imgCount --;

      // On last img show content
      if (imgCount === 0) {
        $('#loading-icon').hide();
        preloadedContent.css({'visibility': 'initial', 'transition': '.5s ease'});
      }
    });
  }

  $('.work-grid').packery({
    itemSelector: '.grid-item',
    gutter: 20,
    transitionDuration: '0'
  });
});

