var scroll = document.querySelector('.fa-arrow-alt-circle-down');
var about = document.querySelector('.about-me');

scroll.addEventListener('click', () => {

    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': about.offsetTop
    });
});