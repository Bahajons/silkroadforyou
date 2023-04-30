import React, { useEffect } from 'react'
import $ from 'jquery'

export default function TravelSingle() {





	function handlePreloader() {
		if ($('.loader-wrap').length) {
			$('.loader-wrap').delay(300).fadeOut(300);
		}
	}

	// if ($(".preloader-close").length) {
	// 	$(".preloader-close").on("click", function () {
	// 		$('.loader-wrap').delay(300).fadeOut(300);
	// 	})
	// }



	// Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).next('.acc-content').is(':visible')) {
				//return false;
				$(this).removeClass('active');
				$(this).next('.acc-content').slideUp(300);
				$(outerBox).children('.accordion').removeClass('active-block');
			} else {
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				$(this).next('.acc-content').slideDown(300);
				$(this).parent('.accordion').addClass('active-block');
			}
		});
	}

	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
	useEffect(() => {
		(function ($) {

			"use strict";


			//Hide Loading Box (Preloader)

		

		})(window.jQuery);

	}, [])



	return (
		<div>
			{/* Banner Section */}
			<section className="tour-single-banner">
				<div className="image-layer" style={{ backgroundImage: 'url(images/background/b-image-7.jpg)' }} />
				<div className="auto-container">
					<div className="content-box">
						<div className="content clearfix">
							<div className="t-type">
								<div className="icon"><img src="images/resource/t-icon-1.png" alt="" /></div>
								Tour Type <br /><strong>Adventure</strong>
							</div>
							<div className="links">
								<ul className="clearfix">
									<li><a href="#">Gallery <i className="far fa-images" /></a></li>
									<li><a href="#">Video <i className="far fa-video-camera" /></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*End Banner Section */}
			{/*Default Single Container*/}
			<div className="dsp-container tour-single">
				<div className="auto-container">
					<div className="row clearfix">
						{/*Content Side*/}
						<div className="content-side col-xl-8 col-lg-12 col-md-12 col-sm-12">
							<div className="content-inner">
								<div className="sp-header">
									<div className="loc-rat clearfix">
										<div className="location">London</div>
										<div className="rating"><a href="#" className="theme-btn"><i className="fa fa-star" /> <strong>4.8</strong>  <span className="count">3210 Reviews</span></a></div>
										<div className="add-fav"><a href="#"><i className="far fa-heart" /> Add to Wishlist</a></div>
									</div>
									<h1>Amazing Adventurous Travel Week in London</h1>
									<div className="info clearfix">
										<div className="duration"><i className="fa fa-clock" /> 5 Days 6 Nights</div>
										<div className="persons"><i className="fa fa-user" /> 12</div>
									</div>
								</div>
								<div className="upper-content">
									<div className="text-content">
										<h3>Tour Details</h3>
										<p>Runt ut labore et dolore magna aliqua enim ad minim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
										<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
										<br />
										<h5>Highlights</h5>
										<ul className="styled-list-one">
											<li>Oecaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
											<li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium </li>
											<li>doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis </li>
											<li>et quasi architecto beatae vitae dicta sunt explica</li>
										</ul>
									</div>
									<div className="basic-info">
										<div className="i-block clearfix">
											<h5>Basic Information</h5>
										</div>
										<div className="i-block clearfix">
											<div className="i-title">Destination</div>
											<div className="i-content">England</div>
										</div>
										<div className="i-block clearfix">
											<div className="i-title">Departure</div>
											<div className="i-content">Dhaka International Airport, Dhaka</div>
										</div>
										<div className="i-block clearfix">
											<div className="i-title">Departure Time</div>
											<div className="i-content">03.00 Pm GMT</div>
										</div>
										<div className="i-block clearfix">
											<div className="i-title">Return Time</div>
											<div className="i-content">8.00 AM GMT</div>
										</div>
										<div className="i-block clearfix">
											<div className="i-title">Language</div>
											<div className="i-content">English, Bangla</div>
										</div>
										<div className="i-block clearfix">
											<div className="i-title">Included</div>
											<div className="i-content">
												<ul className="styled-list-two">
													<li>Oecaecat cupidatat non proident sunt</li>
													<li>Sed ut perspiciatis unde omnis iste </li>
													<li>Doloremque laudantium, totam rem aperiam</li>
													<li>Wuasi architecto beatae vitae dicta</li>
												</ul>
											</div>
										</div>
										<div className="i-block clearfix">
											<div className="i-title">Not Included</div>
											<div className="i-content">
												<ul className="styled-list-three">
													<li>Oecaecat cupidatat non proident sunt</li>
													<li>Sed ut perspiciatis unde omnis iste </li>
													<li>Doloremque laudantium, totam rem aperiam</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="t-plans">
									<h3>Tour Plans</h3>
									<ul className="accordion-box tp-accordion clearfix">
										{/*Block*/}
										<li className="accordion block active-block">
											<div className="acc-btn active"><span className="d-count">Day 1</span> When the musics over turn off the light <span className="arrow fa fa-angle-down" /></div>
											<div className="acc-content current">
												<div className="content">
													<div className="text">
														<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicrum. Sed ut perspiciatis unde asi architecto beata omnis iste natus error sit voluptatem accusantium dolore mque laudantium</p>
														<ul>
															<li>Oecaecat cupidatat non proident sunt</li>
															<li>qui officia deserunt mollit</li>
															<li>Anim id est laborum.</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
										{/*Block*/}
										<li className="accordion block">
											<div className="acc-btn"><span className="d-count">Day 2</span> When the musics over turn off the light <span className="arrow fa fa-angle-down" /></div>
											<div className="acc-content">
												<div className="content">
													<div className="text">
														<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicrum. Sed ut perspiciatis unde asi architecto beata omnis iste natus error sit voluptatem accusantium dolore mque laudantium</p>
														<ul>
															<li>Oecaecat cupidatat non proident sunt</li>
															<li>qui officia deserunt mollit</li>
															<li>Anim id est laborum.</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
										{/*Block*/}
										<li className="accordion block">
											<div className="acc-btn"><span className="d-count">Day 3</span> When the musics over turn off the light <span className="arrow fa fa-angle-down" /></div>
											<div className="acc-content">
												<div className="content">
													<div className="text">
														<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicrum. Sed ut perspiciatis unde asi architecto beata omnis iste natus error sit voluptatem accusantium dolore mque laudantium</p>
														<ul>
															<li>Oecaecat cupidatat non proident sunt</li>
															<li>qui officia deserunt mollit</li>
															<li>Anim id est laborum.</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
										{/*Block*/}
										<li className="accordion block">
											<div className="acc-btn"><span className="d-count">Day 4</span> When the musics over turn off the light <span className="arrow fa fa-angle-down" /></div>
											<div className="acc-content">
												<div className="content">
													<div className="text">
														<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicrum. Sed ut perspiciatis unde asi architecto beata omnis iste natus error sit voluptatem accusantium dolore mque laudantium</p>
														<ul>
															<li>Oecaecat cupidatat non proident sunt</li>
															<li>qui officia deserunt mollit</li>
															<li>Anim id est laborum.</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div className="location">
									<h3>Map</h3>
									<div className="map-box">
										<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453478.8006792069!2d152.71300288692046!3d-27.38186310374308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2s!4v1679456478116!5m2!1sen!2s" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
										<div className="map-icon"><img src="images/resource/map-marker-2.png" alt="" /></div>
									</div>
								</div>
								<div className="t-faqs">
									<h3>Frequently Asked Questions</h3>
									<ul className="accordion-box faqs-accordion clearfix">
										{/*Block*/}
										<li className="accordion block active-block">
											<div className="acc-btn active"> What is the best way to enjoy this trip? <span className="arrow fa fa-plus" /></div>
											<div className="acc-content current">
												<div className="content">
													<div className="text">
														<p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicrum. Sed ut perspiciatis unde asi architecto beata omnis iste natus error sit voluptatem accusantium dolore mque laudantium. Jiboner kaytatare tumi dube jao onabil akashe shunnotay aj amar dhusor rongin somoye.</p>
													</div>
												</div>
											</div>
										</li>
										{/*Block*/}
										<li className="accordion block">
											<div className="acc-btn"> How can I get a full refund of this trip if I don’t go? <span className="arrow fa fa-plus" /></div>
											<div className="acc-content">
												<div className="content">
													<div className="text">
														<p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicrum. Sed ut perspiciatis unde asi architecto beata omnis iste natus error sit voluptatem accusantium dolore mque laudantium. Jiboner kaytatare tumi dube jao onabil akashe shunnotay aj amar dhusor rongin somoye.</p>
													</div>
												</div>
											</div>
										</li>
										{/*Block*/}
										<li className="accordion block">
											<div className="acc-btn"> What is the cancellation policy? <span className="arrow fa fa-plus" /></div>
											<div className="acc-content">
												<div className="content">
													<div className="text">
														<p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicrum. Sed ut perspiciatis unde asi architecto beata omnis iste natus error sit voluptatem accusantium dolore mque laudantium. Jiboner kaytatare tumi dube jao onabil akashe shunnotay aj amar dhusor rongin somoye.</p>
													</div>
												</div>
											</div>
										</li>
										{/*Block*/}
										<li className="accordion block">
											<div className="acc-btn"> When the musics over turn off the light? <span className="arrow fa fa-plus" /></div>
											<div className="acc-content">
												<div className="content">
													<div className="text">
														<p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicrum. Sed ut perspiciatis unde asi architecto beata omnis iste natus error sit voluptatem accusantium dolore mque laudantium. Jiboner kaytatare tumi dube jao onabil akashe shunnotay aj amar dhusor rongin somoye.</p>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div className="t-gallery">
									<h3>Media Gallery</h3>
									<div className="images">
										<ul className="clearfix">
											<li><div className="image"><a href="images/resource/image-11.jpg" className="lightbox-image" data-fancybox="SbGallery"><img src="images/resource/g-t-9.jpg" alt="" /></a></div></li>
											<li><div className="image"><a href="images/resource/image-12.jpg" className="lightbox-image" data-fancybox="SbGallery"><img src="images/resource/g-t-10.jpg" alt="" /></a></div></li>
											<li><div className="image"><a href="images/resource/image-13.jpg" className="lightbox-image" data-fancybox="SbGallery"><img src="images/resource/g-t-11.jpg" alt="" /></a></div></li>
											<li><div className="image"><a href="images/resource/image-14.jpg" className="lightbox-image" data-fancybox="SbGallery"><img src="images/resource/g-t-12.jpg" alt="" /></a></div></li>
											<li><div className="image"><a href="images/resource/image-15.jpg" className="lightbox-image" data-fancybox="SbGallery"><img src="images/resource/g-t-13.jpg" alt="" /></a></div></li>
											<li><div className="image"><a href="images/resource/image-19.jpg" className="lightbox-image" data-fancybox="SbGallery"><img src="images/resource/g-t-14.jpg" alt="" /></a></div></li>
											<li><div className="image"><a href="images/resource/image-17.jpg" className="lightbox-image" data-fancybox="SbGallery"><img src="images/resource/g-t-15.jpg" alt="" /></a></div></li>
											<li><div className="image"><a href="images/resource/image-18.jpg" className="lightbox-image" data-fancybox="SbGallery"><img src="images/resource/g-t-16.jpg" alt="" /></a></div></li>
										</ul>
									</div>
								</div>
								<div className="t-reviews">
									<h3>Reviews</h3>
									<div className="rev-info">
										<div className="inner clearfix">
											<div className="row clearfix">
												<div className="rev-left col-lg-4 col-md-4 col-sm-12">
													<div className="count">4.9</div>
													<div className="level"><i className="far fa-face-smile" /> Excellent</div>
													<div className="b-on">Based on 2100 Reviews</div>
												</div>
												<div className="rev-right col-lg-8 col-md-8 col-sm-12">
													<div className="cat">
														<div className="c-title">Service</div>
														<div className="p-bar"><div className="p-fill p-fill-bar" data-percent="82%" /></div>
														<div className="c-per"><span className="count-box"><span className="count-text" data-stop={90} data-speed={2000}>0</span>%</span></div>
													</div>
													<div className="cat">
														<div className="c-title">Accomodation</div>
														<div className="p-bar"><div className="p-fill p-fill-bar" data-percent="80%" /></div>
														<div className="c-per"><span className="count-box"><span className="count-text" data-stop={80} data-speed={2000}>0</span>%</span></div>
													</div>
													<div className="cat">
														<div className="c-title">Location</div>
														<div className="p-bar"><div className="p-fill p-fill-bar" data-percent="98%" /></div>
														<div className="c-per"><span className="count-box"><span className="count-text" data-stop={98} data-speed={2000}>0</span>%</span></div>
													</div>
													<div className="cat">
														<div className="c-title">Price</div>
														<div className="p-bar"><div className="p-fill p-fill-bar" data-percent="70%" /></div>
														<div className="c-per"><span className="count-box"><span className="count-text" data-stop={70} data-speed={2000}>0</span>%</span></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="reviews">
										<div className="rev-box">
											<div className="inner">
												<div className="rev-header clearfix">
													<h4>Amazing travel experience</h4>
													<div className="rating">
														<i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
													</div>
												</div>
												<div className="text">When que laudantium. Jiboner kaytatare tumi dube jao onabil akashe shunnotay aj amar dhusor rongin somoy itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
												<div className="lower clearfix">
													<div className="author-info">
														<div className="image"><img src="images/resource/ra-1.jpg" alt="" /></div>
														<div className="author-name">Jewel Khan</div>
														<div className="designation">eThemeStudio</div>
													</div>
													<div className="ld-link">
														<span className="txt">Was this review helpful?</span>
														<a href="#" className="l-btn active"><i className="fa fa-thumbs-up" /><span className="l-count">12</span></a> <a href="#" className="d-btn"><i className="fa fa-thumbs-up" /><span className="d-count">8</span></a>
													</div>
												</div>
											</div>
										</div>
										<div className="rev-box">
											<div className="inner">
												<div className="rev-header clearfix">
													<h4>Amazing travel experience</h4>
													<div className="rating">
														<i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
													</div>
												</div>
												<div className="text">When que laudantium. Jiboner kaytatare tumi dube jao onabil akashe shunnotay aj amar dhusor rongin somoy itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
												<div className="lower clearfix">
													<div className="author-info">
														<div className="image"><img src="images/resource/ra-2.jpg" alt="" /></div>
														<div className="author-name">Peter Parker</div>
														<div className="designation">ABC Inc.</div>
													</div>
													<div className="ld-link">
														<span className="txt">Was this review helpful?</span>
														<a href="#" className="l-btn"><i className="fa fa-thumbs-up" /><span className="l-count">12</span></a> <a href="#" className="d-btn active"><i className="fa fa-thumbs-up" /><span className="d-count">6</span></a>
													</div>
												</div>
											</div>
										</div>
										<div className="rev-box">
											<div className="inner">
												<div className="rev-header clearfix">
													<h4>Amazing travel experience</h4>
													<div className="rating">
														<i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
													</div>
												</div>
												<div className="text">When que laudantium. Jiboner kaytatare tumi dube jao onabil akashe shunnotay aj amar dhusor rongin somoy itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
												<div className="lower clearfix">
													<div className="author-info">
														<div className="image"><img src="images/resource/ra-3.jpg" alt="" /></div>
														<div className="author-name">Pablo Benjamin</div>
														<div className="designation">Easy Computers</div>
													</div>
													<div className="ld-link">
														<span className="txt">Was this review helpful?</span>
														<a href="#" className="l-btn"><i className="fa fa-thumbs-up" /><span className="l-count">12</span></a> <a href="#" className="d-btn"><i className="fa fa-thumbs-up" /><span className="d-count">6</span></a>
													</div>
												</div>
											</div>
										</div>
										<div className="see-all"><a href="#" className="theme-btn">View All <i className="fa fa-external-link" /></a></div>
									</div>
									<h3>Add A Review</h3>
									<div className="add-review">
										<div className="form-box site-form">
											<form method="post" action="index.html">
												<div className="row clearfix">
													<div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
														<div className="s-rev-option">
															<span className="ser-ttl">Service</span>
															<a href="#" className="rat"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></a>
														</div>
													</div>
													<div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
														<div className="s-rev-option">
															<span className="ser-ttl">Location</span>
															<a href="#" className="rat"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></a>
														</div>
													</div>
													<div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
														<div className="s-rev-option">
															<span className="ser-ttl">Accomodation</span>
															<a href="#" className="rat"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></a>
														</div>
													</div>
													<div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
														<div className="s-rev-option">
															<span className="ser-ttl">Price</span>
															<a href="#" className="rat"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></a>
														</div>
													</div>
													<div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
														<div className="field-inner">
															<input type="text" name="field-name" defaultValue placeholder="Your name" required />
														</div>
													</div>
													<div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
														<div className="field-inner">
															<input type="email" name="field-name" defaultValue placeholder="Your email" required />
														</div>
													</div>
													<div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
														<div className="field-inner">
															<input type="text" name="field-name" defaultValue placeholder="Review title" required />
														</div>
													</div>
													<div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
														<div className="field-inner">
															<textarea name="field-name" placeholder="Start writing your review here" required defaultValue={""} />
														</div>
													</div>
													<div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
														<button type="submit" className="theme-btn btn-style-one"><span>Submit Review</span></button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*Sidebar Side*/}
						<div className="sidebar-side col-xl-4 col-lg-8 col-md-12 col-sm-12">
							<div className="sidebar-inner">
								{/*Widget*/}
								{/* <div className="dsp-widget t-book-widget alt-margin">
									<div className="inner-box">
										<div className="t-book-header">
											<span className="st-txt">Start <br />From</span>
											<span className="amount">$120</span>
											<span className="qty">/ Per Person</span>
										</div>
										<div className="lower-box">
											<div className="form-box site-form">
												<form method="post" action="tour-single.html">
													<div className="fields">
														<div className="form-group">
															<div className="field-label">Date</div>
															<div className="field-inner">
																<input className="datepicker" type="text" name="field-name" defaultValue placeholder="Select a date" required />
																<i className="alt-icon fa fa-calendar-alt" />
															</div>
														</div>
														<div className="form-group">
															<div className="field-label">Time</div>
															<div className="field-inner">
																<select name="field-name" className="custom-select">
																	<option>Select a time</option>
																	<option>0000 Hrs</option>
																	<option>0200 Hrs</option>
																	<option>0400 Hrs</option>
																	<option>0600 Hrs</option>
																	<option>0800 Hrs</option>
																	<option>1000 Hrs</option>
																	<option>1200 Hrs</option>
																	<option>1400 Hrs</option>
																	<option>1600 Hrs</option>
																	<option>1800 Hrs</option>
																	<option>2000 Hrs</option>
																	<option>2200 Hrs</option>
																</select>
															</div>
														</div>
													</div>
													<h6>Tickets</h6>
													<div className="tickets">
														<div className="ticket-block clearfix">
															<div className="tick-ttl">Adults (18+ years)</div>
															<div className="tick-sel">
																<div className="quantity-box">
																	<div className="item-quantity">
																		<input className="qty-spinner" type="text" defaultValue={1} name="quantity" />
																	</div>
																</div>
															</div>
														</div>
														<div className="ticket-block clearfix">
															<div className="tick-ttl">Kids (12+ years)</div>
															<div className="tick-sel">
																<div className="quantity-box">
																	<div className="item-quantity">
																		<input className="qty-spinner" type="text" defaultValue={1} name="quantity" />
																	</div>
																</div>
															</div>
														</div>
														<div className="ticket-block clearfix">
															<div className="tick-ttl">Children (3+ years)</div>
															<div className="tick-sel">
																<div className="quantity-box">
																	<div className="item-quantity">
																		<input className="qty-spinner" type="text" defaultValue={1} name="quantity" />
																	</div>
																</div>
															</div>
														</div>
													</div>
													<h6>Additional Service</h6>
													<div className="add-ser">
														<ul>
															<li><div className="cb-block"><input type="checkbox" id="cb-1" /> <label className="clearfix" htmlFor="cb-1"><span className="txt">Additional Guide</span><span className="amount">$50</span></label></div></li>
															<li><div className="cb-block"><input type="checkbox" id="cb-2" /> <label className="clearfix" htmlFor="cb-2"><span className="txt">Internet</span><span className="amount">$30</span></label></div></li>
															<li><div className="cb-block"><input type="checkbox" id="cb-3" /> <label className="clearfix" htmlFor="cb-3"><span className="txt">Photography</span><span className="amount">$90</span></label></div></li>
														</ul>
													</div>
													<div className="total clearfix">
														<div className="t-ttl">Total</div>
														<div className="ttl-amt">$450</div>
													</div>
													<div className="proceed-link"><button type="button" className="theme-btn btn-style-two"><span>Proceed to Book</span></button></div>
												</form>
											</div>
										</div>
									</div>
								</div> */}
								{/*Widget*/}
								<div className="dsp-widget get-help-widget">
									<div className="inner">
										<h6>Get Help</h6>
										<h3>Need Help to Book?</h3>
										<div className="text">Keriam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
										<div className="call-to">
											<a href="tel:+1234567890"><i className="icon fa fa-phone" /> Call Us <span className="nmbr">+123 456 7890</span></a>
										</div>
									</div>
								</div>
								{/*Widget*/}
								<div className="dsp-widget similar-widget">
									<div className="inner">
										<h3>You might also like</h3>
										{/*Logo*/}
										<div className="posts">
											<div className="post">
												<div className="image"><a href="#"><img src="images/resource/news-thumb-1.jpg" alt="" /></a></div>
												<h6><a href="#">Amazing Adventurous trip to Amazon rain forest </a></h6>
												<div className="price">Starts from <span className="amount">$399</span></div>
											</div>
											<div className="post">
												<div className="image"><a href="#"><img src="images/resource/news-thumb-2.jpg" alt="" /></a></div>
												<h6><a href="#">Amazing Adventure trip to Amazon rain forest</a></h6>
												<div className="price">Starts from <span className="amount">$399</span></div>
											</div>
											<div className="post">
												<div className="image"><a href="#"><img src="images/resource/news-thumb-6.jpg" alt="" /></a></div>
												<h6><a href="#">Amazing Adventure trip to Amazon rain forest</a></h6>
												<div className="price">Starts from <span className="amount">$399</span></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
