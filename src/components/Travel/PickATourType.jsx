import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function PickATourType() {
	const { t } = useTranslation()

	useEffect(() => {
		(function ($) {
			"use strict";
			//Tour Types Carousel
			if ($('.tour-types-carousel').length) {
				$('.tour-types-carousel').slick({
					slidesToShow: 4,
					centerMode: false,
					slidesToScroll: 4,
					autoplay: true,
					infinite: true,
					dots: true,
					arrows: false,
					touchMove: true,
					touchThreshold: 4,
					autoplaySpeed: 5000,
					pauseOnHover: true,
					speed: 1000,
					prevArrow: "<div class='prev-btn'><i class='fa fa-angle-left'></span></div>",
					nextArrow: "<div class='next-btn'><i class='fa fa-angle-right'></span></div>",
					//cssEase:'linear',
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 4
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2
							}
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
					]
				});
			}

			//Testimonials Carousel
			if ($('.testimonial-carousel').length) {
				$('.testimonial-carousel').slick({
					slidesToShow: 3,
					centerMode: false,
					centerPadding: '24px',
					slidesToScroll: 3,
					autoplay: true,
					infinite: true,
					dots: true,
					arrows: false,
					touchMove: true,
					touchThreshold: 4,
					autoplaySpeed: 5000,
					pauseOnHover: true,
					speed: 1000,
					prevArrow: "<div class='prev-btn'><i class='fa fa-angle-left'></span></div>",
					nextArrow: "<div class='next-btn'><i class='fa fa-angle-right'></span></div>",
					//cssEase:'linear',
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
					]
				});
			}

			//Clients Carousel
			if ($('.clients-carousel').length) {
				$('.clients-carousel').slick({
					slidesToShow: 5,
					centerMode: false,
					centerPadding: '24px',
					slidesToScroll: 2,
					autoplay: true,
					infinite: true,
					dots: false,
					arrows: false,
					touchMove: true,
					touchThreshold: 5,
					autoplaySpeed: 5000,
					pauseOnHover: true,
					speed: 1000,
					prevArrow: "<div class='prev-btn'><i class='fa fa-angle-left'></span></div>",
					nextArrow: "<div class='next-btn'><i class='fa fa-angle-right'></span></div>",
					//cssEase:'linear',
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 5
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 3
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 2
							}
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 1
							}
						},
						{
							breakpoint: 480,
							settings: {
								slidesToShow: 1
							}
						}
					]
				});
			}

			//Insta Feed Carousel
			if ($('.insta-carousel').length) {
				$('.insta-carousel').slick({
					dots: true,
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 2,
					centerMode: false,
					variableWidth: true,
					dots: false,
					arrows: false,
					autoplaySpeed: 5000,
					pauseOnHover: true,
					speed: 500,
					prevArrow: "<div class='prev-btn'><i class='fa fa-angle-left'></span></div>",
					nextArrow: "<div class='next-btn'><i class='fa fa-angle-right'></span></div>",
					//cssEase:'linear'
				});
			}

		})(window.jQuery);


	}, [])

	return (
		<div>
			<section className="tour-types">
				<div className="bg-layer" style={{ backgroundImage: 'url(images/background/pattern-2.png)' }} />
				<div className="d-elem-2"><img src="images/resource/d-elem-3.png" alt="" /></div>
				<div className="auto-container">
					<div className="title-box centered wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="subtitle">{t("categories")}</div>
						<h2><span>{t("pick_a_tour")}</span></h2>
					</div>
					<div className="carousel-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="d-elem-1"><img src="images/resource/d-elem-2.png" alt="" /></div>
						<div className="tour-types-carousel">

							{/*Block*/}
							<div className="tour-type-block bg-blue">
								<div className="inner-box">
									<div className="icon-box">
										<div className="icon"><a href="#"><img src="images/resource/t-icon-4.png" alt="" /></a></div>
									</div>
									<h5><a >{t("adventure")}</a></h5>
									<a className="over-link" />
								</div>
							</div>

							{/*Block*/}
							<div className="tour-type-block bg-green">
								<div className="inner-box">
									<div className="icon-box">
										<div className="icon"><a href="#"><img src="images/resource/t-icon-5.png" alt="" /></a></div>
									</div>
									<h5><a href="#">{t("hiking")}</a></h5>
									<a className="over-link" />
								</div>
							</div>
							{/*Block*/}
							<div className="tour-type-block bg-yellow">
								<div className="inner-box">
									<div className="icon-box">
										<div className="icon"><a href="#"><img src="images/resource/t-icon-6.png" alt="" /></a></div>
									</div>
									<h5><a href="#">{t("roamance")}</a></h5>
									<a className="over-link" />
								</div>
							</div>
							{/*Block*/}
							<div className="tour-type-block bg-red">
								<div className="inner-box">
									<div className="icon-box">
										<div className="icon"><a href="#"><img src="images/resource/t-icon-7.png" alt="" /></a></div>
									</div>
									<h5><a href="#">{t("culture")}</a></h5>
									<a className="over-link" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


		</div>
	)
}
