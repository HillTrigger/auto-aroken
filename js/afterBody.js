let body = document.querySelector('.overflow');
body.classList.remove('overflow');

function burger() {
  document.querySelector('.header__nav').classList.toggle('header__burger--open');
  document.querySelector('.header__burger').classList.toggle('header__burger--white');
  body.classList.toggle('overflow'); 
}

document
  .querySelector(".questions__content")
  .addEventListener("click", function (e) {
    if (e.target.tagName == "BUTTON") {
      e.target.classList.toggle("questions__box-turn--on");
      e.target.parentElement.classList.toggle("questions__box--open");
      // burger();
    }
  });

  // header__burger--open header__burger--white
  $('.header__burger').on('click', burger);

  $(document).ready(function() {
    $("a.scrollto").click(function () {
      elementClick = $(this).attr("href")
      destination = $(elementClick).offset().top;
      $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
      burger();
      return false;
    });
  });
  