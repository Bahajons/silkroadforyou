import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import emailjs from '@emailjs/browser';

export default function Email() {
	const { t } = useTranslation()
	const form = useRef();
	let text = 'Thank you for choosing us. Our team will be in contact with you soon'
	const [user, setUser] = useState({
		name: '',
		email: '',
		number: '',
		message: ''
	})

	function validate(e) {
		e.preventDefault()
		sendEmail()
	}


	const sendEmail = (e) => {

		emailjs.sendForm('service_n25ark9', 'template_93gh2s4', form.current, 'tvsN5a2RY0lPaysWP')
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
			message: ''
		})
	}

	return (
		<section className="subscribe-section">
			<div className="auto-container">
				<div className="outer-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
					<div className="bg-grad-left"><img src="images/background/bg-gradient-13.png" alt="" /></div>
					<div className="bg-grad-right"><img src="images/background/bg-gradient-14.png" alt="" /></div>
					<div className="content-box">
						<div className="bg-layer" style={{ backgroundImage: 'url(images/uzbekistan/image_1436x515.webp)' }} />
						<div className="row clearfix">
							<div className="text-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
								<div className="inner">
									<div className="title-box">
										<div className="subtitle">{t("lets_explore")}</div>
										<h2>{t("get_special_offer")}</h2>
									</div>
								</div>
							</div>
							<div className="form-col col-xl-6 col-lg-12 col-md-12 col-sm-12">
								<div className="inner">
									<div className="form-box subscribe-form">
										<form onSubmit={validate} ref={form}>
											<div className="form-group">
												<div className="field-inner">
													<input type="name" name="name" className='w-100' placeholder="Name" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} value={user.name} required />
													<input type="email" name="email" className='mt-3' placeholder="Email" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} value={user.email} required />
													<input type="text" name="number" className='mt-3' placeholder="Number" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} value={user.number} required />
													<textarea type="text" name="message" className='mt-3' placeholder="Message" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} value={user.message} required />
												</div>
												{console.log(user)}
												<button type="submit" className="sender mt-3">{t("send")}<i className="icon fa fa-paper-plane pl-2" /></button>
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
	)
}
