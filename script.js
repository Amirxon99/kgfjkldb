const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  // Slayd o'zgarganda fon rangini yangilash
  swiper.on('slideChange', () => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    console.log(activeSlide);
    
    // if (activeSlide.classList.contains('red')) {
    //   document.body.style.backgroundColor = 'red';
    // } else if (activeSlide.classList.contains('green')) {
    //   document.body.style.backgroundColor = 'green';
    // } else if (activeSlide.classList.contains('blue')) {
    //   document.body.style.backgroundColor = 'blue';
    // }
  });