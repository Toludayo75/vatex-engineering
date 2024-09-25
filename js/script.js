document.querySelector('.navbar-toggle').addEventListener
('click', () => document.querySelector(".nav-link")
.classList.toggle('show'));

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
//get current class
    const current = document.querySelector('.current');
//remove current class
    current.classList.remove('current');
//check for next slide
    if (current.nextElementSibling) {
        //add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        //add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}



const prevSlide = () => {
    //get current class
        const current = document.querySelector('.current');
    //remove current class
        current.classList.remove('current');
    //check for previous slide
        if (current.previousElementSibling) {
            //add current to next sibling
            current.previousElementSibling.classList.add('current');
        } else {
            //add current to last
            slides[slides.length - 1].classList.add('current');
        }
        setTimeout(() => current.classList.remove('current'));
    }

    //button events
    next.addEventListener('click', e => {
        nextSlide();
    });

    prev.addEventListener('click', e => {
        prevSlide();
    });