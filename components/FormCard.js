'use client'

import InputText from './InputText';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormCard = ({ cardTitle, handleInput, handleFormSubmit }) =>  {

    return (
        <div className='h-[calc(100vh-55px)] bg-gray-200 w-full flex justify-center items-center'>
            <form className="mt-6">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className='card-body items-center text-center'>
                        <h2 className='card-title'>{cardTitle}</h2>
                        <InputText
                            id="firstname"
                            name='firstName'
                            label={"First Name"}
                            type='text'
                            placeholder="Anna"
                            onInputChange={handleInput}
                        />
                        <InputText
                            id="lastname"
                            name='lastName'
                            label={"Last Name"}
                            type='text'
                            placeholder="Belle"
                            onInputChange={handleInput}
                        />
                        <InputText
                            id="email"
                            name='email'
                            label={"Email Address"}
                            type='email'
                            placeholder="example@domain.com"
                            onInputChange={handleInput}
                        />
                        <div>
                            <button className='btn btn-primary' onClick={handleFormSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
};

 
export default FormCard;