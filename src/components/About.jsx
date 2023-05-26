import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Loader from '../utils/Loader'

export default function About() {
	const { t } = useTranslation()
	const navigate = useNavigate()
	useEffect(() => {
		(function ($) {
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

			if ($('.count-box').length) {
				$('.count-box').appear(function () {

					var $t = $(this),
						n = $t.find(".count-text").attr("data-stop"),
						r = parseInt($t.find(".count-text").attr("data-speed"), 10);

					if (!$t.hasClass("counted")) {
						$t.addClass("counted");
						$({
							countNum: $t.find(".count-text").text()
						}).animate({
							countNum: n
						}, {
							duration: r,
							easing: "linear",
							step: function () {
								$t.find(".count-text").text(Math.floor(this.countNum));
							},
							complete: function () {
								$t.find(".count-text").text(this.countNum);
							}
						});
					}

				}, { accY: 0 });
			}

		})(window.jQuery);
	}, [])





	return (
		<div>
			{/* Banner Section */}
			<Loader />
			<section className="inner-banner">
				<div className="image-layer" style={{ backgroundImage: 'url(images/uzbekistan/about_main.webp)' }} />
				<div className="auto-container">
					<div className="content-box">
						<h1>{t("about_us")}</h1>
						<div className="bread-crumb">
							<ul className="clearfix">
								<li><a href="index.html">{t("home")}</a></li>
								<li className="current">{t("about_us")}</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			{/*End Banner Section */}
			{/*About Us Section*/}
			<section className="about-section alternate">
				<div className="bg-grad-right"><img src="images/background/bg-gradient-2.png" alt="" /></div>
				<div className="auto-container">
					<div className="row clearfix">
						{/*Text Col*/}
						<div className="text-col col-lg-6 col-md-12 col-sm-12">
							<div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
								<div className="d-elem-1"><img src="images/resource/d-elem-1.png" alt="" /></div>
								<div className="title-box">
									<div className="subtitle">{t("lets_explore")}</div>
									<h2><span>{t("we_make")}</span></h2>
									<div className="text">{t("we_make_text")}</div>
								</div>
								<div className="features">
									<div className="row clearfix">
										<div className="f-block col-lg-6 col-md-6 col-sm-12">
											<div className="inner-box">
												<div className="icon"><img src="images/resource/f-icon-1.png" alt="" /></div>
												<h6>{t("award")}</h6>
											</div>
										</div>
										<div className="f-block col-lg-6 col-md-6 col-sm-12">
											<div className="inner-box">
												<div className="icon"><img src="images/resource/f-icon-2.png" alt="" /></div>
												<h6>{t("most_popular_booking")}</h6>
											</div>
										</div>
									</div>
								</div>
								<div className="lower-text">
									<div className="text">
										<ul>
											<li>{t("we_offer1")}</li>
											<li>{t("we_offer2")}</li>
											<li>{t("we_offer3")}</li>
										</ul>
									</div>
									<div className="link-box"><a onClick={() => navigate('/about')} className="theme-btn btn-style-one"><span>{t("read_more")}</span></a></div>
								</div>
							</div>
						</div>
						{/*Image Col*/}
						<div className="image-col col-lg-6 col-md-12 col-sm-12">
							<div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
								<div className="bg-grad-left"><img src="images/background/bg-gradient-26.png" alt="" /></div>
								<div className="d-elem-1"><img src="images/resource/d-elem-16.png" alt="" /></div>
								<div className="d-elem-2"><img src="images/resource/d-elem-17.png" alt="" /></div>
								<div className="image-box clearfix">
									<div className="image"><img src="images/resource/image-56.webp" alt="" /></div>
									<div className="image"><img src="images/resource/image-55.webp" alt="" /></div>
								</div>
								<div className="exp"><span className="count">3</span>{t("successful")}<br />{t("years")}</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*Intro Section*/}
			<section className="intro-two">
				<div className="auto-container">
					<div className="row clearfix">
						{/*Block*/}
						<div className="intro-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
							<div className="inner-box">
								<div className="icon"><span><img src="images/resource/intro-4.png" alt="" /></span></div>
								<h4>{t('our_mission')}</h4>
								<div className="text">{t("our_mission_text")}</div>
							</div>
						</div>
						{/*Block*/}
						<div className="intro-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
							<div className="inner-box">
								<div className="icon"><span><img src="images/resource/intro-5.png" alt="" /></span></div>
								<h4>{t("our_vision")}</h4>
								<div className="text">{t("our_vision_text")}</div>
							</div>
						</div>
						{/*Block*/}
						<div className="intro-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
							<div className="inner-box">
								<div className="icon"><span><img src="images/resource/intro-6.png" alt="" /></span></div>
								<h4>{t("our_value")}</h4>
								<div className="text">{t("our_value_text")}</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*Our Speciality Section*/}
			<section className="our-speciality">
				<div className="auto-container">
					<div className="outer-box">
						<div className="bg-grad-left"><img src="images/background/bg-gradient-23.png" alt="" /></div>
						<div className="row clearfix">
							{/*Text Col*/}
							<div className="title-col col-lg-5 col-md-12 col-sm-12">
								<div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
									<div className="d-elem-1"><img src="images/resource/d-elem-14.png" alt="" /></div>
									<div className="title-box">
										<div className="subtitle">{t("our_speciality")}</div>
										<h2><span>{t("your_tasted")}</span></h2>
										<div className="text">{t("your_tasted_text")}</div>
									</div>
								</div>
							</div>
							{/*Content Col*/}
							<div className="content-col col-lg-7 col-md-12 col-sm-12">
								<div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
									<div className="features">
										<div className="row clearfix">
											<div className="feature col-lg-6 col-md-6 col-sm-12">
												<div className="inner-box">
													<div className="icon"><img src="images/resource/f-icon-10.png" alt="" /></div>
													<h4>{t("innvative_tour")}</h4>
													<div className="text">{t("innvative_tour_text")}</div>
												</div>
											</div>
											<div className="feature col-lg-6 col-md-6 col-sm-12">
												<div className="inner-box">
													<div className="icon"><img src="images/resource/f-icon-11.png" alt="" /></div>
													<h4>{t("expert_travel")}</h4>
													<div className="text"> {t("expert_travel_text")} </div>
												</div>
											</div>
											<div className="feature col-lg-6 col-md-6 col-sm-12">
												<div className="inner-box">
													<div className="icon"><img src="images/resource/f-icon-12.png" alt="" /></div>
													<h4>{t("flexible_payment")}</h4>
													<div className="text">{t("flexible_payment_text")}</div>
												</div>
											</div>
											<div className="feature col-lg-6 col-md-6 col-sm-12">
												<div className="inner-box">
													<div className="icon"><img src="images/resource/f-icon-13.png" alt="" /></div>
													<h4>{t("high_quality")}</h4>
													<div className="text">{t("high_quality_text")}</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*Facts Section*/}
			<section className="facts-section alt-padding">
				<div className="auto-container">
					<div className="fact-counter">
						<div className="row clearfix" >
							<div className="fact-block col-lg-3 col-md-6 col-sm-12">
								<div className="inner clearfix">
									<div className="fact-count"><div className="count-box"><span className="count-text" data-stop={120} data-speed={2000}>0</span><i>+</i></div></div>
									<div className="fact-title">{t("total")}</div>
								</div>
							</div>
							<div className="fact-block col-lg-3 col-md-6 col-sm-12">
								<div className="inner clearfix">
									<div className="fact-count"><div className="count-box"><span className="count-text" data-stop={500} data-speed={3000}>0</span><i>+</i></div></div>
									<div className="fact-title">{t("travel_pac")}</div>
								</div>
							</div>
							<div className="fact-block col-lg-3 col-md-6 col-sm-12">
								<div className="inner clearfix">
									<div className="fact-count"><div className="count-box"><span className="count-text" data-stop={12} data-speed={2000}>0</span>K<i>+</i></div></div>
									<div className="fact-title">{t("total_trav")}</div>
								</div>
							</div>
							<div className="fact-block col-lg-3 col-md-6 col-sm-12">
								<div className="inner clearfix">
									<div className="fact-count"><div className="count-box"><span className="count-text" data-stop={7} data-speed={2000}>0</span>K<i>+</i></div></div>
									<div className="fact-title">{t("positive_rev")}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*Team Section*/}
			<section className="team-section d-none">
				<div className="auto-container">
					<div className="title-box centered wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="subtitle">Team Members</div>
						<h2><span>Our Amazing Team Players</span></h2>
					</div>
					<div className="team-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="bg-grad-left"><img src="images/background/bg-gradient-24.png" alt="" /></div>
						<div className="bg-grad-right"><img src="images/background/bg-gradient-25.png" alt="" /></div>
						<div className="d-elem-1"><img src="images/resource/d-elem-15.png" alt="" /></div>
						<div className="row clearfix justify-content-center">
							{/*Block*/}
							<div className="team-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
								<div className="inner-box clearfix">
									<div className="image-box">
										<div className="image"><a href="#"><img src="images/resource/team-1.jpg" alt="" /></a></div>
										<ul className="social-links clearfix">
											<li><a href="#" className="facebook"><i className="fab fa-facebook-f" /></a></li>
											<li><a href="#" className="twitter"><i className="fab fa-twitter" /></a></li>
											<li><a href="#" className="linkedin"><i className="fab fa-linkedin-in" /></a></li>
											<li><a href="#" className="youtube"><i className="fab fa-youtube" /></a></li>
										</ul>
									</div>
									<h4><a href="#">Paul Harrison</a></h4>
									<div className="designation">Founder &amp; CEO</div>
								</div>
							</div>
							{/*Block*/}
							<div className="team-block alt col-xl-3 col-lg-4 col-md-6 col-sm-12">
								<div className="inner-box clearfix">
									<div className="image-box">
										<div className="image"><a href="#"><img src="images/resource/team-2.jpg" alt="" /></a></div>
										<ul className="social-links clearfix">
											<li><a href="#" className="facebook"><i className="fab fa-facebook-f" /></a></li>
											<li><a href="#" className="twitter"><i className="fab fa-twitter" /></a></li>
											<li><a href="#" className="linkedin"><i className="fab fa-linkedin-in" /></a></li>
											<li><a href="#" className="youtube"><i className="fab fa-youtube" /></a></li>
										</ul>
									</div>
									<h4><a href="#">Johnson Doe</a></h4>
									<div className="designation">Founder &amp; CTO</div>
								</div>
							</div>
							{/*Block*/}
							<div className="team-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
								<div className="inner-box clearfix">
									<div className="image-box">
										<div className="image"><a href="#"><img src="images/resource/team-3.jpg" alt="" /></a></div>
										<ul className="social-links clearfix">
											<li><a href="#" className="facebook"><i className="fab fa-facebook-f" /></a></li>
											<li><a href="#" className="twitter"><i className="fab fa-twitter" /></a></li>
											<li><a href="#" className="linkedin"><i className="fab fa-linkedin-in" /></a></li>
											<li><a href="#" className="youtube"><i className="fab fa-youtube" /></a></li>
										</ul>
									</div>
									<h4><a href="#">Richard Parker</a></h4>
									<div className="designation">Manager</div>
								</div>
							</div>
							{/*Block*/}
							<div className="team-block alt col-xl-3 col-lg-4 col-md-6 col-sm-12">
								<div className="inner-box clearfix">
									<div className="image-box">
										<div className="image"><a href="#"><img src="images/resource/team-4.jpg" alt="" /></a></div>
										<ul className="social-links clearfix">
											<li><a href="#" className="facebook"><i className="fab fa-facebook-f" /></a></li>
											<li><a href="#" className="twitter"><i className="fab fa-twitter" /></a></li>
											<li><a href="#" className="linkedin"><i className="fab fa-linkedin-in" /></a></li>
											<li><a href="#" className="youtube"><i className="fab fa-youtube" /></a></li>
										</ul>
									</div>
									<h4><a href="#">Tom Anderson</a></h4>
									<div className="designation">Chief Agent</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/*Testimonials Section*/}
			<section className="testimonials-section">
            <div className="auto-container">
              <div className="title-box centered">
                <div className="subtitle">{t("testimonials")}</div>
                <h2><span>{t("what_tavelers")}</span></h2>
              </div>
              <div className="carousel-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="bg-grad-left"><img src="images/background/bg-gradient-8.png" alt="" /></div>
                <div className="bg-grad-right"><img src="images/background/bg-gradient-7.png" alt="" /></div>
                <div className="d-elem-1"><img src="images/resource/d-elem-6.png" alt="" /></div>
                <div className="testimonial-carousel">
                  {/*Block*/}

                  {Array(t("travellers_opinion.length")).fill(0).map((item, index) => (
                    <div className="testi-block-one" key={index}>
                      <div className="inner-box">
                        <div className="icon"><img src="images/icons/quote-icon-1.png" alt="" /></div>
                        <div className="text">{t(`travellers_opinion.${index}`)}</div>
                        {/* <div className="info">
                          <div className="image"><img src="images/resource/testi-1.jpg" alt="" /></div>
                          <div className="rating">
                            <div className="stars">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <div className="name">Jewel Khan</div>
                          <div className="designation">UI Designer</div>
                        </div> */}
                      </div>
                    </div>

                  ))}
                </div>
              </div>
            </div>
          </section>
			{/*Clients Section*/}
			<section className="clients-two d-none">
				<div className="auto-container">
					<div className="title-box centered">
						<div className="subtitle">Valuable Clients</div>
						<h2>Our Valuable Clients</h2>
					</div>
					<div className="carousel-box">
						<div className="clients-carousel">
							{/*Block*/}
							<div className="client-block">
								<div className="image"><a href="#"><img src="images/resource/client-6.png" alt="" /></a></div>
							</div>
							{/*Block*/}
							<div className="client-block">
								<div className="image"><a href="#"><img src="images/resource/client-7.png" alt="" /></a></div>
							</div>
							{/*Block*/}
							<div className="client-block">
								<div className="image"><a href="#"><img src="images/resource/client-8.png" alt="" /></a></div>
							</div>
							{/*Block*/}
							<div className="client-block">
								<div className="image"><a href="#"><img src="images/resource/client-9.png" alt="" /></a></div>
							</div>
							{/*Block*/}
							<div className="client-block">
								<div className="image"><a href="#"><img src="images/resource/client-10.png" alt="" /></a></div>
							</div>
							{/*Block*/}
							<div className="client-block">
								<div className="image"><a href="#"><img src="images/resource/client-6.png" alt="" /></a></div>
							</div>
							{/*Block*/}
							<div className="client-block">
								<div className="image"><a href="#"><img src="images/resource/client-7.png" alt="" /></a></div>
							</div>
							{/*Block*/}
							<div className="client-block">
								<div className="image"><a href="#"><img src="images/resource/client-8.png" alt="" /></a></div>
							</div>
							{/*Block*/}
							<div className="client-block">
								<div className="image"><a href="#"><img src="images/resource/client-9.png" alt="" /></a></div>
							</div>
							{/*Block*/}
							<div className="client-block">
								<div className="image"><a href="#"><img src="images/resource/client-10.png" alt="" /></a></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
