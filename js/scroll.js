var scroll = document.querySelector('.fa-arrow-alt-circle-down');

scroll.addEventListener('click', () => {

    window.scrollTo(0, 1000);
    window.style.transition = '3s';
});