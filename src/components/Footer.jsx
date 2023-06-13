import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
	const navigate = useNavigate()
	const { t } = useTranslation()
	return (
		<div>
			{/*Main Footer*/}
			<footer className="main-footer">
				<div className="upper-section">
					<div className="auto-container">
						<div className="content-box">
							<div className="row clearfix">
								<div className="footer-column col-xl-4 col-lg-3 col-md-6 col-sm-12">
									<div className="footer-widget about-widget">
										<div className="footer-logo"><a href="index.html" title="Travilo"><img src="images/logo.webp" alt="" title="Travilo" /></a></div>
										<div className="footer-info">
											<ul className="info">
												<li className="address"><a href="#"><i className="icon fa fa-map-marker-alt" /> Alisher Navoiy street, Tashkent, Uzbekistan</a></li>
												<li className="phone"><a href="tel:+998935609055"><i className="icon fa fa-phone" /> +998935609055</a></li>
												<li className="email"><a href="mailto:hello@travilo.com"><i className="icon fa fa-envelope" /> hello@silkroad.com</a></li>
											</ul>
											<ul className="social-links clearfix">
												<li><a href="#" className="facebook"><i className="fab fa-facebook-f" /></a></li>
												<li><a href="http://t.me/+998935609055" className="twitter"><i className="fab fa-telegram" /></a></li>
												<li><a href="https://wa.me/998935609055" className="linkedin"><i className="fab fa-whatsapp" /></a></li>
												<li><a href="#" className="youtube"><i className="fab fa-youtube" /></a></li>
												<li><a href="https://instagram.com/silk_road_for_you?igshid=NTc4MTIwNjQ2YQ==" className="youtube"><i className="fab fa-instagram" /></a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
									<div className="row clearfix">
										<div className="footer-column d-none col-lg-6 col-md-6 col-sm-12">
											<div className="footer-widget links-widget">
												<h4>Top Destination</h4>
												<div className="links">
													<ul>
														<li><a href="#">New York</a></li>
														<li><a href="#">London</a></li>
														<li><a href="#">Rome</a></li>
														<li><a href="#">Mascot</a></li>
														<li><a href="#">Dhaka</a></li>
													</ul>
												</div>
											</div>
										</div>
										<div className="footer-column col-lg-6 col-md-6 col-sm-12">
											<div className="footer-widget links-widget">
												<h4>{t("useful_link")}</h4>
												<div className="links">
													<ul>
														<li><a onClick={() => navigate('/')}>{t("home")}</a></li>
														<li><a onClick={() => navigate('/about')}>{t("about_us")}</a></li>
														<li><a onClick={() => navigate('/contact')}>{t("contact")}</a></li>
														{/* <li><a href="#">Team Members</a></li>
														<li><a href="#">Support</a></li>
														<li><a href="#">Career</a></li> */}
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="footer-column d-none col-xl-3 col-lg-3 col-md-6 col-sm-12">
									<div className="footer-widget news-widget">
										<h4>Featured Tours</h4>
										{/*Logo*/}
										<div className="news">
											<div className="news-post">
												<div className="image"><a href="#"><img src="images/resource/news-thumb-1.jpg" alt="" /></a></div>
												<h6><a href="#">Adventure trip to Amazon rain forest</a></h6>
												<div className="price">Starts from <span className="amount">$399</span></div>
											</div>
											<div className="news-post">
												<div className="image"><a href="#"><img src="images/resource/news-thumb-2.jpg" alt="" /></a></div>
												<h6><a href="#">Adventure trip to Amazon rain forest</a></h6>
												<div className="price">Starts from <span className="amount">$399</span></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="f-bottom">
					<div className="auto-container">
						<div className="inner clearfix">
							<div className="copyright">All rights researved <strong>Silk Road</strong>  © 2023</div>
							{/* <div className="bottom-links">
								<ul className="clearfix">
									<li><a href="#">Terms &amp; Condition</a></li>
									<li><a href="#">Privacy Policy</a></li>
									<li><a href="#">Legal</a></li>
								</ul>
							</div> */}
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
