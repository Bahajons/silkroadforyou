import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Swiper from "swiper";
import $ from "jquery";
// import { Swiper, SwiperSlide } from 'swiper/react';

export default function MainSlider() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const style1 = {
	position:'relative',

  };
  const style2 = {
	position:'absolute',
	minHeight:'100%',
	minWidth:'100%'

  };

  useEffect(() => {
    (function ($) {
      if ($(".banner-slider").length) {
        const swiper = new Swiper(".banner-slider", {
          autoplay: true,
          autoplaySpeed: 7000,
          effect: "fade",
          speed: 1000,
          margin: 0,
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          pagination: true,
          navigate: true,
          autoplay: {
            delay: 1000,
          },
          navigation: {
            enabled: true,
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      }
    })(window.jQuery);
  }, []);

  function Sliders() {
    let a = [];
    for (let i = 0; i < parseInt(t(`slider_count`)); i++) {
      a.push(i);
    }
    console.log(a);

    return a.map((item, key) => (
      // <SwiperSlide>

      <div className="swiper-slide slide-item" key={key}>
        <div
          className="image-layer"
        //   style={{ backgroundClip: `url(${t(`slider.${item}.img`)})` }}
		style={style1}
        />
		<video src="./images/uzbekistan/slider.mp4" autoPlay={true} style={style2}></video>
        <div className="auto-container">
          <div className="content-box">
            <div className="content">
              <div className="clearfix">
                <div className="inner">
                  <h1>
                    <span>
                      {t(`slider.${item}.title`)}
                      <i className="s-text">{t(`slider.${item}.title`)}</i>
                    </span>
                  </h1>
                  <div className="text">{t(`slider.${item}.text`)}</div>
                  <div className="links-box clearfix">
                    <div className="link">
                      <a
                        onClick={() => navigate("/about")}
                        className="theme-btn btn-style-two"
                      >
                        <span>{t("explore_now")}</span>
                      </a>
                    </div>
                    <div className="link">
                      <a
                        onClick={() => navigate("/about")}
                        className="theme-btn btn-style-three"
                      >
                        <span>{t("about_us")}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // </SwiperSlide>
    ));
  }

  return (
    <div>
      {/* Banner Section */}
      <section className="banner-two">
        <div className="banner-container">
          <div className="banner-slider">
            <div className="swiper-wrapper">
              {/* <Swiper
								spaceBetween={50}
								slidesPerView={3}
								onSlideChange={() => console.log('slide change')}
								onSwiper={(swiper) => console.log(swiper)}
							> */}
              {/*Slide Item*/}
              <Sliders />
              {/* </Swiper> */}
              {/* <div className="swiper-slide slide-item">
								<div className="image-layer" style={{ backgroundImage: 'url(images/main-slider/main-slider1.webp)' }} />
								<div className="auto-container">
									<div className="content-box">
										<div className="content">
											<div className="clearfix">
												<div className="inner">
													<h1><span>{ }<i className="s-text">Adventure</i></span></h1>
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
							</div> */}
              {/*Slide Item*/}
              {/* <div className="swiper-slide slide-item">
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
							</div> */}
              {/*Slide Item*/}
              {/* <div className="swiper-slide slide-item">
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
							</div> */}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev">
              <span className="fa fa-angle-left" />
            </div>
            <div className="swiper-button-next">
              <span className="fa fa-angle-right" />
            </div>
          </div>
        </div>
      </section>
      {/*End Banner Section */}
    </div>
  );
}
