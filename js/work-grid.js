// external js: packery.pkgd.js
$(document).ready(function() {

  var imgs = $('img');
  var imgCount = imgs.length;

  if (imgs[0]) {
    // hide loading content

    // load each image
    imgs.bind( 'load', function(){
      imgCount --;
      // do something after each image is loaded

      // On last img show content
      if (imgCount === 0) {
        // do something once all images have loaded
      }
    });
  }

  $('.work-grid').packery({
    itemSelector: '.grid-item',
    gutter: 20,
    transitionDuration: '0'
  });
});

