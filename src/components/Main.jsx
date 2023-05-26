import React, { useEffect } from 'react'
import PickATourType from './Travel/PickATourType'
import TravelPackages from './Travel/TravelPackages'
import MainSlider from '../utils/MainSlider'
import { useTranslation } from 'react-i18next'
import Footer from './Footer'
import Loader from '../utils/Loader'
import { useNavigate } from 'react-router-dom'
import Email from './Email'

export default function Main() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  useEffect(() => {

    (function ($) {

      $(window).on('load', function () {
        // handlePreloader();
        // if ($('body.page-loaded').length) {
        //   $('body').addClass('page-done');
        // }
        enableDefaultMasonry();
      });

      enableDefaultMasonry();
      function enableDefaultMasonry() {
        if ($('.masonry-container').length) {

          var winDow = $(window);
          // Needed variables
          var $container = $('.masonry-container');

          $container.isotope({
            itemSelector: '.masonry-item',
            masonry: {
              columnWidth: 1
            },
            animationOptions: {
              duration: 500,
              easing: 'linear'
            }
          });
        }
      }
      //Hide Loading Box (Preloader)
      // function handlePreloader() {
      //   if ($('.loader-wrap').length) {
      //     $('.loader-wrap').delay(300).fadeOut(300);
      //   }
      // }
      //Fact Counter + Text Count
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

      //LightBox / Fancybox
      if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
          openEffect: 'fade',
          closeEffect: 'fade',
          helpers: {
            media: {}
          }
        });
      }
    })(window.jQuery);

  }, [])
  return (
    <div>
      <div>
        <div className="page-wrapper">
          {/* Preloader */}
          <Loader />
          {/* Preloader End */}
          <MainSlider />
          {/* Banner Section */}
          <section className="banner-section">
            <div className="banner-container">
              <div className="banner-arrow wow slideInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><img src="images/background/banner-arrow.png" alt="" /></div>
              <div className="auto-container">
                <div className="row clearfix">
                  <div className="left-col col-lg-6 col-md-12">
                    <div className="inner">
                      <div className="clearfix">
                        <div className="content">
                          <div className="bg-image"><img src="images/background/bg-gradient-1.png" alt="" /></div>
                          <h3>{t("start_travelling")}</h3>
                          <h1><i className="d-icon"><img src="images/resource/bde-1.png" alt="" /></i>{t("explore_main")}</h1>
                          <div className="text">{t("explore_text")}</div>
                          <div className="lower-text"><span>{t("many")}</span> {t("tour_pack")}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-col col-lg-6 col-md-12">
                    <div className="inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                      <div className="image-layer" style={{ backgroundImage: 'url(images/background/main-background.webp)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End Banner Section */}
          {/*Intro Section*/}
          <section className="intro-section">
            <div className="auto-container">
              <div className="row clearfix justify-content-center">
                {/*Block*/}
                <div className="intro-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="icon"><span><img src="images/resource/intro-1.png" alt="" /></span></div>
                    <h4>{t("most_popular_main")}</h4>
                    <div className="text">{t("most_popular_text")}</div>
                  </div>
                </div>
                {/*Block*/}
                <div className="intro-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="icon"><span><img src="images/resource/intro-2.png" alt="" /></span></div>
                    <h4>{t("budget_friendly_main")}</h4>
                    <div className="text">{t("budget_friendly_text")}</div>
                  </div>
                </div>
                {/*Block*/}
                <div className="intro-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="icon"><span><img src="images/resource/intro-3.png" alt="" /></span></div>
                    <h4>{t("satisfaction_main")}</h4>
                    <div className="text">{t("satisfaction_text")}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*About Us Section*/}
          <section className="about-section">
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
                    <div className="exp"><span className="count">3</span> {t('successful')} <br />{t('years')}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Packages Section*/}
          <TravelPackages />
          {/*Trending Destinations Section*/}
          <section className="destination-section">
            <div className="bg-grad-right"><img src="images/background/bg-gradient-3.png" alt="" /></div>
            <div className="bg-grad-left"><img src="images/background/bg-gradient-4.png" alt="" /></div>
            <div className="auto-container">
              <div className="title-box centered">
                <div className="subtitle">{t("discover")}</div>
                <h2><i className="bg-vector" /><span>{t("popular_destination")}</span></h2>
              </div>
              <div className="gallery-box">
                <div className="masonry-container row clearfix">
                  {/*Block*/}
                  <div className="dest-block-one masonry-item col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                      <div className="image-box"><a href="destination-single.html"><img src="images/uzbekistan/resource/gallery_uzbekistan_1_675x300.webp" alt="" /></a></div>
                      <div className="hvr-box">
                        <div className="hvr-inner">
                          <h4><a href="destination-single.html">{t("popular_country.0")}</a></h4>
                          {/* <div className="tour-count"><span>200 Tour Packages</span></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="dest-block-one masonry-item column-width col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                      <div className="image-box"><a href="destination-single.html"><img src="images/uzbekistan/resource/gallery_uzbekistan_2_325x300.webp" alt="" /></a></div>
                      <div className="hvr-box">
                        <div className="hvr-inner">
                          <h4><a href="destination-single.html">{t("popular_country.0")}</a></h4>
                          {/* <div className="tour-count"><span>200 Tour Packages</span></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="dest-block-one masonry-item column-width col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                      <div className="image-box"><a href="destination-single.html"><img src="images/uzbekistan/resource/gallery_uzbekistan_3_325x300.webp" alt="" /></a></div>
                      <div className="hvr-box">
                        <div className="hvr-inner">
                          <h4><a href="destination-single.html">{t("popular_country.0")}</a></h4>
                          {/* <div className="tour-count"><span>200 Tour Packages</span></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="dest-block-one masonry-item column-width col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                      <div className="image-box"><a href="destination-single.html"><img src="images/uzbekistan/resource/gallery_uzbekistan_4_325x300.webp" alt="" /></a></div>
                      <div className="hvr-box">
                        <div className="hvr-inner">
                          <h4><a href="destination-single.html">{t("popular_country.2")}</a></h4>
                          {/* <div className="tour-count"><span>200 Tour Packages</span></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="dest-block-one masonry-item col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <div className="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                      <div className="image-box"><a href="destination-single.html"><img src="images/uzbekistan/resource/gallery_tajikistan_2_675x300.webp" alt="" /></a></div>
                      <div className="hvr-box">
                        <div className="hvr-inner">
                          <h4><a href="destination-single.html">{t("popular_country.2")}</a></h4>
                          {/* <div className="tour-count"><span>200 Tour Packages</span></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="dest-block-one masonry-item column-width col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                      <div className="image-box"><a href="destination-single.html"><img src="images/uzbekistan/resource/gallery_kazakhstan_2_325x300.webp" alt="" /></a></div>
                      <div className="hvr-box">
                        <div className="hvr-inner">
                          <h4><a href="destination-single.html">{t("popular_country.3")}</a></h4>
                          {/* <div className="tour-count"><span>200 Tour Packages</span></div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Tour Types Section*/}
          <PickATourType />
          {/*Why Us Section*/}
          <section className="why-us">
            <div className="bg-grad-left"><img src="images/background/bg-gradient-6.png" alt="" /></div>
            <div className="bg-grad-right"><img src="images/background/bg-gradient-5.png" alt="" /></div>
            <div className="auto-container">
              <div className="row clearfix">
                {/*Text Col*/}
                <div className="text-col col-lg-7 col-md-12 col-sm-12">
                  <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                    <div className="d-elem-1"><img src="images/resource/d-elem-4.png" alt="" /></div>
                    <div className="title-box">
                      <div className="subtitle">{t("why_choose")}</div>
                      <h2><span>{t("we_let_your")}</span></h2>
                    </div>
                    <div className="features">
                      <div className="row clearfix">
                        <div className="f-block-two col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="icon"><img src="images/resource/f-icon-3.png" alt="" /></div>
                            <h4>{t("expert_travel_agent")}</h4>
                            <div className="text">{t("expert_travel_agent_text")}</div>
                          </div>
                        </div>
                        <div className="f-block-two col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="icon"><img src="images/resource/f-icon-4.png" alt="" /></div>
                            <h4>{t("easy_booking")}</h4>
                            <div className="text">{t("easy_booking_text")}</div>
                          </div>
                        </div>
                        <div className="f-block-two col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="icon"><img src="images/resource/f-icon-5.png" alt="" /></div>
                            <h4>{t("world_class")}</h4>
                            <div className="text">{t("world_class_text")}</div>
                          </div>
                        </div>
                        <div className="f-block-two col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="icon"><img src="images/resource/f-icon-6.png" alt="" /></div>
                            <h4>{t("total_secure")}</h4>
                            <div className="text">{t("total_secure_text")}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Image Col*/}
                <div className="image-col col-lg-5 col-md-12 col-sm-12">
                  <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                    <div className="d-elem-2"><img src="images/resource/d-elem-5.png" alt="" /></div>
                    <div className="image-box">
                      <img src="images/uzbekistan/resource/image_541x707.webp" alt="" />
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
          <section className="clients-section">
            <div className="auto-container">
              <div className="carousel-box">
                <div className="clients-carousel">
                  {/*Block*/}
                  <div className="client-block">
                    <div className="image"><a href="#"><img src="images/uzbekistan/resource/client-1.webp" alt="" /></a></div>
                  </div>
                  {/*Block*/}
                  <div className="client-block">
                    <div className="image"><a href="#"><img src="images/uzbekistan/resource/client-2.webp" alt="" /></a></div>
                  </div>
                  {/*Block*/}
                  <div className="client-block">
                    <div className="image"><a href="#"><img src="images/uzbekistan/resource/client-3.webp" alt="" /></a></div>
                  </div>
                  {/*Block*/}
                  <div className="client-block">
                    <div className="image"><a href="#"><img src="images/uzbekistan/resource/client-1.webp" alt="" /></a></div>
                  </div>
                  {/*Block*/}
                  <div className="client-block">
                    <div className="image"><a href="#"><img src="images/uzbekistan/resource/client-2.webp" alt="" /></a></div>
                  </div>
                  {/*Block*/}
                  <div className="client-block">
                    <div className="image"><a href="#"><img src="images/uzbekistan/resource/client-3.webp" alt="" /></a></div>
                  </div>
                  {/*Block*/}

                </div>
              </div>
            </div>
          </section>
          {/*News Section*/}
          <section className="news-section">
            <div className="auto-container">
              <div className="title-box centered">
                <div className="subtitle">{t('updates')}</div>
                <h2><span>{t("from_our_blog")}</span></h2>
              </div>
              <div className="news-box">
                <div className="bg-grad-left"><img src="images/background/bg-gradient-9.png" alt="" /></div>
                <div className="bg-grad-right"><img src="images/background/bg-gradient-10.png" alt="" /></div>
                <div className="masonry-container row clearfix">
                  {/*Block*/}
                  <div className="news-item masonry-item col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    {/*Block*/}
                    <div className="news-block-one">
                      <div className="inner-box">
                        <div className="image-layer" style={{ backgroundImage: 'url(images/uzbekistan/resource/image_1_648x544.webp)' }} />
                        <div className="over-box">
                          <ul className="info clearfix">
                            <li><a><i className="fa fa-folder" /> {t("adventure")}</a></li>
                            <li><a><i className="fa fa-clock" /> 06, 2022</a></li>
                            {/* <li><a><i className="fa fa-comments" /> 22</a></li> */}
                          </ul>
                          <h3><a href="blog-single.html">{t("amazing_adventure")}</a></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="news-item masonry-item col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="news-block-one m-height">
                      <div className="inner-box">
                        <div className="image-layer" style={{ backgroundImage: 'url(images/uzbekistan/resource/image_1_312x542.webp)' }} />
                        <div className="over-box">
                          <ul className="info clearfix">
                            <li><a href="#"><i className="fa fa-folder" /> {t("history")}</a></li>
                          </ul>
                          <h5><a href="blog-single.html">{t("great_human")}</a></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="news-item masonry-item col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="news-block-one sm-height">
                      <div className="inner-box">
                        <div className="image-layer" style={{ backgroundImage: 'url(images/uzbekistan/resource/image_1_312x260.webp)' }} />
                        <div className="over-box">
                          <ul className="info clearfix">
                            <li><a ><i className="fa fa-folder" />{t("history")}</a></li>
                          </ul>
                          <h5><a >{t("rich_history")}</a></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="news-item masonry-item col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="news-block-one sm-height">
                      <div className="inner-box">
                        <div className="image-layer" style={{ backgroundImage: 'url(images/uzbekistan/resource/image_2_312x260.webp)' }} />
                        <div className="over-box">
                          <ul className="info clearfix">
                            <li><a href="#"><i className="fa fa-folder" /> {t("culture")}</a></li>
                          </ul>
                          <h5><a href="blog-single.html">{t("national_culture")}</a></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Insta Feed Section*/}
          <section className="insta-section">
            {/*Feed Row*/}
            <div className="insta-feed">
              <div className="carousel-container">
                <div className="carousel-box">
                  <div className="insta-carousel">
                    {/*Block*/}
                    <div className="insta-block">
                      <div className="image">
                        <span className="img"><a href="images/uzbekistan/blog/image_1_374x292.webp" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/uzbekistan/blog/image_1_374x292.webp" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block s-h">
                      <div className="image">
                        <span className="img"><a href="images/uzbekistan/blog/image_2_166x166.webp" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/uzbekistan/blog/image_2_166x166.webp" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block m-h">
                      <div className="image">
                        <span className="img"><a href="images/uzbekistan/blog/image_3_258x255.webp" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/uzbekistan/blog/image_3_258x255.webp" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block s-h">
                      <div className="image">
                        <span className="img"><a href="images/uzbekistan/blog/image_4_262x166.webp" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/uzbekistan/blog/image_4_262x166.webp" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block">
                      <div className="image">
                        <span className="img"><a href="images/uzbekistan/blog/image_5_430x292.webp" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/uzbekistan/blog/image_5_430x292.webp" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block xs-h">
                      <div className="image">
                        <span className="img"><a href="images/uzbekistan/blog/image_6_112x112.webp" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/uzbekistan/blog/image_6_112x112.webp" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block s-h">
                      <div className="image">
                        <span className="img"><a href="images/uzbekistan/blog/image_7_166x166.webp" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/uzbekistan/blog/image_7_166x166.webp" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block">
                      <div className="image">
                        <span className="img"><a href="images/uzbekistan/blog/image_8_350x298.webp" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/uzbekistan/blog/image_8_350x298.webp" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block s-h">
                      <div className="image">
                        <span className="img"><a href="images/uzbekistan/blog/image_9_270x187.webp" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/uzbekistan/blog/image_9_270x187.webp" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block m-h">
                      <div className="image">
                        <span className="img"><a href="images/uzbekistan/blog/image_10_236x236.webp" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/uzbekistan/blog/image_10_236x236.webp" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block s-h">
                      <div className="image">
                        <span className="img"><a href="images/uzbekistan/blog/image_11_166x166.webp" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/uzbekistan/blog/image_11_166x166.webp" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block">
                      <div className="image">
                        <span className="img"><a href="images/uzbekistan/blog/image_12_284x298.webp" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/uzbekistan/blog/image_12_284x298.webp" alt="" /></a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Feed Row*/}
            <div className="insta-feed alternate d-none">
              <div className="carousel-container">
                <div className="carousel-box">
                  <div className="insta-carousel">
                    {/*Block*/}
                    <div className="insta-block s-h">
                      <div className="image">
                        <span className="img"><a href="images/resource/insta-7.jpg" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/resource/insta-7.jpg" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block">
                      <div className="image">
                        <span className="img"><a href="images/resource/insta-8.jpg" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/resource/insta-8.jpg" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block s-h">
                      <div className="image">
                        <span className="img"><a href="images/resource/insta-9.jpg" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/resource/insta-9.jpg" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block m-h">
                      <div className="image">
                        <span className="img"><a href="images/resource/insta-10.jpg" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/resource/insta-10.jpg" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block s-h">
                      <div className="image">
                        <span className="img"><a href="images/resource/insta-11.jpg" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/resource/insta-11.jpg" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block">
                      <div className="image">
                        <span className="img"><a href="images/resource/insta-12.jpg" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/resource/insta-12.jpg" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block">
                      <div className="image">
                        <span className="img"><a href="images/resource/insta-1.jpg" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/resource/insta-1.jpg" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block s-h">
                      <div className="image">
                        <span className="img"><a href="images/resource/insta-2.jpg" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/resource/insta-2.jpg" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block m-h">
                      <div className="image">
                        <span className="img"><a href="images/resource/insta-3.jpg" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/resource/insta-3.jpg" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block s-h">
                      <div className="image">
                        <span className="img"><a href="images/resource/insta-4.jpg" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/resource/insta-4.jpg" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block">
                      <div className="image">
                        <span className="img"><a href="images/resource/insta-5.jpg" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/resource/insta-5.jpg" alt="" /></a></span>
                      </div>
                    </div>
                    {/*Block*/}
                    <div className="insta-block xs-h">
                      <div className="image">
                        <span className="img"><a href="images/resource/insta-6.jpg" className="lightbox-image" data-fancybox="insta-gallery"><img src="images/resource/insta-6.jpg" alt="" /></a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Subscribe Section*/}
          <Email />
          <Footer />
        </div>
        {/*End pagewrapper*/}
        {/*Scroll to top*/}
        <div className="scroll-to-top scroll-to-target" data-target="html"><span className="icon"><img src="images/icons/arrow-up.svg" alt="" title="Go To Top" /></span></div>
      </div>
    </div>
  )
}
