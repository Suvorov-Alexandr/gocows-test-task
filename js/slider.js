'use srtict';

let swiper = new Swiper('.mySwiper', {
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },

  speed: 3000,
  loop: true,
  effect: 'cube',

  fadeEffect: {
    crossFade: true,
  },
});

function showAndHidePopup() {
  const section = document.querySelector('.slider');
  const popupDiv = document.querySelector('.slider__popup');
  let currentElement;

  section.addEventListener('click', function (event) {
    currentElement = event.target;

    if (popupDiv.classList.contains('--popup-show')) {
      document.querySelector('body').classList.remove('--overflow-hidden');
      let removeImg = popupDiv.children;
      popupDiv.removeChild(removeImg[0]);
      document.querySelector('.slider__popup').classList.remove('--popup-show');
    } else if (currentElement.src !== undefined) {
      let copyImg = document.createElement('img');
      copyImg.src = currentElement.src;
      document.querySelector('.slider__popup').classList.add('--popup-show');
      popupDiv.appendChild(copyImg);
      document.querySelector('body').classList.add('--overflow-hidden');
    }
  });
}
setTimeout(showAndHidePopup, 0);
