let carouselHovered = false;
let pauseCarousel = false;
let slideIndex = 1;

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
      Array.from(carouselItems).forEach((item) => {
        if(slideIndex < carouselItems.length){
          console.log(item);
          item.style.transform = `translateX(-${slideIndex*100}%)`
        }
      });
      if(slideIndex < carouselItems.length){
        slideIndex++;
      }
      else{
        slideIndex=0;
      }
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

showCarouselNavigation()
runCarousel();
stopCarouselOnHover();
handleCarouselNavigation();
