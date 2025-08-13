/*const changeCssCarouselClass = () => {
  const snappers = document.getElementsByClassName("carousel__snapper");  
  console.log(snappers);
  for(let i = 0; i < snappers.length; i++) {
    snappers[i].className = "carousel__snapper__rev";
  }
}*/
function jump(){
  //var url = location.href;               //Save down the URL without hash.
  location.href = "#carousel__slide1";                 //Go to the target element.
  //history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
}

const goToFirstSlide = () => {
  setInterval(jump, 7000);
}
goToFirstSlide();
//changeCssCarouselClass();
//jsCarousel();