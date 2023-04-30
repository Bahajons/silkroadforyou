import React from 'react'
import PickATourType from './Travel/PickATourType'
import TravelPackages from './Travel/TravelPackages'
import MainSlider from '../utils/MainSlider'
import { useTranslation } from 'react-i18next'
import Footer from './Footer'
import Loader from '../utils/Loader'

export default function Main() {
  const { t } = useTranslation()

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
                          <h3>Start Travelling Now</h3>
                          {/* <h3>{t("Start Travelling Now")}</h3> */}
                          <h1><i className="d-icon"><img src="images/resource/bde-1.png" alt="" /></i> Explore the Top Destination of Uzbekistan</h1>
                          <div className="text">Aliqua enim ad minim veniam, quis nostrut dolore magna aliqu inim veniam, quis nostrud.</div>

                          <div className="lower-text"><span>3200</span> tour packages waiting for you</div>
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
                    <h4>Most Popular Destination</h4>
                    <div className="text">Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud.</div>
                  </div>
                </div>
                {/*Block*/}
                <div className="intro-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="icon"><span><img src="images/resource/intro-2.png" alt="" /></span></div>
                    <h4>Budget Friendly Packages</h4>
                    <div className="text">Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud.</div>
                  </div>
                </div>
                {/*Block*/}
                <div className="intro-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="icon"><span><img src="images/resource/intro-3.png" alt="" /></span></div>
                    <h4>Satisfaction Guarranted</h4>
                    <div className="text">Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*About Us Section*/}
          <section className="about-section">
            <div className="bg-grad-right"><img src="images/background/bg-gradient-2.png" alt=""  /></div>
            <div className="auto-container">
              <div className="row clearfix">
                {/*Text Col*/}
                <div className="text-col col-lg-6 col-md-12 col-sm-12">
                  <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                    <div className="d-elem-1"><img src="images/resource/d-elem-1.png" alt="" /></div>
                    <div className="title-box">
                      <div className="subtitle">Let’s Explore the World</div>
                      <h2><span>We Make Your Travel More Enjoyable</span></h2>
                      <div className="text">Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud.</div>
                    </div>
                    <div className="features">
                      <div className="row clearfix">
                        <div className="f-block col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="icon"><img src="images/resource/f-icon-1.png" alt="" /></div>
                            <h6>Award winning tour &amp; travel arranger</h6>
                          </div>
                        </div>
                        <div className="f-block col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="icon"><img src="images/resource/f-icon-2.png" alt="" /></div>
                            <h6>Most popular booking solution provider</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lower-text">
                      <div className="text">
                        <ul>
                          <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa deserunt mollit anim id est laborum. </li>
                          <li>Excepteur sint occaecat cupidatat non proiden serunt mollit.</li>
                          <li>Keccaecat cupidatat non proiden serunt mollit.</li>
                        </ul>
                      </div>
                      <div className="link-box"><a href="about.html" className="theme-btn btn-style-one"><span>Read More</span></a></div>
                    </div>
                  </div>
                </div>
                {/*Image Col*/}
                <div className="image-col col-lg-6 col-md-12 col-sm-12">
                  <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                    <div className="bg-grad-left"><img src="images/background/bg-gradient-26.png" alt=""  /></div>
                    <div className="d-elem-1"><img src="images/resource/d-elem-16.png" alt="" /></div>
                    <div className="d-elem-2"><img src="images/resource/d-elem-17.png" alt="" /></div>
                    <div className="image-box clearfix">
                      <div className="image"><img src="images/resource/image-56.webp" alt=""  /></div>
                      <div className="image"><img src="images/resource/image-55.webp" alt=""  /></div>
                    </div>
                    <div className="exp"><span className="count">3</span> Successful <br />Years</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Packages Section*/}
          <TravelPackages />
          {/*Trending Destinations Section*/}
          <section className="destination-section">
            <div className="bg-grad-right"><img src="images/background/bg-gradient-3.png" alt=""  /></div>
            <div className="bg-grad-left"><img src="images/background/bg-gradient-4.png" alt=""  /></div>
            <div className="auto-container">
              <div className="title-box centered">
                <div className="subtitle">Discover</div>
                <h2><i className="bg-vector" /><span>Popular Destinations</span></h2>
              </div>
              <div className="gallery-box">
                <div className="masonry-container row clearfix">
                  {/*Block*/}
                  <div className="dest-block-one masonry-item col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                      <div className="image-box"><a href="destination-single.html"><img src="images/resource/gallery-1.jpg" alt="" /></a></div>
                      <div className="hvr-box">
                        <div className="hvr-inner">
                          <h4><a href="destination-single.html">New York</a></h4>
                          <div className="tour-count"><span>200 Tour Packages</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="dest-block-one masonry-item column-width col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                      <div className="image-box"><a href="destination-single.html"><img src="images/resource/gallery-2.jpg" alt="" /></a></div>
                      <div className="hvr-box">
                        <div className="hvr-inner">
                          <h4><a href="destination-single.html">Muscat</a></h4>
                          <div className="tour-count"><span>200 Tour Packages</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="dest-block-one masonry-item column-width col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                      <div className="image-box"><a href="destination-single.html"><img src="images/resource/gallery-3.jpg" alt="" /></a></div>
                      <div className="hvr-box">
                        <div className="hvr-inner">
                          <h4><a href="destination-single.html">London</a></h4>
                          <div className="tour-count"><span>200 Tour Packages</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="dest-block-one masonry-item column-width col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                      <div className="image-box"><a href="destination-single.html"><img src="images/resource/gallery-4.jpg" alt="" /></a></div>
                      <div className="hvr-box">
                        <div className="hvr-inner">
                          <h4><a href="destination-single.html">Sydney</a></h4>
                          <div className="tour-count"><span>200 Tour Packages</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="dest-block-one masonry-item col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <div className="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                      <div className="image-box"><a href="destination-single.html"><img src="images/resource/gallery-5.jpg" alt="" /></a></div>
                      <div className="hvr-box">
                        <div className="hvr-inner">
                          <h4><a href="destination-single.html">Rome</a></h4>
                          <div className="tour-count"><span>200 Tour Packages</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="dest-block-one masonry-item column-width col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                      <div className="image-box"><a href="destination-single.html"><img src="images/resource/gallery-6.jpg" alt="" /></a></div>
                      <div className="hvr-box">
                        <div className="hvr-inner">
                          <h4><a href="destination-single.html">Paris</a></h4>
                          <div className="tour-count"><span>200 Tour Packages</span></div>
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
            <div className="bg-grad-left"><img src="images/background/bg-gradient-6.png" alt=""  /></div>
            <div className="bg-grad-right"><img src="images/background/bg-gradient-5.png" alt=""  /></div>
            <div className="auto-container">
              <div className="row clearfix">
                {/*Text Col*/}
                <div className="text-col col-lg-7 col-md-12 col-sm-12">
                  <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                    <div className="d-elem-1"><img src="images/resource/d-elem-4.png" alt="" /></div>
                    <div className="title-box">
                      <div className="subtitle">Why Choose Travello</div>
                      <h2><span>We Let Your Sweet Memory Ever Unforgottable</span></h2>
                    </div>
                    <div className="features">
                      <div className="row clearfix">
                        <div className="f-block-two col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="icon"><img src="images/resource/f-icon-3.png" alt="" /></div>
                            <h4>Expert travel agent</h4>
                            <div className="text">Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore </div>
                          </div>
                        </div>
                        <div className="f-block-two col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="icon"><img src="images/resource/f-icon-4.png" alt="" /></div>
                            <h4>Easy Booking Options</h4>
                            <div className="text">Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore </div>
                          </div>
                        </div>
                        <div className="f-block-two col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="icon"><img src="images/resource/f-icon-5.png" alt="" /></div>
                            <h4>World Class Service</h4>
                            <div className="text">Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore </div>
                          </div>
                        </div>
                        <div className="f-block-two col-lg-6 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="icon"><img src="images/resource/f-icon-6.png" alt="" /></div>
                            <h4>Total Secured Travel</h4>
                            <div className="text">Sectetur adipisicing elised do eiusmod tempor incidid unt ut labore </div>
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
                      <img src="images/resource/why-image-1.png" alt=""  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Facts Section*/}
          <section className="facts-section">
            <div className="video-box wow fadeInUp">
              <div className="image-box">
                <img src="images/resource/image-5.jpg" alt=""  />
                <a href="https://www.youtube.com/watch?v=ZETY_l3GVQg&autoplay=1" className="lightbox-image vid-btn"><span className="icon fa fa-play"><i className="ripple" /></span></a>
              </div>
            </div>
            <div className="auto-container">
              <div className="fact-counter">
                <div className="row clearfix">
                  <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                    <div className="inner clearfix">
                      <div className="fact-count"><div className="count-box"><span className="count-text" data-stop={120} data-speed={2000}>0</span><i>+</i></div></div>
                      <div className="fact-title">Total <br />Destination</div>
                    </div>
                  </div>
                  <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                    <div className="inner clearfix">
                      <div className="fact-count"><div className="count-box"><span className="count-text" data-stop={500} data-speed={3000}>0</span><i>+</i></div></div>
                      <div className="fact-title">Travel <br />Packages</div>
                    </div>
                  </div>
                  <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                    <div className="inner clearfix">
                      <div className="fact-count"><div className="count-box"><span className="count-text" data-stop={12} data-speed={2000}>0</span>K<i>+</i></div></div>
                      <div className="fact-title">Total <br />Travelers</div>
                    </div>
                  </div>
                  <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                    <div className="inner clearfix">
                      <div className="fact-count"><div className="count-box"><span className="count-text" data-stop={7} data-speed={2000}>0</span>K<i>+</i></div></div>
                      <div className="fact-title">Positive <br />Review</div>
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
                <div className="subtitle">Testimonials</div>
                <h2><span>What Travelers Say</span></h2>
              </div>
              <div className="carousel-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="bg-grad-left"><img src="images/background/bg-gradient-8.png" alt=""  /></div>
                <div className="bg-grad-right"><img src="images/background/bg-gradient-7.png" alt=""  /></div>
                <div className="d-elem-1"><img src="images/resource/d-elem-6.png" alt="" /></div>
                <div className="testimonial-carousel">
                  {/*Block*/}
                  <div className="testi-block-one">
                    <div className="inner-box">
                      <div className="icon"><img src="images/icons/quote-icon-1.png" alt="" /></div>
                      <div className="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Pakhiye ure ja jare mukto danay.</div>
                      <div className="info">
                        <div className="image"><img src="images/resource/testi-1.jpg" alt="" /></div>
                        <div className="rating"><div className="stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div></div>
                        <div className="name">Jewel Khan</div>
                        <div className="designation">UI Designer</div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="testi-block-one">
                    <div className="inner-box">
                      <div className="icon"><img src="images/icons/quote-icon-1.png" alt="" /></div>
                      <div className="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Pakhiye ure ja jare mukto danay.</div>
                      <div className="info">
                        <div className="image"><img src="images/resource/testi-2.jpg" alt="" /></div>
                        <div className="rating"><div className="stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div></div>
                        <div className="name">Mike Anderson</div>
                        <div className="designation">Journalist</div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="testi-block-one">
                    <div className="inner-box">
                      <div className="icon"><img src="images/icons/quote-icon-1.png" alt="" /></div>
                      <div className="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Pakhiye ure ja jare mukto danay.</div>
                      <div className="info">
                        <div className="image"><img src="images/resource/testi-3.jpg" alt="" /></div>
                        <div className="rating"><div className="stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div></div>
                        <div className="name">Peter Parker</div>
                        <div className="designation">Photographer</div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="testi-block-one">
                    <div className="inner-box">
                      <div className="icon"><img src="images/icons/quote-icon-1.png" alt="" /></div>
                      <div className="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Pakhiye ure ja jare mukto danay.</div>
                      <div className="info">
                        <div className="image"><img src="images/resource/testi-1.jpg" alt="" /></div>
                        <div className="rating"><div className="stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div></div>
                        <div className="name">Jewel Khan</div>
                        <div className="designation">UI Designer</div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="testi-block-one">
                    <div className="inner-box">
                      <div className="icon"><img src="images/icons/quote-icon-1.png" alt="" /></div>
                      <div className="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Pakhiye ure ja jare mukto danay.</div>
                      <div className="info">
                        <div className="image"><img src="images/resource/testi-2.jpg" alt="" /></div>
                        <div className="rating"><div className="stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div></div>
                        <div className="name">Mike Anderson</div>
                        <div className="designation">Journalist</div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="testi-block-one">
                    <div className="inner-box">
                      <div className="icon"><img src="images/icons/quote-icon-1.png" alt="" /></div>
                      <div className="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Pakhiye ure ja jare mukto danay.</div>
                      <div className="info">
                        <div className="image"><img src="images/resource/testi-3.jpg" alt="" /></div>
                        <div className="rating"><div className="stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div></div>
                        <div className="name">Peter Parker</div>
                        <div className="designation">Photographer</div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="testi-block-one">
                    <div className="inner-box">
                      <div className="icon"><img src="images/icons/quote-icon-1.png" alt="" /></div>
                      <div className="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Pakhiye ure ja jare mukto danay.</div>
                      <div className="info">
                        <div className="image"><img src="images/resource/testi-1.jpg" alt="" /></div>
                        <div className="rating"><div className="stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div></div>
                        <div className="name">Jewel Khan</div>
                        <div className="designation">UI Designer</div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="testi-block-one">
                    <div className="inner-box">
                      <div className="icon"><img src="images/icons/quote-icon-1.png" alt="" /></div>
                      <div className="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Pakhiye ure ja jare mukto danay.</div>
                      <div className="info">
                        <div className="image"><img src="images/resource/testi-2.jpg" alt="" /></div>
                        <div className="rating"><div className="stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div></div>
                        <div className="name">Mike Anderson</div>
                        <div className="designation">Journalist</div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="testi-block-one">
                    <div className="inner-box">
                      <div className="icon"><img src="images/icons/quote-icon-1.png" alt="" /></div>
                      <div className="text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Pakhiye ure ja jare mukto danay.</div>
                      <div className="info">
                        <div className="image"><img src="images/resource/testi-3.jpg" alt="" /></div>
                        <div className="rating"><div className="stars"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div></div>
                        <div className="name">Peter Parker</div>
                        <div className="designation">Photographer</div>
                      </div>
                    </div>
                  </div>
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
                    <div className="image"><a href="#"><img src="images/resource/client-1.png" alt="" /></a></div>
                  </div>
                  {/*Block*/}
                  <div className="client-block">
                    <div className="image"><a href="#"><img src="images/resource/client-2.png" alt="" /></a></div>
                  </div>
                  {/*Block*/}
                  <div className="client-block">
                    <div className="image"><a href="#"><img src="images/resource/client-3.png" alt="" /></a></div>
                  </div>
                  {/*Block*/}
                  <div className="client-block">
                    <div className="image"><a href="#"><img src="images/resource/client-4.png" alt="" /></a></div>
                  </div>
                  {/*Block*/}
                  <div className="client-block">
                    <div className="image"><a href="#"><img src="images/resource/client-5.png" alt="" /></a></div>
                  </div>
                  {/*Block*/}
                  <div className="client-block">
                    <div className="image"><a href="#"><img src="images/resource/client-1.png" alt="" /></a></div>
                  </div>
                  {/*Block*/}
                  <div className="client-block">
                    <div className="image"><a href="#"><img src="images/resource/client-2.png" alt="" /></a></div>
                  </div>
                  {/*Block*/}
                  <div className="client-block">
                    <div className="image"><a href="#"><img src="images/resource/client-3.png" alt="" /></a></div>
                  </div>
                  {/*Block*/}
                  <div className="client-block">
                    <div className="image"><a href="#"><img src="images/resource/client-4.png" alt="" /></a></div>
                  </div>
                  {/*Block*/}
                  <div className="client-block">
                    <div className="image"><a href="#"><img src="images/resource/client-5.png" alt="" /></a></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*News Section*/}
          <section className="news-section">
            <div className="auto-container">
              <div className="title-box centered">
                <div className="subtitle">Updates</div>
                <h2><span>From Our Blog</span></h2>
              </div>
              <div className="news-box">
                <div className="bg-grad-left"><img src="images/background/bg-gradient-9.png" alt=""  /></div>
                <div className="bg-grad-right"><img src="images/background/bg-gradient-10.png" alt=""  /></div>
                <div className="masonry-container row clearfix">
                  {/*Block*/}
                  <div className="news-item masonry-item col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    {/*Block*/}
                    <div className="news-block-one">
                      <div className="inner-box">
                        <div className="image-layer" style={{ backgroundImage: 'url(images/resource/news-1.jpg)' }} />
                        <div className="over-box">
                          <ul className="info clearfix">
                            <li><a href="#"><i className="fa fa-folder" /> Adventure</a></li>
                            <li><a href="#"><i className="fa fa-clock" /> June 17, 2022</a></li>
                            <li><a href="#"><i className="fa fa-comments" /> 22</a></li>
                          </ul>
                          <h3><a href="blog-single.html">Jim Morrison says when the musics over turn off the light</a></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="news-item masonry-item col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="news-block-one m-height">
                      <div className="inner-box">
                        <div className="image-layer" style={{ backgroundImage: 'url(images/resource/news-2.jpg)' }} />
                        <div className="over-box">
                          <ul className="info clearfix">
                            <li><a href="#"><i className="fa fa-folder" /> Culture</a></li>
                          </ul>
                          <h5><a href="blog-single.html">When the musics over turn off the light</a></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="news-item masonry-item col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="news-block-one sm-height">
                      <div className="inner-box">
                        <div className="image-layer" style={{ backgroundImage: 'url(images/resource/news-3.jpg)' }} />
                        <div className="over-box">
                          <ul className="info clearfix">
                            <li><a href="#"><i className="fa fa-folder" /> Adventure</a></li>
                          </ul>
                          <h5><a href="blog-single.html">When the musics over turn off the light</a></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Block*/}
                  <div className="news-item masonry-item col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div className="news-block-one sm-height">
                      <div className="inner-box">
                        <div className="image-layer" style={{ backgroundImage: 'url(images/resource/news-4.jpg)' }} />
                        <div className="over-box">
                          <ul className="info clearfix">
                            <li><a href="#"><i className="fa fa-folder" /> History</a></li>
                          </ul>
                          <h5><a href="blog-single.html">When the musics over turn off the light</a></h5>
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
                  </div>
                </div>
              </div>
            </div>
            {/*Feed Row*/}
            <div className="insta-feed alternate">
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
          <section className="subscribe-section">
            <div className="auto-container">
              <div className="outer-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="bg-grad-left"><img src="images/background/bg-gradient-13.png" alt=""  /></div>
                <div className="bg-grad-right"><img src="images/background/bg-gradient-14.png" alt=""  /></div>
                <div className="content-box">
                  <div className="bg-layer" style={{ backgroundImage: 'url(images/background/subscribe-bg.jpg)' }} />
                  <div className="row clearfix">
                    <div className="text-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
                      <div className="inner">
                        <div className="title-box">
                          <div className="subtitle">Let’s Explore the World</div>
                          <h2>Get Special Offers in Your Inbox</h2>
                        </div>
                      </div>
                    </div>
                    <div className="form-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
                      <div className="inner">
                        <div className="form-box subscribe-form">
                          <form method="post" action="contact.html">
                            <div className="form-group">
                              <div className="field-inner">
                                <input type="email" name="email" defaultValue placeholder="Submit your email" required />
                              </div>
                              <button type="submit" className="theme-btn"><i className="icon fa fa-paper-plane" /></button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
        {/*End pagewrapper*/}
        {/*Scroll to top*/}
        <div className="scroll-to-top scroll-to-target" data-target="html"><span className="icon"><img src="images/icons/arrow-up.svg" alt="" title="Go To Top" /></span></div>
      </div>
    </div>
  )
}
