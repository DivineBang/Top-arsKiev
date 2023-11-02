$(document).ready(function(){
    $('.center').slick({
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 1500,
      centerPadding: '10px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 993,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 3
          }
        },
        
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 577,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '5px',
            slidesToShow: 2
          }
          
        },
        {
          breakpoint: 450,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
          }
          
        }
        
      ]
    });
  });


//preloader
$(document).ready(function() {
  $('#preloader').fadeOut(400);
});  

//Прокрут до секции 
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu__item_a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = link.getAttribute('href'); // Получаем атрибут href ссылки
            const targetSection = document.querySelector(targetId); // Находим соответствующую секцию по ID

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Прокручиваем к секции плавно
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const downButton = document.querySelector('.btn__down');

    downButton.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = downButton.getAttribute('href'); // Получаем атрибут href кнопки
        const targetSection = document.querySelector(targetId); // Находим соответствующую секцию по ID

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Прокручиваем к секции плавно
        }
    });
});

//burger

$(document).ready(function(){
    $('.header__menu').click(function(event){
      $('.menu').toggleClass('active__menu');
  
    });
  
  });
  $(document).ready(function(){
    $('.header__menu').click(function(event){
      var menuImage = $('.burger__img');
      
      if (menuImage.attr('src') === 'assets/img/burger.png') {
          menuImage.attr('src', 'assets/img/close_burger.png');
      } else {
          menuImage.attr('src', 'assets/img/burger.png');
      }
    });
  });