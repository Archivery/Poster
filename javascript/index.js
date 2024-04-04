document.addEventListener('DOMContentLoaded', function() {
  // Code inside this function will run after the DOM is fully loaded

let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('nav');

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = `-${navbar.offsetHeight}px`; // Use navbar height
    }
    prevScrollPos = currentScrollPos;
}
});

function changeImage() {
    var content = document.querySelector('.content');
    var currentBackground = content.style.backgroundImage;

    if (currentBackground.includes('backgroundlightoff.png')) {
        content.style.backgroundImage = 'url("images/backgroundlighton.png")';
    } else {
        content.style.backgroundImage = 'url("images/backgroundlightoff.png")';
    }
}


