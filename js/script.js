$(document).ready(function(){
    $('.slider__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 1000,
        fade: true,
        draggable: false,
        swipe: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        asNavFor: '.slider__nav'
    });
    $('.slider__nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider__for',
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 5000,
        draggable: false,
        swipe: false,
        speed: 1000,
        dots: false,
        pauseOnHover: true,
        pauseOnFocus: true,
    });
});

// $('.section').slick({
//     infinite: true,
//     dots: true,
//     speed: 1200,
//     arrows: false,
//     autoplay: true, 
//     autoplaySpeed: 5000,
//     slidesToShow: 1,
//     slidesToScroll:1,
//     // adaptiveHeight: true,
//     draggable: false,
//     swipe: false,
//     // touchThreshold: 10,
//     swipe: true,
//     variableWidth: false,
//     responsive: [
//       {
//           breakpoint: 850,
//           settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               infinite: true,
//               dots: true,
//           }
//       },
//   ]
// });