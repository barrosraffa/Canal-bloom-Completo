var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    arrowKeys: true,
    controlsContainer: '.arrow',
    responsive: {
      420: {
        items: 1,   
      },
  
      1024: {
        items: 2,
      },
  
      768: {
        items: 2,
      },
  
      1280: {
        items: 3,
      }
    }
  });

  var secondSlider = tns({
    container: '.my-secondSlider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    arrowKeys: true,
    controlsContainer: '.secondArrow',
    responsive: {
      420: {
        items: 1,   
      },
  
      1024: {
        items: 2,
      },
  
      768: {
        items: 2,
      },
  
      1280: {
        items: 3,
      }
    }
  });
  
  
  