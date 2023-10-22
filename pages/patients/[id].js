'use client'

import notify from '../lib/toasts';
import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import Success from '../../components/Success';
import CustomError from '../../components/CustomError';

const FormSubmittedPage = async ({ params, searchParams }) => {

	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch('/api/patients/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: Number(params.id),
                    folderId: searchParams.folderId,
                    signingSuccess: searchParams.event === "signing_success",
                })
            });

            const responseJson = await response.json();
            if (!response.ok) {
                setIsError(true)
                setIsLoading(false)
                let message = responseJson.error.message;
                notify({
                    message: message,
                    display: true,
                    type: "error"
                })
            } else {
                setIsLoading(false)
            }
        };

        fetchData();
    }, [params.id, searchParams.folderId, searchParams.event]);

    return (
        <div>
			{isLoading && <Loading />}
            {!isError ? 
                <Success 
                    title='Success!' 
                    subtext='Patient successfully registered' 
                    retry='/patients/registration' 
                /> : <CustomError retry='/patients/registration'/>
            }
        </div>
    )

};


export default FormSubmittedPage;