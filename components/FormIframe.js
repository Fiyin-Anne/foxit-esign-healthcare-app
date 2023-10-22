'use client'

import React, { useEffect, useState } from 'react';
import Loading from './Loading.js';
import Script from 'next/script';

const FormIframe = ({ embedSessionUrl }) => {

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const iframe = document.querySelector('iframe');
		iframe.addEventListener('load', () => {
			setIsLoading(false);
		});

		return () => {
			iframe.removeEventListener('load', () => {
				setIsLoading(false);
			});
		};
	}, []);

	return (
		<div className='h-[calc(100vh-55px)] bg-gray-200 w-full flex justify-center items-center'>
			<Script type="text/javascript" src="https://na1.foxitesign.foxit.com/js/esignGeniePostMessageParent.js" />
			<iframe id='esignIframe' src={embedSessionUrl} style={{ width: '99%', height: '99%', position: 'absolute' }} frameBorder="0"></iframe>
			{isLoading && <Loading />}
		</div>
	)
}

export default FormIframe;