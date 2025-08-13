const changeCssCarouselClass = () => {
  const slide1 = document.getElementById("snapper1");  
  slide1.className = 'js__snapper';
  const slide2 = document.getElementById("snapper2");  
  slide2.className = 'js__snapper';
  const slide3 = document.getElementById("snapper3");  
  slide3.className = 'js__snapper';
  const slide4 = document.getElementById("snapper4");  
  slide4.className = 'js__snapper';
}

const jsCarousel = () => {
  const slidesContainer = document.getElementsByClassName("carousel__slide")[0];
  slidesContainer.computedStyleMap.left = "100px"; 
  /*const slide1 = document.getElementById("carousel__slide1");
  const width = slide1.clientWidth;
  const step = width/100;
  let stepCount = 1
  while(stepCount < 100) {
    slidesContainer.forEach((slide) => {
      slide.style.left -= 100;
      stepCount += 1
    })
  }*/
}







changeCssCarouselClass();
jsCarousel();