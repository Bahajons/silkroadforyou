import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import Loader from '../utils/Loader';
import $ from 'jquery'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

	const { i18n, t } = useTranslation();
	const navigate = useNavigate();

	const handleChangeLanguage = (event) => {
		i18n.changeLanguage(event);
		console.log(event);
	};

	useEffect(() => {

		// Hidden Bar Menu Config
		function hiddenBarMenuConfig() {
			var menuWrap = $('.hidden-bar .side-menu');
			// appending expander button
			menuWrap.find('li.dropdown > a').append(function () {
				return '<button type="button" class="btn-expander"><i class="icon sl-icon-arrow-down"></i></button>';
			});
			// hidding submenu
			menuWrap.find('.dropdown').children('ul').hide();

			$(".hidden-bar .side-menu ul li.dropdown .btn-expander").on('click', function (e) {
				e.preventDefault();
				if ($(this).parents('li').children('ul').is(':visible')) {
					$(this).parents('li').children('ul').slideUp();
					$(this).find('i').toggleClass('sl-icon-arrow-up');
					return false;
				} else {
					$(this).parents('.navigation').children('li').children('ul').hide();
					$(this).parents('.navigation').children('li').children('a').find('i').removeClass('sl-icon-arrow-up');
					$(this).parents('.navigation').children('li').children('a').find('i').addClass('sl-icon-arrow-down');
					$(this).parents('li').children('ul').slideToggle();
					// toggling arrow of expander
					$(this).find('i').toggleClass('sl-icon-arrow-up');
					return false;
				}

			});
		}

		hiddenBarMenuConfig();

		// Custom Scroll for Hidden Sidebar
		if ($(".hidden-bar-wrapper").length) {

			$(".hidden-bar-closer,.menu-backdrop").on("click", function () {
				$(".hidden-bar,body").removeClass("visible-sidebar");
				$(".side-menu ul li.dropdown ul").slideUp();
				$(".side-menu ul li.dropdown > a i").removeClass("sl-icon-arrow-up").addClass("sl-icon-arrow-down");
			});
			$(document).keydown(function (e) {
				if (e.keyCode == 27) {
					$(".hidden-bar,body").removeClass("visible-sidebar");
					$(".side-menu ul li.dropdown ul").slideUp();
					$(".side-menu ul li.dropdown > a i").removeClass("sl-icon-arrow-up").addClass("sl-icon-arrow-down");
				}
			});
			$(".hidden-bar-opener").on("click", function () {
				$(".hidden-bar,body").addClass("visible-sidebar");
			});
		}
		// console.log(typeof(window.jQuery))
	}, [])

	function close() {
		$(".hidden-bar,body").removeClass("visible-sidebar");
		$(".side-menu ul li.dropdown ul").slideUp();
		$(".side-menu ul li.dropdown > a i").removeClass("sl-icon-arrow-up").addClass("sl-icon-arrow-down");
	}

	return (
		<>
			<div>
				{/* Main Header*/}
				<header className="main-header">
					{/* Header Upper */}
					<div className="header-upper">
						<div className="auto-container">
							{/* Main Box */}
							<div className="main-box clearfix">
								{/*Logo*/}
								<div className="logo-box">
									<div className="logo"><a href="index.html" title="Travilo"><img src="images/logo.webp" alt="" title="Travilo" /></a></div>
								</div>
								<div className="nav-box clearfix">
									{/*Nav Outer*/}
									<div className="nav-outer clearfix">
										<nav className="main-menu">
											<ul className="navigation clearfix">
												<li className="current dropdown"><a onClick={() => {
													navigate('/'); close()
												}}>{t("home")}</a>
													{/* <ul>
														<li><a href="index.html">Home 01</a></li>
														<li><a href="index-2.html">Home 02</a></li>
													</ul> */}
												</li>
												{/* <li className="dropdown"><a href="tour-list.html">Tours</a>
													<ul>
														<li><a href="tour-list.html">Tours List</a></li>
														<li><a href="tour-packages.html">Tour Packages</a></li>
														<li><a href="tour-single.html">Tour Details</a></li>
														<li><a href="activities.html">Activities</a></li>
														<li><a href="activity-single.html">Activity Details</a></li>
													</ul>
												</li> */}
												{/* <li className="dropdown"><a href="destinations.html">Destination</a>
													<ul>
														<li><a href="destinations.html">All Destinations</a></li>
														<li><a href="destination-single.html">Destination Single</a></li>
														<li><a href="hotels.html">Hotels</a></li>
														<li><a href="hotel-single.html">Hotel Details</a></li>
													</ul>
												</li> */}
												<li><a onClick={() => {
													navigate('/'); close()
												}}>{t("about")}</a></li>
												{/* <li className="dropdown"><a href="blog.html">News</a>
													<ul>
														<li><a href="blog.html">Our Blog</a></li>
														<li><a href="blog-single.html">Blog Details</a></li>
													</ul>
												</li> */}
												<li><a onClick={() => {
													navigate('/about'); close()
												}}>{t("contact")}</a></li>
											</ul>
										</nav>
										{/* Main Menu End*/}
									</div>
									{/*Nav Outer End*/}
								</div>
								{/* Hidden Nav Toggler */}
								<div className="nav-toggler">
									<button className="hidden-bar-opener"><span className="icon"><img src="images/icons/menu-icon.svg" alt="" /></span></button>
								</div>
								<div className="links-box clearfix">
									{/* <div className="link login"><a href="#">Login / Signup</a></div> */}
									<div className="link lang-box">
										<div className="lang-btn clearfix"><span className="txt">En</span><span className="icon far fa-angle-down" /></div>
										<ul className="lang-list" id='lang-list'>
											<li onClick={() => handleChangeLanguage('ru')}><a>Ru</a></li>
											<li onClick={() => handleChangeLanguage('en')}><a>En</a></li>
											{/* <li onClick={() => handleChangeLanguage('uz')}><a>Uz</a></li> */}
										</ul>
									</div>
									<div className="link social">
										<ul className="social-links clearfix">
											<li><a href="#" className="facebook"><i className="fab fa-facebook-f" /></a></li>
											<li><a href="#" className="twitter"><i className="fab fa-instagram" /></a></li>
											<li><a href="#" className="linkedin"><i className="fab fa-telegram" /></a></li>
											<li><a href="#" className="youtube"><i className="fab fa-youtube" /></a></li>
											<li><a href="https://wa.me/998935609055" className="linkedin"><i className="fab fa-whatsapp" /></a></li>
										</ul>
									</div>
									<div className="link call-to">
										<a href="tel:+1234567890"><i className="icon fa fa-phone" /> {t("call_us")} <span className="nmbr">+123 456 7890</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* End Header Upper */}
				</header>
				{/*End Main Header */}
				{/*Menu Backdrop*/}
				<div className="menu-backdrop" />
				{/* Hidden Navigation Bar */}
				<section className="hidden-bar">
					{/* Hidden Bar Wrapper */}
					<div className="hidden-bar-wrapper">
						<div className="hidden-bar-closer"><span className="icon"><svg className="icon-close" role="presentation" viewBox="0 0 16 14"><path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd" /></svg></span></div>
						<div className="nav-logo-box">
							<div className="logo"><a href="index.html" title="Travilo"><img src="images/logo.webp" alt="" title="Travilo" /></a></div>
						</div>
						{/* .Side-menu */}
						<div className="side-menu">
							<ul className="navigation clearfix">
								<li><a onClick={() => {
									navigate('/'); close()
								}}>{t("home")}</a>
									{/* <ul>
										<li><a href="index.html">Home 01</a></li>
										<li><a href="index-2.html">Home 02</a></li>
									</ul> */}
								</li>
								{/* <li className="dropdown"><a href="tour-list.html">Tours</a>
									<ul>
									<li><a href="tour-list.html">Tours List</a></li>
										<li><a href="tour-packages.html">Tour Packages</a></li>
										<li><a href="tour-single.html">Tour Details</a></li>
										<li><a href="activities.html">Activities</a></li>
										<li><a href="activity-single.html">Activity Details</a></li>
										</ul>
									</li> */}
								{/* <li className="dropdown"><a href="destinations.html">Destination</a>
									<ul>
									<li><a href="destinations.html">All Destinations</a></li>
									<li><a href="destination-single.html">Destination Single</a></li>
									<li><a href="hotels.html">Hotels</a></li>
									<li><a href="hotel-single.html">Hotel Details</a></li>
									</ul>
								</li> */}
								<li><a onClick={() => {
									navigate('/about'); close()
								}}>{t("about")}</a></li>
								{/* <li className="dropdown"><a href="blog.html">News</a>
									<ul>
										<li><a href="blog.html">Our Blog</a></li>
										<li><a href="blog-single.html">Blog Details</a></li>
										</ul>
									</li> */}
								<li><a onClick={() => {
									navigate('/about'); close()
								}}>{t("contact")}</a></li>
							</ul>
						</div>{/* /.Side-menu */}
						<div className="links-box clearfix">
							{/* <div className="clearfix">
								<div className="link"><a href="contact.html" className="theme-btn btn-style-one"><span>Login / Signup</span></a></div>
							</div> */}
							<ul className="d-flex" id='lang-list'>
								<li onClick={() => handleChangeLanguage('ru')}><a>Ru</a></li>
								<li className='mx-3' onClick={() => handleChangeLanguage('en')}><a>En</a></li>
							</ul>
							<div className="link social">
								<ul style={{ fontSize: '22px' }} className="social-links clearfix d-flex justify-content-between">
									<li><a href="#" className="facebook"><i className="fab fa-facebook-f" /></a></li>
									<li><a href="#" className="twitter"><i className="fab fa-instagram" /></a></li>
									<li><a href="#" className="linkedin"><i className="fab fa-telegram" /></a></li>
									<li><a href="#" className="youtube"><i className="fab fa-youtube" /></a></li>
									<li><a href="#" className="youtube"><i className="fab fa-whatsapp" /></a></li>
								</ul>
							</div>
						</div>
					</div>{/* / Hidden Bar Wrapper */}
				</section>
				{/* / Hidden Bar */}
			</div>
		</>
	)
}
