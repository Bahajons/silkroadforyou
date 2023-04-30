import React from 'react'

export default function Footer() {

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
										<div className="footer-logo"><a href="index.html" title="Travilo"><img src="images/logo.png" alt="" title="Travilo" /></a></div>
										<div className="footer-info">
											<ul className="info">
												<li className="address"><a href="#"><i className="icon fa fa-map-marker-alt" /> Awesome Road, New York, Usa</a></li>
												<li className="phone"><a href="tel:+123456789000"><i className="icon fa fa-phone" /> +123 456 789000</a></li>
												<li className="email"><a href="mailto:hello@travilo.com"><i className="icon fa fa-envelope" /> hello@travilo.com</a></li>
											</ul>
											<ul className="social-links clearfix">
												<li><a href="#" className="facebook"><i className="fab fa-facebook-f" /></a></li>
												<li><a href="#" className="twitter"><i className="fab fa-twitter" /></a></li>
												<li><a href="#" className="linkedin"><i className="fab fa-linkedin-in" /></a></li>
												<li><a href="#" className="youtube"><i className="fab fa-youtube" /></a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
									<div className="row clearfix">
										<div className="footer-column col-lg-6 col-md-6 col-sm-12">
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
												<h4>Useful Links</h4>
												<div className="links">
													<ul>
														<li><a href="#">About Us</a></li>
														<li><a href="#">Company Profile</a></li>
														<li><a href="#">Team Members</a></li>
														<li><a href="#">Support</a></li>
														<li><a href="#">Career</a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
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
							<div className="copyright">All rights researved <strong>Travilo</strong>  © 2023</div>
							<div className="bottom-links">
								<ul className="clearfix">
									<li><a href="#">Terms &amp; Condition</a></li>
									<li><a href="#">Privacy Policy</a></li>
									<li><a href="#">Legal</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
