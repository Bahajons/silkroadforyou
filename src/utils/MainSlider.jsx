import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Swiper from 'swiper';

export default function MainSlider() {

	const navigate = useNavigate()

	useEffect(() => {
		(function ($) {
			if ($('.banner-slider').length) {
				var swiper = new Swiper('.banner-slider', {
					autoplay: true,
					autoplaySpeed: 7000,
					effect: "fade",
					speed: 1000,
					margin: 0,
					slidesPerView: 1,
					spaceBetween: 0,
					loop: true,
					pagination: true,
					autoplay: {
						delay: 2000
					},
					navigation: {
						enabled: true,
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}
				});
			}
		})(window.jQuery);
	}, [])



	return (
		<div>
			{/* Banner Section */}
			<section className="banner-two">
				<div className="banner-container">
					<div className="banner-slider">
						<div className="swiper-wrapper">
							{/*Slide Item*/}
							<div className="swiper-slide slide-item">
								<div className="image-layer" style={{ backgroundImage: 'url(images/main-slider/main-slider1.webp)' }} />
								<div className="auto-container">
									<div className="content-box">
										<div className="content">
											<div className="clearfix">
												<div className="inner">
													<h1><span>Adventure<i className="s-text">Adventure</i></span></h1>
													<div className="text">Disover top places and enjoy extreme activities around the world with a cheap price.</div>
													<div className="links-box clearfix">
														<div className="link"><a onClick={() => navigate('/about')} className="theme-btn btn-style-two"><span>Explore Now</span></a></div>
														<div className="link"><a onClick={() => navigate('/about')} className="theme-btn btn-style-three"><span>About Us</span></a></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/*Slide Item*/}
							<div className="swiper-slide slide-item">
								<div className="image-layer" style={{ backgroundImage: 'url(images/main-slider/main-slider3.webp)' }} />
								<div className="auto-container">
									<div className="content-box">
										<div className="content">
											<div className="clearfix">
												<div className="inner">
													<h1><span>Culture<i className="s-text">Culture</i></span></h1>
													<div className="text">Disover top places and enjoy extreme activities around the world with a cheap price.</div>
													<div className="links-box clearfix">
														<div className="link"><a onClick={() => navigate('/about')} className="theme-btn btn-style-two"><span>Explore Now</span></a></div>
														<div className="link"><a onClick={() => navigate('/about')} className="theme-btn btn-style-three"><span>About Us</span></a></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/*Slide Item*/}
							<div className="swiper-slide slide-item">
								<div className="image-layer" style={{ backgroundImage: 'url(images/main-slider/main-slider2.webp)' }} />
								<div className="auto-container">
									<div className="content-box">
										<div className="content">
											<div className="clearfix">
												<div className="inner">
													<h1><span>Ancient monuments<i className="s-text">Ancient monuments</i></span></h1>
													<div className="text">Disover top places and enjoy extreme activities around the world with a cheap price.</div>
													<div className="links-box clearfix">
														<div className="link"><a onClick={() => navigate('/about')} className="theme-btn btn-style-two"><span>Explore Now</span></a></div>
														<div className="link"><a onClick={() => navigate('/about')} className="theme-btn btn-style-three"><span>About Us</span></a></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="swiper-button-prev"><span className="fa fa-angle-left" /></div>
						<div className="swiper-button-next"><span className="fa fa-angle-right" /></div>
					</div>
				</div>
			</section>
			{/*End Banner Section */}
		</div>
	)
}
