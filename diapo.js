$(document).ready(function() {
    var slideshow = $(".slideshow");
    var images = slideshow.find("img");
    var currentIndex = 0;
    var playButton = $("#play-button");
  
    function showImage(index) {
      images.eq(currentIndex).removeClass("active");
      images.eq(index).addClass("active");
      currentIndex = index;
    }
  
    function nextImage() {
      var nextIndex = (currentIndex + 1) % images.length;
      showImage(nextIndex);
    }
  
    function prevImage() {
      var prevIndex = currentIndex - 1;
      if (prevIndex < 0) {
        prevIndex = images.length - 1;
      }
      showImage(prevIndex);
    }
  
    // Show first image and apply initial styles
    images.eq(currentIndex).addClass("active").css("filter", "blur(5px)");
    slideshow.css("cursor", "pointer");
  
    // Play button click handler
    playButton.click(function() {
      slideshow.get(0).requestFullscreen();
      images.eq(currentIndex).css("filter", "none");
      playButton.hide();
    });
  
    // Slideshow click handler
    slideshow.click(function(event) {
      var isFullscreen = document.fullscreenElement;
      if (isFullscreen) {
        if (playButton.css("display") == "none") {
          var halfWidth = slideshow.width() / 2;
          var clickX = event.clientX - slideshow.offset().left;
          if (clickX < halfWidth) {
            prevImage();
          } else {
            nextImage();
          }
        }
      } 
    });
  
    // Keyboard arrow keys handler
    $(document).keydown(function(event) {
      var isFullscreen = document.fullscreenElement;
      if (isFullscreen) {
        if (event.keyCode == 37) {
          prevImage();
        } else if (event.keyCode == 39) {
          nextImage();
        }
      }
    });
  
    // Exit full screen handler
    $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
      var isFullscreen = document.fullscreenElement;
      if (!isFullscreen) {
        slideshow.css({
          "position": "",
          "top": "",
          "left": "",
          "height": "",
          "width": "",
          "z-index": ""
        });
        images.eq(currentIndex).css("filter", "blur(5px)");
        playButton.show();
      }
    });
  
  });