'use client';
import React from 'react'
import Image from 'next/image'
import security7 from '../app/safety/security7.jpg';
export default function ChooseUs() {
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-fill object-center rounded" src={security7} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <p className='mt-2 text-3xl leading-8 font-bold tracking-tight text-teal-600  sm:text-4xl'>WELCOME TO SGSCS: SECURITY & CLEANING SERVICES</p>
                            <p className="py-2 text-white font-light tracking-wide leading-relaxed">At SGSCS, we understand the paramount importance of safety and cleanliness in every environment. Whether it’s your home, office, or event venue, we are committed to providing top-notch security and cleaning solutions to ensure peace of mind and hygiene. Our dedicated team of professionals is trained to meet the highest standards, offering reliable and efficient services tailored to your specific needs.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
