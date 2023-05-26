import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery'
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser';

export default function TravelSingle() {

	const navigate = useNavigate()
	const { slug } = useParams()
	const { t } = useTranslation()
	const index = item()

	const form = useRef();
	let text = 'Thank you for choosing us. Our team will be in contact with you soon'
	const [user, setUser] = useState({
		name: '',
		email: '',
		number: '',
		title: '',
		package: `${t(`packages.${index}.title`)}, ${t(`packages.${index}.day`)}, Id: ${t(`packages.${index}.id`)}`,
		message: '',
	})

	function item() {
		for (let i = 0; i < t("packages.length"); i++) {
			console.log(i);
			if (t(`packages.${i}.slug`) === slug) {
				return i
			}
			else {
				return navigate('/')
			}
		}
	}



	const sendEmail = () => {

		emailjs.sendForm('service_n25ark9', 'template_8bbleec', form.current, 'tvsN5a2RY0lPaysWP')
			.then((result) => {
				console.log(result.text);
				clean()
			}, (error) => {
				console.log(error.text);
			});
	};

	function clean() {
		setUser({
			...user,
			name: '',
			email: '',
			number: '',
			title: '',
			message: ''
		})
	}




	function Tour_Plan() {
		let a = []
		for (let i = 0; i < parseInt(t(`packages.${index}.tour_plan.tour_day`)); i++) {
			a.push(i)
		}
		return a.map((item, key) => (
			<li className={`accordion block ${item == 0 ? 'active-block' : ''}`} key={key} >
				<div className={`acc-btn ${item == 0 ? 'active' : ''}`}><span className="d-count">{t(`packages.${index}.tour_plan.${item}.day`)}</span> {t(`packages.${index}.tour_plan.${item}.place`)}<span className="arrow fa fa-angle-down" /></div>
				<div className={`acc-content ${item == 0 ? 'current' : ''}`}>
					<div className="content">
						<div className="text">
							<p>{t(`packages.${index}.tour_plan.${item}.description`)}</p>
						</div>
					</div>
				</div>
			</li>
		))
	}




	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])

	useEffect(() => {

		(function ($) {

			"use strict";


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

		})(window.jQuery);

	}, [])




	function submit(e) {
		e.preventDefault()
		sendEmail()
	}



	return (
		<div>
			{/* {console.log(typeof(parseInt(t(`packages.${index}.tour_plan.tour_day`))))} */}
			{/* Banner Section */}
			<section className="tour-single-banner">
				<div className="image-layer" style={{ backgroundImage: `url(${t(`packages.${index}.photo_full`)})` }} />
				{/* <img src={t('packages.0.photo_full')} alt="" /> */}
				<div className="auto-container">
					<div className="content-box">
						<div className="content clearfix">
							<div className="t-type">
								<div className="icon"><img src="images/resource/t-icon-1.png" alt="" /></div>
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
										<div className="location">{t(`packages.${index}.country`)}</div>
										<div className="rating"><a href="#" className="theme-btn"><i className="fa fa-star" /> <strong>4.8</strong>
											{/* <span className="count">3210 Reviews</span> */}
										</a></div>
										<div className="add-fav"><a href="#"><i className="far fa-heart" /> Add to Wishlist</a></div>
									</div>
									<h1>{t(`packages.${index}.title`)}</h1>
									<div className="info clearfix">
										<div className="duration"><i className="fa fa-clock" /> {t(`packages.${index}.day`)} {t('days')} {t(`packages.${index}.night`)} {t("nights")}</div>
										{/* <div className="persons"><i className="fa fa-user" /> 12</div> */}
									</div>
								</div>
								<div className="upper-content">
									<div className="text-content">
										<h3>{t("tour_details")}</h3>
										<p style={{ whiteSpace: 'break-spaces' }}>{t(`packages.${index}.tour_detail`)}</p>
										<br />
										<h5>{t("highlights")}</h5>
										<ul className="styled-list-one">
											{["0", "1", "2"].map((item) => (
												<li key={item}>{t(`packages.${index}.highlight.${item}`)}</li>
											))}
										</ul>
									</div>
									<div className="basic-info">
										<div className="i-block clearfix">
											<h5>{t("basic_info")}</h5>
										</div>
										<div className="i-block clearfix">
											<div className="i-title">{t("destination")}</div>
											<div className="i-content">{t(`packages.${index}.country`)}</div>
										</div>
										<div className="i-block clearfix">
											<div className="i-title">{t("departure")}</div>
											<div className="i-content">{t(`packages.${index}.airport`)}</div>
										</div>
										<div className="i-block clearfix">
											<div className="i-title">{t("language")}</div>
											<div className="i-content">{t(`packages.${index}.language`)}</div>
										</div>
									</div>
								</div>
								<div className="t-plans">
									<h3>{t("tour_plans")}</h3>
									<ul className="accordion-box tp-accordion clearfix">
										{/*Block*/}
										<Tour_Plan />
									</ul>
								</div>

								<div className="location">
									<h3>{t("map")}</h3>
									<div className="map-box">
										<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6142446.122637754!2d59.322642898280385!3d41.260082372734495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2sUzbekistan!5e0!3m2!1spl!2spl!4v1682939195714!5m2!1spl!2spl" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
										<div className="map-icon"><img src="images/resource/map-marker-2.png" alt="" /></div>
									</div>
								</div>
								<div className="t-faqs">
									<h3>{t("frequently")}</h3>
									<ul className="accordion-box faqs-accordion clearfix">
										{["0", "1", "2", "3"].map((item, index) => (
											<li className={`accordion block ${item == 0 ? 'active-block' : ''}`}>
												<div className={`acc-btn ${item == 0 ? 'active' : ''}`}>{t(`faq.${item}.question`)}<span className="arrow fa fa-plus" /></div>
												<div className={`acc-content ${item == 0 ? 'current' : ''}`}>
													<div className="content">
														<div className="text">
															<p>{t(`faq.${item}.answer`)}</p>
														</div>
													</div>
												</div>
											</li>

										))}
										{/*Block*/}
									</ul>
								</div>
								<div className="t-gallery">
									<h3>Media Gallery</h3>
									<div className="images">
										{/* <img src="images/uzbekistan/resource/khiva_image7_425x290.webp" alt="" /> */}
										<ul className="clearfix">
											{["0", "1", "2", "3", "4", "5", "6", "7", "8"].map((item, key) => (
												<li key={key}>
													<div className="image">
														<a href={t(`packages.${index}.images.${item}.425`)} className="lightbox-image" data-fancybox="SbGallery">
															<img src={t(`packages.${index}.images.${item}.200`)} alt="" />
														</a>
													</div>
												</li>
											))}
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
													<div className="level"><i className="far fa-face-smile" /> {t("excellent")}</div>
													{/* <div className="b-on">Based on 2100 Reviews</div> */}
												</div>
												<div className="rev-right col-lg-8 col-md-8 col-sm-12">
													<div className="cat">
														<div className="c-title">{t("service")}</div>
														<div className="p-bar"><div className="p-fill p-fill-bar" data-percent="12%" /></div>
														<div className="c-per"><span className="count-box"><span className="count-text" data-stop={90} data-speed={2000}>70</span>%</span></div>
													</div>
													<div className="cat">
														<div className="c-title">{t("accomodation")}</div>
														<div className="p-bar"><div className="p-fill p-fill-bar" data-percent="80%" /></div>
														<div className="c-per"><span className="count-box"><span className="count-text" data-stop={80} data-speed={2000}>84</span>%</span></div>
													</div>
													<div className="cat">
														<div className="c-title">{t('location')}</div>
														<div className="p-bar"><div className="p-fill p-fill-bar" data-percent="98%" /></div>
														<div className="c-per"><span className="count-box"><span className="count-text" data-stop={98} data-speed={2000}>70</span>%</span></div>
													</div>
													<div className="cat">
														<div className="c-title">{t('price')}</div>
														<div className="p-bar"><div className="p-fill p-fill-bar" data-percent="70%" /></div>
														<div className="c-per"><span className="count-box"><span className="count-text" data-stop={70} data-speed={2000}>80</span>%</span></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* <div className="reviews">
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
									</div> */}
									<h3>{t("leave_at")}</h3>
									<div className="add-review">
										<div className="form-box site-form">
											<form onSubmit={submit} ref={form}>
												<div className="row clearfix">
													<div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
														<div className="field-inner">
															<input type="text" name="name" placeholder="Your name" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} value={user.name} required />
														</div>
													</div>
													<div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
														<div className="field-inner">
															<input type="email" name="email" placeholder="Your email" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} value={user.email} required />
														</div>
													</div>
													<div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
														<div className="field-inner">
															<input type="text" name="number" placeholder="Number" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} value={user.number} required />
														</div>
													</div>
													<div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
														<div className="field-inner">
															<input type="text" name="title" placeholder="Title" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} value={user.title} required />
														</div>
													</div>
													<div className="form-group d-none col-xl-12 col-lg-12 col-md-12 col-sm-12">
														<div className="field-inner">
															<input type="text" name="package" value={user.package} required />
														</div>
													</div>
													<div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
														<div className="field-inner">
															<textarea name="message" placeholder="Message" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} required value={user.message} />
														</div>
													</div>
													<div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
														<button type="submit" className="theme-btn btn-style-one"><span>{t('send')}</span></button>
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
										<h6>{t('get_help')}</h6>
										<h3>{t('need_help')}</h3>
										{/* <div className="text">Keriam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div> */}
										<div className="call-to">
											<a href="tel:+1234567890"><i className="icon fa fa-phone" /> {t("call_us")}<span className="nmbr">+123 456 7890</span></a>
										</div>
									</div>
								</div>
								{/*Widget*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}
