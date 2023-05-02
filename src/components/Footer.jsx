import React, { useState } from 'react';
import { ReactComponent as Email } from '../assets/email.svg';
import { ReactComponent as EmailHover } from '../assets/emailhover.svg';
import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as GithubHover } from '../assets/githubhover.svg';
import { ReactComponent as Phone } from '../assets/phone.svg';
import { ReactComponent as PhoneHover } from '../assets/phonehover.svg';
import { ReactComponent as Linked } from '../assets/linked.svg';
import { ReactComponent as LinkedHover } from '../assets/linkedhover.svg';


const Footer = () => {
    const [isEmailHovered, setIsEmailHovered] = useState(false);
    const [isLinkedHovered, setIsLinkedHovered] = useState(false);
    const [isGithubHovered, setIsGithubHovered] = useState(false);
    const [isPhoneHovered, setIsPhoneHovered] = useState(false);

    const handleEmailMouseEnter = () => {
        setIsEmailHovered(true);
    };

    const handleEmailMouseLeave = () => {
        setIsEmailHovered(false);
    };

    const handleLinkedMouseEnter = () => {
        setIsLinkedHovered(true);
    };

    const handleLinkedMouseLeave = () => {
        setIsLinkedHovered(false);
    };

    const handleGithubMouseEnter = () => {
        setIsGithubHovered(true);
    };

    const handleGithubMouseLeave = () => {
        setIsGithubHovered(false);
    };

    const handlePhoneMouseEnter = () => {
        setIsPhoneHovered(true);
    };

    const handlePhoneMouseLeave = () => {
        setIsPhoneHovered(false);
    };


    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
                <p className='py-4'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.
                </p>

                <div className='flex justify-between md:w-[75%] my-6'>
                    <div className='email'>
                        {isEmailHovered ? (
                            <EmailHover height={'30px'} width={'30px'} onMouseEnter={handleEmailMouseEnter} onMouseLeave={handleEmailMouseLeave} />
                        ) : (
                            <Email height={'30px'} width={'30px'} onMouseEnter={handleEmailMouseEnter} onMouseLeave={handleEmailMouseLeave} />
                        )}
                    </div>

                    <div className='linked-in'>
                        {isLinkedHovered ? (
                            <LinkedHover height={'30px'} width={'30px'} onMouseEnter={handleLinkedMouseEnter} onMouseLeave={handleLinkedMouseLeave} />
                        ) : (
                            <Linked height={'30px'} width={'30px'} onMouseEnter={handleLinkedMouseEnter} onMouseLeave={handleLinkedMouseLeave} />
                        )}
                    </div>

                    <div className='git'>
                        {isGithubHovered ? (
                            <GithubHover height={'30px'} width={'30px'} onMouseEnter={handleGithubMouseEnter} onMouseLeave={handleGithubMouseLeave} />
                        ) : (
                            <Github height={'30px'} width={'30px'} onMouseEnter={handleGithubMouseEnter} onMouseLeave={handleGithubMouseLeave} />
                        )}
                    </div>

                    <div className='phone'>
                        {isPhoneHovered ? (
                            <PhoneHover height={'30px'} width={'30px'} onMouseEnter={handlePhoneMouseEnter} onMouseLeave={handlePhoneMouseLeave} />
                        ) : (
                            <Phone height={'30px'} width={'30px'} onMouseEnter={handlePhoneMouseEnter} onMouseLeave={handlePhoneMouseLeave} />
                        )}
                    </div>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;