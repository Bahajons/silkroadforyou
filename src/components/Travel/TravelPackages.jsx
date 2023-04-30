import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function TravelPackages() {
	const { t } = useTranslation()
	const navigate = useNavigate()
	useEffect(() => {
		(function ($) {

			// "use strict";

			//Packages Carousel
			if ($('.packages-carousel').length) {
				$('.packages-carousel').slick({
					slidesToShow: 3,
					centerMode: false,
					slidesToScroll: 3,
					autoplay: true,
					infinite: true,
					dots: false,
					touchMove: true,
					touchThreshold: 3,
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
								slidesToShow: 2
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

			//Tour Types Carousel
			// if ($('.tour-types-carousel').length) {
			// 	$('.tour-types-carousel').slick({
			// 		slidesToShow: 4,
			// 		centerMode: false,
			// 		slidesToScroll: 4,
			// 		autoplay: true,
			// 		infinite: true,
			// 		dots: true,
			// 		arrows: false,
			// 		touchMove: true,
			// 		touchThreshold: 4,
			// 		autoplaySpeed: 5000,
			// 		pauseOnHover: true,
			// 		speed: 1000,
			// 		prevArrow: "<div class='prev-btn'><i class='fa fa-angle-left'></span></div>",
			// 		nextArrow: "<div class='next-btn'><i class='fa fa-angle-right'></span></div>",
			// 		//cssEase:'linear',
			// 		responsive: [
			// 			{
			// 				breakpoint: 1200,
			// 				settings: {
			// 					slidesToShow: 4
			// 				}
			// 			},
			// 			{
			// 				breakpoint: 992,
			// 				settings: {
			// 					slidesToShow: 2,
			// 					slidesToScroll: 2
			// 				}
			// 			},
			// 			{
			// 				breakpoint: 768,
			// 				settings: {
			// 					slidesToShow: 2,
			// 					slidesToScroll: 2
			// 				}
			// 			},
			// 			{
			// 				breakpoint: 600,
			// 				settings: {
			// 					slidesToShow: 1,
			// 					slidesToScroll: 1
			// 				}
			// 			},
			// 			{
			// 				breakpoint: 480,
			// 				settings: {
			// 					slidesToShow: 1,
			// 					slidesToScroll: 1
			// 				}
			// 			}
			// 		]
			// 	});
			// }



		})(window.jQuery);


	}, [])


	return (
		<div>
			<section className="packages-section">
				<div className="bg-layer" style={{ backgroundImage: 'url(images/background/pattern-1.png)' }} />
				<div className="auto-container">
					<div className="title-box">
						<div className="subtitle">Packages</div>
						<h2><span>Travel Packages</span></h2>
					</div>
					{/* <h1>{t(`packages.0.day`)} dsdsd</h1> */}
					<div className="carousel-box">
						<div className="packages-carousel">

							{/*Block*/}
							{['0', '1'].map((item, index) => (
								<div className="package-block" key={index}>
									<div className="inner-box">
										<div className="image-box">
											<div className="image"><a href="tour-single.html"><img src="images/uzbekistan/uzbekistan-bukhara.webp" alt="" /></a></div>
										</div>
										<div className="lower-box">
											<div className="p-icon"><span><img src="images/resource/t-icon-1.png" alt="" /></span></div>
											<div className="location">Maldives</div>
											<h5><a onClick={() => navigate(`traveldetail/${t(`packages.${item}.slug`)}`)}>{t(`packages.${item}.name`)}</a></h5>
											<div className="info clearfix">
												<div className="duration"><i className="fa fa-clock" /> {t(`packages.${item}.day`)} Days {t(`packages.${item}.night`)} Nights</div>
												<div className="persons"><i className="fa fa-user" /> 12</div>
											</div>
											<div className="bottom-box clearfix">
												<div className="rating"><a href="#" className="theme-btn"><i className="fa fa-star" /> <strong>4.8</strong>   <span className="count">3210 Reviews</span></a></div>
												<div className="price">Start from  <span className="amount">{t(`packages.${item}.price`)}</span></div>
											</div>
										</div>
									</div>
								</div>

							))}



							<div className="package-block">
								<div className="inner-box">
									<div className="image-box">
										<div className="image"><a href="tour-single.html"><img src="images/resource/image-1.jpg" alt="" /></a></div>
									</div>
									<div className="lower-box">
										<div className="p-icon"><span><img src="images/resource/t-icon-1.png" alt="" /></span></div>
										<div className="location">Maldives</div>
										<h5><a href="tour-single.html">Jim Morrison says when the musics over turn off the light</a></h5>
										<div className="info clearfix">
											<div className="duration"><i className="fa fa-clock" /> 5 Days 6 Nights</div>
											<div className="persons"><i className="fa fa-user" /> 12</div>
										</div>
										<div className="bottom-box clearfix">
											<div className="rating"><a href="#" className="theme-btn"><i className="fa fa-star" /> <strong>4.8</strong>   <span className="count">3210 Reviews</span></a></div>
											<div className="price">Start from  <span className="amount">$399</span></div>
										</div>
									</div>
								</div>
							</div>
							<div className="package-block">
								<div className="inner-box">
									<div className="image-box">
										<div className="image"><a href="tour-single.html"><img src="images/resource/image-1.jpg" alt="" /></a></div>
									</div>
									<div className="lower-box">
										<div className="p-icon"><span><img src="images/resource/t-icon-1.png" alt="" /></span></div>
										<div className="location">Maldives</div>
										<h5><a href="tour-single.html">Jim Morrison says when the musics over turn off the light</a></h5>
										<div className="info clearfix">
											<div className="duration"><i className="fa fa-clock" /> 5 Days 6 Nights</div>
											<div className="persons"><i className="fa fa-user" /> 12</div>
										</div>
										<div className="bottom-box clearfix">
											<div className="rating"><a href="#" className="theme-btn"><i className="fa fa-star" /> <strong>4.8</strong>   <span className="count">3210 Reviews</span></a></div>
											<div className="price">Start from  <span className="amount">$399</span></div>
										</div>
									</div>
								</div>
							</div>
							<div className="package-block">
								<div className="inner-box">
									<div className="image-box">
										<div className="image"><a href="tour-single.html"><img src="images/resource/image-1.jpg" alt="" /></a></div>
									</div>
									<div className="lower-box">
										<div className="p-icon"><span><img src="images/resource/t-icon-1.png" alt="" /></span></div>
										<div className="location">Maldives</div>
										<h5><a href="tour-single.html">Jim Morrison says when the musics over turn off the light</a></h5>
										<div className="info clearfix">
											<div className="duration"><i className="fa fa-clock" /> 5 Days 6 Nights</div>
											<div className="persons"><i className="fa fa-user" /> 12</div>
										</div>
										<div className="bottom-box clearfix">
											<div className="rating"><a href="#" className="theme-btn"><i className="fa fa-star" /> <strong>4.8</strong>   <span className="count">3210 Reviews</span></a></div>
											<div className="price">Start from <span className="amount">$399</span></div>
										</div>
									</div>
								</div>
							</div>
							<div className="package-block">
								<div className="inner-box">
									<div className="image-box">
										<div className="image"><a href="tour-single.html"><img src="images/resource/image-1.jpg" alt="" /></a></div>
									</div>
									<div className="lower-box">
										<div className="p-icon"><span><img src="images/resource/t-icon-1.png" alt="" /></span></div>
										<div className="location">Maldives</div>
										<h5><a href="tour-single.html">Jim Morrison says when the musics over turn off the light</a></h5>
										<div className="info clearfix">
											<div className="duration"><i className="fa fa-clock" /> 5 Days 6 Nights</div>
											<div className="persons"><i className="fa fa-user" /> 12</div>
										</div>
										<div className="bottom-box clearfix">
											<div className="rating"><a href="#" className="theme-btn"><i className="fa fa-star" /> <strong>4.8</strong>   <span className="count">3210 Reviews</span></a></div>
											<div className="price">Start from <span className="amount">$399</span></div>
										</div>
									</div>
								</div>
							</div>
							<div className="package-block">
								<div className="inner-box">
									<div className="image-box">
										<div className="image"><a href="tour-single.html"><img src="images/resource/image-1.jpg" alt="" /></a></div>
									</div>
									<div className="lower-box">
										<div className="p-icon"><span><img src="images/resource/t-icon-1.png" alt="" /></span></div>
										<div className="location">Maldives</div>
										<h5><a href="tour-single.html">Jim Morrison says when the musics over turn off the light</a></h5>
										<div className="info clearfix">
											<div className="duration"><i className="fa fa-clock" /> 5 Days 6 Nights</div>
											<div className="persons"><i className="fa fa-user" /> 12</div>
										</div>
										<div className="bottom-box clearfix">
											<div className="rating"><a href="#" className="theme-btn"><i className="fa fa-star" /> <strong>4.8</strong>   <span className="count">3210 Reviews</span></a></div>
											<div className="price">Start from <span className="amount">$399</span></div>
										</div>
									</div>
								</div>
							</div>
							<div className="package-block">
								<div className="inner-box">
									<div className="image-box">
										<div className="image"><a href="tour-single.html"><img src="images/resource/image-1.jpg" alt="" /></a></div>
									</div>
									<div className="lower-box">
										<div className="p-icon"><span><img src="images/resource/t-icon-1.png" alt="" /></span></div>
										<div className="location">Maldives</div>
										<h5><a href="tour-single.html">Jim Morrison says when the musics over turn off the light</a></h5>
										<div className="info clearfix">
											<div className="duration"><i className="fa fa-clock" /> 5 Days 6 Nights</div>
											<div className="persons"><i className="fa fa-user" /> 12</div>
										</div>
										<div className="bottom-box clearfix">
											<div className="rating"><a href="#" className="theme-btn"><i className="fa fa-star" /> <strong>4.8</strong>   <span className="count">3210 Reviews</span></a></div>
											<div className="price">Start from <span className="amount">$399</span></div>
										</div>
									</div>
								</div>
							</div>
							<div className="package-block">
								<div className="inner-box">
									<div className="image-box">
										<div className="image"><a href="tour-single.html"><img src="images/resource/image-1.jpg" alt="" /></a></div>
									</div>
									<div className="lower-box">
										<div className="p-icon"><span><img src="images/resource/t-icon-1.png" alt="" /></span></div>
										<div className="location">Maldives</div>
										<h5><a href="tour-single.html">Jim Morrison says when the musics over turn off the light</a></h5>
										<div className="info clearfix">
											<div className="duration"><i className="fa fa-clock" /> 5 Days 6 Nights</div>
											<div className="persons"><i className="fa fa-user" /> 12</div>
										</div>
										<div className="bottom-box clearfix">
											<div className="rating"><a href="#" className="theme-btn"><i className="fa fa-star" /> <strong>4.8</strong>   <span className="count">3210 Reviews</span></a></div>
											<div className="price">Start from  <span className="amount">$399</span></div>
										</div>
									</div>
								</div>
							</div>
							<div className="package-block">
								<div className="inner-box">
									<div className="image-box">
										<div className="image"><a href="tour-single.html"><img src="images/resource/image-1.jpg" alt="" /></a></div>
									</div>
									<div className="lower-box">
										<div className="p-icon"><span><img src="images/resource/t-icon-1.png" alt="" /></span></div>
										<div className="location">Maldives</div>
										<h5><a href="tour-single.html">Jim Morrison says when the musics over turn off the light</a></h5>
										<div className="info clearfix">
											<div className="duration"><i className="fa fa-clock" /> 5 Days 6 Nights</div>
											<div className="persons"><i className="fa fa-user" /> 12</div>
										</div>
										<div className="bottom-box clearfix">
											<div className="rating"><a href="#" className="theme-btn"><i className="fa fa-star" /> <strong>4.8</strong>   <span className="count">3210 Reviews</span></a></div>
											<div className="price">Start from  <span className="amount">$399</span></div>
										</div>
									</div>
								</div>
							</div>
							<div className="package-block">
								<div className="inner-box">
									<div className="image-box">
										<div className="image"><a href="tour-single.html"><img src="images/resource/image-1.jpg" alt="" /></a></div>
									</div>
									<div className="lower-box">
										<div className="p-icon"><span><img src="images/resource/t-icon-1.png" alt="" /></span></div>
										<div className="location">Maldives</div>
										<h5><a href="tour-single.html">Jim Morrison says when the musics over turn off the light</a></h5>
										<div className="info clearfix">
											<div className="duration"><i className="fa fa-clock" /> 5 Days 6 Nights</div>
											<div className="persons"><i className="fa fa-user" /> 12</div>
										</div>
										<div className="bottom-box clearfix">
											<div className="rating"><a href="#" className="theme-btn"><i className="fa fa-star" /> <strong>4.8</strong>   <span className="count">3210 Reviews</span></a></div>
											<div className="price">Start from  <span className="amount">$399</span></div>
										</div>
									</div>
								</div>
							</div>
							<div className="package-block">
								<div className="inner-box">
									<div className="image-box">
										<div className="image"><a href="tour-single.html"><img src="images/resource/image-1.jpg" alt="" /></a></div>
									</div>
									<div className="lower-box">
										<div className="p-icon"><span><img src="images/resource/t-icon-1.png" alt="" /></span></div>
										<div className="location">Maldives</div>
										<h5><a href="tour-single.html">Jim Morrison says when the musics over turn off the light</a></h5>
										<div className="info clearfix">
											<div className="duration"><i className="fa fa-clock" /> 5 Days 6 Nights</div>
											<div className="persons"><i className="fa fa-user" /> 12</div>
										</div>
										<div className="bottom-box clearfix">
											<div className="rating"><a href="#" className="theme-btn"><i className="fa fa-star" /> <strong>4.8</strong>   <span className="count">3210 Reviews</span></a></div>
											<div className="price">Start from  <span className="amount">$399</span></div>
										</div>
									</div>
								</div>
							</div>
							<div className="package-block">
								<div className="inner-box">
									<div className="image-box">
										<div className="image"><a href="tour-single.html"><img src="images/resource/image-1.jpg" alt="" /></a></div>
									</div>
									<div className="lower-box">
										<div className="p-icon"><span><img src="images/resource/t-icon-1.png" alt="" /></span></div>
										<div className="location">Maldives</div>
										<h5><a href="tour-single.html">Jim Morrison says when the musics over turn off the light</a></h5>
										<div className="info clearfix">
											<div className="duration"><i className="fa fa-clock" /> 5 Days 6 Nights</div>
											<div className="persons"><i className="fa fa-user" /> 12</div>
										</div>
										<div className="bottom-box clearfix">
											<div className="rating"><a href="#" className="theme-btn"><i className="fa fa-star" /> <strong>4.8</strong>   <span className="count">3210 Reviews</span></a></div>
											<div className="price">Start from  <span className="amount">$399</span></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section >
		</div >
	)
}
