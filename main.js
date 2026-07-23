const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.pageheader__nav');

hamburger.addEventListener('click', () => {
    let hamburgerExpand = nav.classList.toggle('pageheader__nav--open');
    hamburger.ariaExpanded = hamburgerExpand;
});