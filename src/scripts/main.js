'use strict';

const carousel = document.querySelector('.benefits__carousel');
const tracker = document.querySelector('.benefits__track');

let startPoint = 0;
let currentPoint = 0;
let isDragging = false;

const itemWidth = 260;
let activeItem = 0;

carousel.addEventListener('pointerdown', (event) => {
  if (window.screen.width > 640) {
    return;
  }

  startPoint = event.clientX;
  currentPoint = startPoint;
  isDragging = true;
});

carousel.addEventListener('pointermove', (event) => {
  if (!isDragging) {
    return;
  }

  currentPoint = event.clientX;

  const distance = currentPoint - startPoint;

  tracker.style.transform = `translateX(${-(activeItem * itemWidth) + distance}px)`;
});

carousel.addEventListener('pointerup', (event) => {
  if (!isDragging) {
    return;
  }

  const distance = currentPoint - startPoint;

  if (distance < -100 && activeItem < 3) {
    activeItem++;
  } else if (distance > 100 && activeItem > 0) {
    activeItem--;
  }

  tracker.style.transform = `translateX(-${activeItem * itemWidth}px)`;
  isDragging = false;
});

const arrowLeft = document.querySelector('.icon__arrow--left');
const arrowRight = document.querySelector('.icon__arrow--right');
const slide = document.querySelector('.features__slide');
const amount = document.querySelector('.feature__current');

let currentSlide = 0;

arrowRight.addEventListener('click', () => {
  if (currentSlide === 2) {
    return;
  }

  currentSlide++;

  slide.style.transform = `translateX(-${currentSlide * 260 + currentSlide * 20}px)`;
  amount.textContent = `0${currentSlide + 1}`;
});

arrowLeft.addEventListener('click', () => {
  if (currentSlide === 0) {
    return;
  }

  currentSlide--;

  slide.style.transform = `translateX(-${currentSlide * 260 + currentSlide * 20}px)`;
  amount.textContent = `0${currentSlide + 1}`;
});

const en = document.querySelector('.lang__en');
const ua = document.querySelector('.lang__ua');

en.addEventListener('click', () => {
  ua.style.color = '#828282';
  en.style.color = '#333';
});

ua.addEventListener('click', () => {
  en.style.color = '#828282';
  ua.style.color = '#333';
});
