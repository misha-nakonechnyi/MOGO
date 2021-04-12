$(document).ready(function () {
  $('.spoiler__title').click(function (event) {
      if ($('.what__body').hasClass('one')) {
        $('.spoiler__title').not($(this)).removeClass('active');
        $('.spoiler__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
  });
  $('.slider').slick({
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000
  });
  $('.header__burger').click(function(event) {
		$('.header__burger,.header__menu,.fullscreen__header').toggleClass('active');
		$('body').toggleClass('lock');
	});
});




// Прокрутка при клике
const menuLinks = document.querySelectorAll('.h__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e){
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__body').offsetHeight +1;

      const iconMenu = document.querySelector('.header__burger');
      const menuBody = document.querySelector('.header__menu');
      const fullHead = document.querySelector('.fullscreen__header');

      if (iconMenu.classList.contains('active')) {
        document.body.classList.remove('lock');
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
        fullHead.classList.remove('active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

const headTop = document.querySelector('.fullscreen').offsetHeight - document.querySelector('.fullscreen__header').offsetHeight;
$(document).scroll(function(e) {
  if($(window).scrollTop() > headTop) {
    $('.fullscreen__header').addClass('fixed');
  }
  else{
    $('.fullscreen__header').removeClass('fixed');
  }
});