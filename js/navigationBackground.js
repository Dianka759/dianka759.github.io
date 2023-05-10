//  NAVIGATION BACKGROUND //
const navbar = document.querySelector('.top');

window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('backgroundRed'); 
    } else {
        navbar.classList.remove('backgroundRed');
    }
};
