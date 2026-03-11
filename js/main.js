(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});


$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};
// blog-menu
  // $('ul#blog-menu').slicknav({
  //   prependTo: ".blog_menu"
  // });

// review-active
$('.slider_active').owlCarousel({
  loop:true,
  margin:0,
  items:1,
  autoplay:true,
  nav:false,
  dots:true,
  autoplayHoverPause: false,
  autoplaySpeed: 800,
  responsive:{
      0:{
          items:1
      },
      767:{
          items:1
      },
      992:{
          items:1
      }
  }
});
// review-active
$('.prising_slider_active').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      767:{
          items:1,
          nav:true,
      },
      992:{
          items:1
      }
  }
});

// about_active
$('.about_active').owlCarousel({
  loop:true,
  margin:0,
  items:1,
  autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
  dots:false,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      767:{
          items:1,
          nav:false,
      },
      992:{
          items:1
      }
  }
});

// review-active
$('.testmonial_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          dots:false,
          nav:false,
      },
      767:{
          items:1,
          dots:false,
          nav:false,
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
          nav:false
      },
      1500:{
          items:1
      }
  }
});

// for filter
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });

  // filter items on button click
  $('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
	});
  
  // wow js
  new WOW().init();

  // counter 
  $('.counter').counterUp({
    delay: 10,
    time: 10000
  });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup img view */
$('.img-pop-up').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


  // scrollIt for smoth scroll
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0           // offste (in px) for fixed top navigation
  });

  // scrollup bottom to top
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '4500', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


  // blog-page

  //brand-active
$('.brand-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:true,
  nav:false,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:4
      },
      992:{
          items:7
      }
  }
});

// blog-dtails-page

  //project-active
$('.project-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
// autoplay:true,
navText:['<i class="Flaticon flaticon-left-arrow"></i>','<i class="Flaticon flaticon-right-arrow"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:2,
          nav:false
      },
      1200:{
          items:1,
      },
      1501:{
          items:2,
      }
  }
});

if (document.getElementById('default-select')) {
  $('select').niceSelect();
}

  //about-pro-active
$('.details_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
// autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
      }
  }
});

});

// resitration_Form
$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});



//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();



        // Search Toggle
        $("#search_input_box").hide();
        $("#search").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $("#close_search").on("click", function () {
            $('#search_input_box').slideUp(500);
        });
        // Search Toggle
        $("#search_input_box").hide();
        $("#search_1").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });

})(jQuery);	

