import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { news } from "../locate/news";
import "./blog.css";
// import Gallery from 'react-photo-gallery'

export default function Blog() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState("uzb");

  function change_current(e) {
    setCurrent(e);
  }

  return (
    <div className="page-wrapper">
      <section className="destination-section">
        <div className="bg-grad-right">
          <img src="images/background/bg-gradient-3.png" alt="" />
        </div>
        <div className="bg-grad-left">
          <img src="images/background/bg-gradient-4.png" alt="" />
        </div>
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">{t("discover")}</div>
            <h2>
              <i className="bg-vector" />
              <span>{t("popular_destination")}</span>
            </h2>
            <div className="d-flex country flex-wrap mt-3 justify-content-center">
              {[0, 1, 2, 3].map((item, index) => (
                <p
                  className={`item ${
                    t(`blog_photos.${item}.code`) == current ? "current" : ""
                  }`}
                  onClick={() => change_current(t(`blog_photos.${item}.code`))}
                >
                  {t(`blog_photos.${item}.name`)}
                </p>
              ))}
            </div>
          </div>
        </div>
        <section className="insta-section">
          {/*Feed Row*/}
          <div className="insta-feed">
            <div className="carousel-container">
              <div className="carousel-box">
                <div className="insta-carousel d-flex justify-content-center flex-wrap">
                  {/*Block*/}

                  {news.map((item, index) =>
                    item.country == current && item.name == "" ? (
                      <div
                        className="insta-block h-100"
                        style={{ height: "300px" }}
                      >
                        <div className="image pt-0">
                          <span className="img">
                            <a
                              href={item.img}
                              className="h-100 lightbox-image"
                              data-fancybox="insta-gallery"
                            >
                              {/* <img className='h-100 px-1' src="images/uzbekistan/blog/image_1_374x292.webp" alt="" /> */}

                              <div
                                className={`dest-block-one masonry-item col-12`}
                              >
                                <div
                                  className="inner-box wow fadeInUp"
                                  data-wow-delay="0ms"
                                  data-wow-duration="1500ms"
                                >
                                  <div className="image-box">
                                    <a className="w-100 h-100">
                                      {item.name == "video" ? (
                                        <video
                                          style={{
                                            height: "100%",
                                            width: "100%",
                                          }}
                                          src={item.img}
                                        ></video>
                                      ) : (
                                        <img src={item.img} />
                                      )}
                                    </a>
                                  </div>
                                  <div className="hvr-box">
                                    <div className="hvr-inner">
                                      {/* <h4 className='text-left'><a >{item.country}</a></h4> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </span>
                        </div>
                      </div>
                    ) : (
                      ""
                    )
                  )}

                  {news.map((item, index) =>
                    item.country == current ? (
                      <div
                        className="insta-block h-100"
                        style={{ height: "300px" }}
                      >
                        <div className="image-box">
                          <a className="w-100 h-100">
                            {item.name == "video" ? (
                              <video
                                style={{
                                  height: "100%",
                                  width: "100%",
                                }}
                                src={item.img}
                                controls
                              ></video>
                            ) : (
                              ""
                            )}
                          </a>
                        </div>
                      </div>
                    ) : (
                      ""
                    )
                  )}
                  {/*Block*/}
                </div>
              </div>
            </div>
          </div>
          {/*Feed Row*/}
        </section>
      </section>
    </div>
  );
}
