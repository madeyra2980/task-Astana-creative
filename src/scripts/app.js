document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.gallery__items');
  const slides = document.querySelectorAll('.items');
  const totalSlides = slides.length;
  let currentIndex = 0;

  const showSlide = (index) => {
    if (index >= 0 && index < totalSlides) {
      const translateValue = -index * 100 + '%';
      slider.style.transform = 'translateX(' + translateValue + ')';
      currentIndex = index;
    }
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % totalSlides;
    showSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(newIndex);
  };

  const rightBtn = document.querySelector('.right__btn');
  const leftBtn = document.querySelector('.left__btn');

  rightBtn.addEventListener('click', nextSlide);
  leftBtn.addEventListener('click', prevSlide);

  slider.appendChild(slides[0].cloneNode(true));
  slider.prepend(slides[totalSlides - 1].cloneNode(true));
  showSlide(1); 
});
