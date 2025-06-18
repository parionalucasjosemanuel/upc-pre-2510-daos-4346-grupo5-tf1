let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-image');
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

setInterval(() => {
  nextSlide();
}, 5000);

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);

  const form = document.getElementById("supportForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    alert("Thank you for your message. It will be sent to our email: tuchambamascerca@gmail.com");
  });
});
