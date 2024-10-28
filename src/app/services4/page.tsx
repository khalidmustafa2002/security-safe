import Image from 'next/image';
import React from 'react';

export default function page() {
  return (
    <>
      <div className="dark:bg-gray-900 bg-gray-100">
        <section className="text-white body-font py-10">
          {/* Header Section */}
          <div className="container px-5 py-20 mx-auto">
            <h1 className="text-center text-3xl font-semibold">Professional Cleaning Services</h1>
            <p className="text-center text-lg mt-4">Reliable, efficient, and thorough cleaning for residential and commercial spaces.</p>
          </div>

          {/* Services Section */}
          <div className="container px-5 py-12 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 p-4">
              <h2 className="text-xl font-medium title-font mb-2">Our Cleaning Services</h2>
              <p className="leading-relaxed mb-4">Our trained staff ensures every nook and cranny is spotless. We provide a variety of services to meet your specific needs.</p>
              <ul className="list-disc pl-5">
                <li className="mb-2">Residential Cleaning</li>
                <li className="mb-2">Commercial & Office Cleaning</li>
                <li className="mb-2">Carpet & Upholstery Cleaning</li>
                <li className="mb-2">Post-Construction Cleaning</li>
                <li className="mb-2">Eco-Friendly Cleaning Options</li>
              </ul>
            </div>

            {/* Image Section */}
            {/* <div className="lg:w-1/2 w-full rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1563306408-d4a5b0e3e0f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNsZWFuaW5nfGVufDB8fHx8MTYyMDU2ODg4MQ&ixlib=rb-1.2.1&q=80&w=800" 
                alt="Professional Cleaning Staff" 
                className="object-cover object-center w-full h-full" 
                width={600} 
                height={400} 
              />
            </div> */}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="text-white body-font">
          <div className="container px-5 py-12 mx-auto">
            <h2 className="text-center text-xl mb-5 font-medium title-font">Why Choose Our Cleaning Staff?</h2>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-700 px-8 pt-8 pb-12 rounded-lg overflow-hidden text-center">
                  <h2 className="text-lg font-medium title-font mb-2">Experienced & Trustworthy Staff</h2>
                  <p className="leading-relaxed">Our team members are thoroughly vetted, trained, and dedicated to delivering high-quality service.</p>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-700 px-8 pt-8 pb-12 rounded-lg overflow-hidden text-center">
                  <h2 className="text-lg font-medium title-font mb-2">Flexible Scheduling</h2>
                  <p className="leading-relaxed">We work around your schedule to ensure minimal disruption to your day.</p>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-700 px-8 pt-8 pb-12 rounded-lg overflow-hidden text-center">
                  <h2 className="text-lg font-medium title-font mb-2">Eco-Friendly Products</h2>
                  <p className="leading-relaxed">We offer environmentally friendly cleaning options to keep your spaces safe and sustainable.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="text-white body-font">
          <div className="container px-5 py-12 mx-auto">
            <h2 className="text-center text-xl mb-5 font-medium title-font">What Our Clients Say</h2>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2">
                <div className="h-full bg-gray-700 p-8 rounded">
                  <p className="leading-relaxed mb-6">"Their cleaning staff are punctual, professional, and detail-oriented. Our office has never looked better!"</p>
                  <div className="inline-flex items-center">
                    <span className="font-medium title-font">- Alex R.</span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full bg-gray-700 p-8 rounded">
                  <p className="leading-relaxed mb-6">"I highly recommend their services for residential cleaning. They did a fantastic job on my home!"</p>
                  <div className="inline-flex items-center">
                    <span className="font-medium title-font">- Maria P.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
