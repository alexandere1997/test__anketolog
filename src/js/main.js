import Swiper, { Navigation } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper/core';
import {Swiper as SwiperClass, Mousewheel} from 'swiper/core';

SwiperClass.use([Mousewheel]);
SwiperCore.use([Autoplay]);
Swiper.use([Navigation]);
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 7,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 4000
    },
    mousewheel: {
      releaseOnEdges: true,
    },
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1359: {
        slidesPerView: 7,
        spaceBetween: 30
      }
    }
  });