// !! CARROUSEL ABOUT
const galleryTrack = document.getElementById("galleryTrack");
  const galleryItems = document.querySelectorAll(".gallery-item img");
  const galleryPrev = document.getElementById("galleryPrev");
  const galleryNext = document.getElementById("galleryNext");

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  let currentSlide = 0;
  let currentLightboxIndex = 0;

  function getVisibleItems() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 992) return 3;
    return 4;
  }

  function updateCarousel() {
    const visibleItems = getVisibleItems();
    const item = document.querySelector(".gallery-item");
    if (!item) return;

    const gap = 16;
    const itemWidth = item.offsetWidth + gap;
    galleryTrack.style.transform = `translateX(-${currentSlide * itemWidth}px)`;

    const maxSlide = Math.max(galleryItems.length - visibleItems, 0);

    galleryPrev.style.opacity = currentSlide === 0 ? "0.4" : "1";
    galleryNext.style.opacity = currentSlide >= maxSlide ? "0.4" : "1";
  }

  galleryNext.addEventListener("click", () => {
    const visibleItems = getVisibleItems();
    const maxSlide = Math.max(galleryItems.length - visibleItems, 0);

    if (currentSlide < maxSlide) {
      currentSlide++;
      updateCarousel();
    }
  });

  galleryPrev.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  });

  function openLightbox(index) {
    currentLightboxIndex = index;
    lightboxImage.src = galleryItems[index].src;
    lightboxImage.alt = galleryItems[index].alt;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function showNextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
    lightboxImage.src = galleryItems[currentLightboxIndex].src;
    lightboxImage.alt = galleryItems[currentLightboxIndex].alt;
  }

  function showPrevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImage.src = galleryItems[currentLightboxIndex].src;
    lightboxImage.alt = galleryItems[currentLightboxIndex].alt;
  }

  galleryItems.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxBackdrop.addEventListener("click", closeLightbox);
  lightboxNext.addEventListener("click", showNextImage);
  lightboxPrev.addEventListener("click", showPrevImage);

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNextImage();
    if (e.key === "ArrowLeft") showPrevImage();
  });

  window.addEventListener("resize", updateCarousel);
  window.addEventListener("load", updateCarousel);

  document.addEventListener("DOMContentLoaded", function () {
  const galleryTrack = document.getElementById("galleryTrack");
  const galleryCarousel = document.getElementById("galleryCarousel");
  const galleryPrev = document.getElementById("galleryPrev");
  const galleryNext = document.getElementById("galleryNext");

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  const originalImages = Array.from(galleryTrack.querySelectorAll(".gallery-item img")).map(img => ({
    src: img.getAttribute("src"),
    alt: img.getAttribute("alt")
  }));

  let currentLightboxIndex = 0;

  let visibleItems = getVisibleItems();
  let cloneCount = visibleItems;
  let currentIndex = cloneCount;
  let isAnimating = false;

  function getVisibleItems() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 992) return 3;
    return 4;
  }

  function buildTrack() {
    galleryTrack.innerHTML = "";

    visibleItems = getVisibleItems();
    cloneCount = visibleItems;

    const itemsToPrepend = originalImages.slice(-cloneCount);
    const itemsToAppend = originalImages.slice(0, cloneCount);

    const finalItems = [
      ...itemsToPrepend,
      ...originalImages,
      ...itemsToAppend
    ];

    finalItems.forEach((imgData, index) => {
      const item = document.createElement("div");
      item.className = "gallery-item";

      const img = document.createElement("img");
      img.src = imgData.src;
      img.alt = imgData.alt;

      let realIndex;

      if (index < cloneCount) {
        realIndex = originalImages.length - cloneCount + index;
      } else if (index >= cloneCount + originalImages.length) {
        realIndex = index - (cloneCount + originalImages.length);
      } else {
        realIndex = index - cloneCount;
      }

      img.dataset.index = realIndex;
      item.appendChild(img);
      galleryTrack.appendChild(item);
    });

    currentIndex = cloneCount;
    applyItemWidths();
    jumpToIndex(currentIndex);
    bindGalleryClicks();
  }

  function applyItemWidths() {
    const items = galleryTrack.querySelectorAll(".gallery-item");
    const gap = 16;
    const totalGap = gap * (visibleItems - 1);
    const itemWidth = (galleryCarousel.clientWidth - totalGap) / visibleItems;

    items.forEach(item => {
      item.style.width = `${itemWidth}px`;
    });
  }

  function getStepSize() {
    const firstItem = galleryTrack.querySelector(".gallery-item");
    if (!firstItem) return 0;

    const styles = window.getComputedStyle(galleryTrack);
    const gap = parseFloat(styles.columnGap || styles.gap || 16);
    return firstItem.offsetWidth + gap;
  }

  function jumpToIndex(index) {
    const step = getStepSize();
    galleryTrack.style.transition = "none";
    galleryTrack.style.transform = `translateX(-${index * step}px)`;
  }

  function moveToIndex(index) {
    const step = getStepSize();
    galleryTrack.style.transition = "transform 0.45s ease";
    galleryTrack.style.transform = `translateX(-${index * step}px)`;
  }

  function nextSlide() {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex++;
    moveToIndex(currentIndex);
  }

  function prevSlide() {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex--;
    moveToIndex(currentIndex);
  }

  galleryNext.addEventListener("click", nextSlide);
  galleryPrev.addEventListener("click", prevSlide);

  galleryTrack.addEventListener("transitionend", () => {
    const totalOriginal = originalImages.length;

    if (currentIndex >= totalOriginal + cloneCount) {
      currentIndex = cloneCount;
      jumpToIndex(currentIndex);
    }

    if (currentIndex < cloneCount) {
      currentIndex = totalOriginal + cloneCount - 1;
      jumpToIndex(currentIndex);
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isAnimating = false;
      });
    });
  });

  function bindGalleryClicks() {
    const allImgs = galleryTrack.querySelectorAll(".gallery-item img");
    allImgs.forEach(img => {
      img.addEventListener("click", () => {
        openLightbox(parseInt(img.dataset.index, 10));
      });
    });
  }

  function openLightbox(index) {
    currentLightboxIndex = index;
    lightboxImage.src = originalImages[index].src;
    lightboxImage.alt = originalImages[index].alt;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function showNextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % originalImages.length;
    lightboxImage.src = originalImages[currentLightboxIndex].src;
    lightboxImage.alt = originalImages[currentLightboxIndex].alt;
  }

  function showPrevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + originalImages.length) % originalImages.length;
    lightboxImage.src = originalImages[currentLightboxIndex].src;
    lightboxImage.alt = originalImages[currentLightboxIndex].alt;
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxBackdrop.addEventListener("click", closeLightbox);
  lightboxNext.addEventListener("click", showNextImage);
  lightboxPrev.addEventListener("click", showPrevImage);

  document.addEventListener("keydown", (e) => {
    if (lightbox.classList.contains("active")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNextImage();
      if (e.key === "ArrowLeft") showPrevImage();
    } else {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    }
  });

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      buildTrack();
    }, 150);
  });

  buildTrack();
});