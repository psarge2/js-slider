let init = () => {
  let container = document.getElementsByClassName('jumbo-slider__container')[0],
  slides = document.getElementsByClassName('jumbo-slider__slide'), 
  circles = document.getElementsByClassName('jumbo-slider__circle'),
  links = document.getElementsByClassName('jumbo-slider__link'),
  current = 1,
  time = 6000;

  //add animation class to slide
  slides[0].classList.add('jumbo-slider__slide--active');
  links[current-1].classList.add('jumbo-slider__link--active');
  circles[current-1].classList.add('jumbo-slider__circle--filled');

  //update elipsis and links
  let updateNav = (current) => {
    //console.log(`update current: ${current}`)
    for (let i = 0; i < slides.length; i++){
      links[i].classList.remove('jumbo-slider__link--active');
      circles[i].classList.remove('jumbo-slider__circle--filled');
    }
    links[current-1].classList.add('jumbo-slider__link--active');
    circles[current-1].classList.add('jumbo-slider__circle--filled');
  }
  let startSliding = () => {
    
    setInterval(() => {
      //console.log(`current: ${current}`)

      //remove  active class from first slide and add it to second slide
      slides[1].classList.add('jumbo-slider__slide--active')
      slides[0].classList.remove('jumbo-slider__slide--active')

      //clone first slide and place last on the list
      container.appendChild(slides[0].cloneNode([true]));
      //remoce the first slide after it is cloned 
      container.removeChild(slides[0]);

      //console.log(`slides: ${slides.length}`)
      if(current < slides.length){
        current++
        updateNav(current)
      } else {
        current = 1
        updateNav(current);
      }
      
    }, time);
    //could use setTimeout to stop slide show but it will end once user goes to a differnt page or closes window
  }
  startSliding();
}

init();