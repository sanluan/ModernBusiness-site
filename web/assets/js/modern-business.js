/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// 首页焦点图片
var focusElement = document.querySelector('.index-focus');
if(focusElement){
	const focusSwiper = new Swiper('.index-focus', {
	  loop: true,
	  pagination: {
		el: '.index-focus .swiper-pagination',
	  }
	});
}
// 首页客户评价
var customerElement = document.querySelector('.customer-testimonials');
if(customerElement){
	const customerSwiper = new Swiper('.customer-testimonials', {
	  loop: true,
	  pagination: {
		el: '.customer-testimonials .swiper-pagination',
	  }
	});
}
// 图集页面
var picturesElement = document.querySelector('.pictures');
if(picturesElement){
	var thumbswiper = new Swiper(".thumbs", {
		loop:true,
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true
	});
	var pictures = new Swiper(".pictures", {
		loop:true,
		autoHight:true,
		navigation: {
			nextEl: ".pictures .swiper-button-next",
			prevEl: ".pictures .swiper-button-prev",
		},
		thumbs: {
			swiper: thumbswiper
		}
	});
}