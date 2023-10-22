'use client'

import React, { useState } from 'react';
import FormIframe from '../../components/FormIframe';
import FormCard from '../../components/FormCard';
import notify from '../lib/toasts';

const RegistrationPage = () => {

	const [embedSessionUrl, setEmbedSessionUrl] = useState(null);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: ""
	});

	const handleInputChange = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const response = await fetch('/api/patients/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});

		const responseJson = await response.json();

		if (!response.ok) {
			let message = responseJson.error.message;
			notify({
				message: message,
				display: true,
				type: "error"
			})
		} else {
			const { data } = responseJson;
			setEmbedSessionUrl(data.embedSessionUrl);
		}
	};

	if (embedSessionUrl) {
		return <FormIframe embedSessionUrl={embedSessionUrl} />
	}

	return (
		<div>
			<FormCard cardTitle={'New Patient Registration'} handleInput={handleInputChange} handleFormSubmit={handleSubmit} />
		</div>
	)

};

export default RegistrationPage;