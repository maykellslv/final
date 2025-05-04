document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
      interval: 1000, // 2 seconds
      wrap: true      // Whether to cycle continuously
    });
  });