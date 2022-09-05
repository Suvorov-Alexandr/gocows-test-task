'use srtict';

const menuIcon = document.querySelector('#menu-icon');
menuIcon.addEventListener('click', () => {
  const menuBody = document.querySelector('#menu-body');
  const body = document.querySelector('body');
  const logoModificator = document.querySelector('.--menu-logo');

  menuIcon.classList.toggle('--pressed');
  menuBody.classList.toggle('--menu-pressed');
  body.classList.toggle('--overflow-hidden');
  logoModificator.classList.toggle('--display-none');
});

function toggleShowHeaderMenu() {
  const header = document.querySelector('.header');
  let prevScrollPos = window.pageYOffset;

  window.addEventListener('scroll', function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      header.classList.remove('--menu-button-hide');
    } else {
      header.classList.add('--menu-button-hide');
    }
    prevScrollPos = currentScrollPos;
  });
}
setTimeout(toggleShowHeaderMenu, 0);
