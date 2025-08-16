let carouselHovered = false;
let pauseCarousel = false;

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
      Array.from(carouselItems).forEach((item) => {
        item.style.transform = `translateX(-${index*100}%)`
      });
    })
  });
}

const runCarousel = () => {
  let i = 1;
  
  const carouselItems = document.querySelectorAll(".carousel_item"); 
  setInterval(() => {
    const runCarousel = !carouselHovered && !pauseCarousel;
    if (runCarousel) {
      Array.from(carouselItems).forEach((item) => {
        if(i < carouselItems.length){
          console.log(item);
          item.style.transform = `translateX(-${i*100}%)`
        }
      });
       
      if(i < carouselItems.length){
        i++;
      }
      else{
        i=0;
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
