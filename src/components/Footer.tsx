import Link from 'next/link';
import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-black text-gray-400 py-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 xs:text-center">
            SGSCS: Your security is our priority. All transactions are encrypted and securely processed.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href={"/"}
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E</p>
          <p>Delhi 10001</p>
          <p>Email:usmanislam112@yahoo.com</p>
          <p>Phone: +971 52 953 9756</p>
        </div>
      </div>
      <p className='text-center text-xs pt-8'>&copy; {year} SGSCS.All rights reserved.</p>
    </footer>
  )
}
