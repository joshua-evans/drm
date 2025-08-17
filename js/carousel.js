let carouselHovered = false;
let pauseCarousel = false;
let slideIndex = 0;

const showCarouselNavigation = () => {
  const jsCarouselNavigation = document.getElementById("js_nav");
  jsCarouselNavigation.style.display = "block";
}

const handleCarouselNavigation = () => {
  const slides = document.getElementsByClassName("carousel__navigation-item");
  const carouselItems = document.querySelectorAll(".carousel_item");

  Array.from(slides).forEach((slide, index) => {
    slide.addEventListener("click", () => {
      pauseCarousel = true;
      slideIndex = index;
      Array.from(carouselItems).forEach((item) => {
        item.style.transform = `translateX(-${index*100}%)`
      });
      setInterval(() => pauseCarousel = false, 30000);
    })
  });
}

const runCarousel = () => {
  const carouselItems = document.querySelectorAll(".carousel_item"); 
  setInterval(() => {
    const runCarousel = !carouselHovered && !pauseCarousel;
    if (runCarousel) {
       if(slideIndex < carouselItems.length){
        slideIndex++;
      }
      else{
        slideIndex=0;
      }
      Array.from(carouselItems).forEach((item) => {
        if(slideIndex < carouselItems.length){
          item.style.transform = `translateX(-${slideIndex*100}%)`
        }
      });
    }
  }, 10000)
  
}

const stopCarouselOnHover = () => {
  const carousel = document.getElementById("carousel");
  carousel.addEventListener("mouseover", () => {
    carouselHovered = true;
  });
  carousel.addEventListener("mouseout", () => {
    carouselHovered = false;
  });
}

const handleMobileSwipe = () => {
  let startX = null;

  const carousel = document.getElementById("carousel");
  carousel.addEventListener("touchstart", (event) => {
    startX = event.touches[0].screenX;
  });
  carousel.addEventListener("touchend", (event) => {
    const endX = event.changedTouches[0].screenX;
    const carouselItems = document.querySelectorAll(".carousel_item"); 
    if(startX < endX) {
      console.log("SWIPE RIGHT");
      slideIndex -= 1;
      if(slideIndex < 0) {
        slideIndex = carouselItems.length-1;
      }
      Array.from(carouselItems).forEach((item) => {
        item.style.transform = `translateX(-${slideIndex*100}%)`
      });
    } else {
      console.log("SWIPE LEFT");
      console.log("OLD ", slideIndex);
      slideIndex += 1;
      if(slideIndex === carouselItems.length) {
        slideIndex = 0;
      }
      console.log("NEW ", slideIndex);
      Array.from(carouselItems).forEach((item) => {
        item.style.transform = `translateX(-${slideIndex*100}%)`
      });

    }
  });
}

showCarouselNavigation()
runCarousel();
stopCarouselOnHover();
handleMobileSwipe();
handleCarouselNavigation();
