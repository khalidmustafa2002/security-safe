import React from 'react';

export default function page() {
  return (
    <>
      <div className='dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2]'>
        <section className="text-gray-600 body-font relative py-5">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            {/* Map and Contact Info */}
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.294013073443!2d55.30062377451888!3d25.159548433226202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69c36f082541%3A0x16f65b407bb87f9!2sMeydan%20Grandstand%20-%20Gate%20C!5e0!3m2!1sen!2s!4v1717235503473!5m2!1sen!2s"
                style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
                aria-label="Map showing the location of our personal guard office"
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                  <p className="mt-1">Personal Guard HQ, 7th floor, Downtown Tower, Sheikh Zayed Rd, Dubai, U.A.E</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                  <a href="mailto:personal.guard@domain.com" className="text-indigo-500 leading-relaxed">personal.guard@domain.com</a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                  <a href="tel:+971509876543" className="leading-relaxed">+971 50 987 6543</a>
                </div>
              </div>
            </div>

            {/* Service Overview Section */}
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-4 rounded-lg">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Personal Guard Services</h2>
              <p className="leading-relaxed mb-4 text-gray-600">Our expert personal guards provide tailored protection for VIPs, executives, and individuals who need discreet and reliable security.</p>
              <ul className="list-disc pl-5 text-gray-600">
                <li className="mb-2">24/7 VIP & Executive Protection</li>
                <li className="mb-2">Residential Security and Patrolling</li>
                <li className="mb-2">Event & Travel Security Coordination</li>
                <li className="mb-2">Threat Assessment & Risk Management</li>
                <li className="mb-2">Discreet and Professional Service</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto">
            <h2 className="text-center text-gray-100 text-lg mb-5 font-medium title-font">Why Choose Our Personal Guard Services?</h2>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-8 pb-12 rounded-lg overflow-hidden text-center relative">
                  <h2 className="text-lg font-medium text-gray-900 title-font mb-2">Experienced Security Professionals</h2>
                  <p className="leading-relaxed mb-4">Our guards undergo rigorous training in personal protection, defensive tactics, and emergency response.</p>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-8 pb-12 rounded-lg overflow-hidden text-center relative">
                  <h2 className="text-lg font-medium text-gray-900 title-font mb-2">Client-Centric Approach</h2>
                  <p className="leading-relaxed mb-4">We prioritize discretion to ensure your privacy and security with minimal intrusion.</p>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-8 pb-12 rounded-lg overflow-hidden text-center relative">
                  <h2 className="text-lg font-medium text-gray-900 title-font mb-2">Advanced Security Technology</h2>
                  <p className="leading-relaxed mb-4">We use the latest technology to ensure real-time protection and rapid response capabilities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto">
            <h2 className="text-center text-gray-100 text-lg mb-5 font-medium title-font">Client Testimonials</h2>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <p className="leading-relaxed mb-6">"The personal guard team provided outstanding protection with professionalism and discretion. We felt safe and well-cared for."</p>
                  <div className="inline-flex items-center">
                    <span className="text-gray-900 font-medium title-font">- Sarah J.</span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <p className="leading-relaxed mb-6">"Their service was excellent. We could rely on them for secure, hassle-free protection during our travels."</p>
                  <div className="inline-flex items-center">
                    <span className="text-gray-900 font-medium title-font">- Raj K.</span>
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
