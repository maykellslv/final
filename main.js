/* for the carousel */
const track = document.querySelector('.carousel-track');
                track.innerHTML += track.innerHTML; // duplicate for infinite loop
                track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
                track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');

/* for the date */
document.addEventListener('DOMContentLoaded', function() {

    const calendarDays = document.querySelectorAll('.calendar-day');
    const availableDates = [3, 5, 8, 12, 15, 18, 22, 25, 28]; // example available dates
    let selectedDate = null;

    calendarDays.forEach(day => {
      const dayNumber = parseInt(day.textContent);
      if (availableDates.includes(dayNumber)) {
        day.classList.add('available');
        day.addEventListener('click', () => {
          if (selectedDate) {
            selectedDate.classList.remove('selected');
          }
          day.classList.add('selected');
          selectedDate = day;
          alert('You selected date: ' + dayNumber);
        });
      } else {
        day.classList.add('unavailable');
      }
    });
  });

/* for the hide header */
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    header.classList.add('hide');
  } else {
    // Scrolling up
    header.classList.remove('hide');
  }
  lastScrollY = window.scrollY;
});


const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // Optional: reveal once
    }
  });
}, { threshold: 0.1 });

reveals.forEach(reveal => {
  observer.observe(reveal);
});