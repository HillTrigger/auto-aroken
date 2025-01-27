
// $(function() {
$(".header__rateyo").rateYo({
  rating: 4.5,
  spacing: "5px",
  numStars: 5,
  minValue: 0,
  maxValue: 5,
  normalFill: "rgb(215, 209, 199)",
  ratedFill: "orange",
  readOnly: false,
  starSvg: `<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3662 1.82936C13.5032 -0.255461 16.4968 -0.255466 17.6338 1.82936L19.9256 6.03174C20.3571 6.82292 21.1214 7.37822 22.0072 7.5441L26.7121 8.42517C29.0463 8.86228 29.9713 11.7093 28.3399 13.4349L25.0514 16.9132C24.4323 17.5681 24.1404 18.4666 24.2563 19.3603L24.8723 24.1072C25.1779 26.4621 22.756 28.2217 20.6107 27.2034L16.2865 25.1507C15.4724 24.7642 14.5276 24.7642 13.7135 25.1507L9.38927 27.2034C7.24399 28.2217 4.82214 26.4621 5.12772 24.1072L5.74367 19.3603C5.85964 18.4666 5.5677 17.5681 4.94858 16.9132L1.66009 13.4349C0.0286615 11.7093 0.953722 8.86228 3.28786 8.42517L7.99278 7.5441C8.87858 7.37822 9.64288 6.82293 10.0744 6.03174L12.3662 1.82936Z" fill="#FFB648"/>
<path d="M12.8052 2.06876C13.7527 0.331405 16.2473 0.331403 17.1948 2.06875L19.4867 6.27114C19.9901 7.19419 20.8818 7.84203 21.9152 8.03556L26.6201 8.91663C28.5652 9.28088 29.3361 11.6534 27.9766 13.0914L24.6881 16.5697C23.9658 17.3337 23.6252 18.3819 23.7605 19.4246L24.3764 24.1715C24.6311 26.134 22.6129 27.6003 20.8251 26.7517L16.5009 24.699C15.5511 24.2481 14.4489 24.2481 13.4991 24.699L9.17485 26.7517C7.38712 27.6003 5.36891 26.134 5.62356 24.1715L6.23951 19.4246C6.37481 18.3819 6.03421 17.3337 5.3119 16.5697L2.02342 13.0914C0.663894 11.6534 1.43478 9.28088 3.37989 8.91663L8.08482 8.03556C9.11824 7.84203 10.0099 7.19419 10.5133 6.27114L12.8052 2.06876Z" stroke="#E1E1E1" stroke-opacity="0.43"/>
</svg>`,
});

const element = document.querySelector(".jq-ry-rated-group"); // Замените на ваш селектор

const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const newWidth = entry.contentRect.width;
    // console.log(`${newWidth/180*5}`);
    let span = ($(".header__rate")[0].textContent = `${
      Math.floor((newWidth / 180) * 5 * 10) / 10
    }/5`);

    // console.log(span);
  }
});

resizeObserver.observe(element);
// });

let checkbox = $(".header__checkbox")[0];
let ratedgr = $(".jq-ry-rated-group")[0];

let containerEl = document.querySelector(".blog__main");

let mixer = mixitup(containerEl, {
  load: {
    sort: "published-date:desc",
  },
});

$(".reviews__content").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  // adaptiveHeight: false,
  // adaptiveWidth: false,
  arrows: false,
  slidesToScroll: 2,
  appendDots: $(".reviews__active-wrap"),
  draggable: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});

// Array.from($(".slick-dots button")).forEach((el) => {
//   el.textContent = "";
// });

$(".reviews__arrow-left").on("click", function (e) {
  e.preventDefault();
  $(".reviews__content").slick("slickPrev");
});

$(".reviews__arrow-right").on("click", function (e) {
  e.preventDefault();
  $(".reviews__content").slick("slickNext");
});

