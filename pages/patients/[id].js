'use client'

import notify from '../lib/toasts';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '../../components/Loading';
import Success from '../../components/Success';
import CustomError from '../../components/CustomError';

const FormSubmittedPage = ({ }) => {

	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {

                if (router.isReady) {
                    const { folderId, event, id } = router.query;
                    let response = await fetch('/api/patients/update', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: Number(id),
                            folderId,
                            signingSuccess: event === "signing_success",
                        })
                    });

                    const responseJson = await response.json();
                    if (!response.ok) {
                        setIsError(true);
                        notify({
                            message: responseJson.error.message,
                            display: true,
                            type: "error"
                        });
                    }
                }
            } catch (error) {
                setIsError(true);
                notify({
                    message: 'An error occurred while processing your request.',
                    display: true,
                    type: "error"
                });
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [router.isReady]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
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
