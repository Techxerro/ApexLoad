import React, { useState } from 'react';
import icon from '../assets/img/apexloads 1.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const [activeForm, setActiveForm] = useState('email'); 

    const handleOnClick = (formType) => {
        setActiveForm(formType);
    };

    return (
        <div className='bg-black'>
            <div className='bg-custom-image2 h-screen bg-contain font-neue'>
                <img src={icon} alt='' />
                <div className='mx-auto container text-white w-[30%] border border-solid rounded-[15px] px-4 py-8 bg-[#1B1B1B]'>
                    <h2 className="text-2xl font-bold mb-1 font-neuebold">Sign In</h2>
                    <p className='mb-3 text-[#FFFFFF99]'>welcome back to the app</p>
                    <div className='text-white flex gap-4 mx-4 my-1'>
                        <button
                            onClick={() => handleOnClick('email')}
                            className={`px-4 py-2 rounded-md ${activeForm === 'email' ? 'text-red-600 underline' : 'text-[#FFFFFF99]'}`}
                        >
                            EMAIL
                        </button>
                        <button
                            onClick={() => handleOnClick('phone')}
                            className={`px-4 py-2 rounded-md ${activeForm === 'phone' ? 'text-red-600 underline' : 'text-[#FFFFFF99]'}`}
                        >
                            PHONE NUMBER
                        </button>
                    </div>
                    <div className=''>
                        {activeForm === 'phone' && (
                            <div className="mb-4">
                                <label className="block mb-1" htmlFor="phone">
                                    Phone Number
                                </label>
                                <div className="flex border rounded-md bg-transparent">
                                    <select
                                        id="country-code"
                                        className="p-2 bg-transparent text-white rounded-l-md focus:outline-none"
                                    >
                                        <option value="+1" className='text-black'>+1</option>
                                        <option value="+91" className='text-black'>+91</option>
                                    </select>
                                    <input
                                        type="tel"
                                        id="phone"
                                        
                                        className="p-2 bg-transparent text-white flex-1 rounded-r-md focus:outline-none"
                                        placeholder="Phone number"
                                    />
                                </div>
                            </div>
                        )}
                        {activeForm === 'email' && (
                            <div className="mb-4">
                                <label className="block mb-1" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="p-2 bg-transparent text-white w-full border rounded-md focus:outline-none"
                                    placeholder="Email"
                                />
                            </div>
                        )}
                        <div className="mb-4">
                            <label className="block mb-1" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="p-2 bg-transparent text-white w-full border rounded-md focus:outline-none"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <input type="checkbox" id="terms" className="mr-2" />
                                <label htmlFor="terms" className='text-[#FFFFFF99]'>Accept Terms & Conditions</label>
                            </div>
                            <a href="#" className="text-red-700 hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                       <Link  to = '/dashboard'> <button className="w-full p-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                            
                            Sign In
                            
                        </button>
                        </Link>
                        <div className="mt-4 text-center">
                            <a href="#" className="text-[#FFFFFF99] hover:underline">
                                Don’t have an account?
                            </a>
                        </div>
                        <button className='w-full p-2 text-white rounded-md border'>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
