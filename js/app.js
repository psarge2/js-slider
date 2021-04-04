let init = () => {
  let container = document.getElementsByClassName('jumbo-slider__container')[0],
  slides = document.getElementsByClassName('jumbo-slider__slide'), 
  circles = document.getElementsByClassName('jumbo-slider__circle'),
  links = document.getElementsByClassName('jumbo-slider__link'),
  current = 1,
  time = 6000;

  //add animation class to slide
  slides[0].classList.add('jumbo-slider__slide--active');
}

init();