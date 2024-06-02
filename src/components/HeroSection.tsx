'use client'
import Link from 'next/link'
import React from 'react'
// import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import security1 from '../app/safety/security1.webp'
import security2 from '../app/safety/security2.jpg'
import security3 from '../app/safety/security3.jpg'
import security4 from '../app/safety/security4.jpg'
import security5 from '../app/safety/security5.jpg'
import security6 from '../app/safety/security6.jpg'
import Image from 'next/image';



export default function HeroSection() {
  return (
    <>
      {/* <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>SECURITY & CLEANING</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>At SSGS, we understand the paramount importance of safety and cleanliness in every environment. Whether it’s your home, office, or event venue, we are committed to providing top-notch security and cleaning solutions to ensure peace of mind and hygiene.</p>
        <div className="mt-4">
          <Link href={"/services"}>
          <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
       Explore
      </Button>
          </Link>
        </div>
      </div>

    </div> */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        // navigation
        autoplay={{ delay: 3000 }}
      // pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="relative flex w-full h-screen">
            <Image
              src={security3}
              className="w-full h-screen opacity-50"
              alt="image"
            />
            <div className="absolute top-14 left-0 w-full h-full flex flex-col justify-center items-center z-10">
              <div className="xl:w-9/12 md:w-1/2 p-4 mx-auto flex justify-center items-center">
                <div className="border border-gray-200 p-6 rounded-lg bg-indigo-100">
                  <h2 className="text-5xl  text-gray-900 font-semibold title-font mb-2 text-center">SGSCS</h2>
                  <p className="leading-relaxed text-lg text-center">
                    Ensuring the highest level of security with cutting-edge technology and dedicated services.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link href={"/services"}>
                  <Button
                    borderRadius="1.75rem"
                    className="bg-black dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>



        <SwiperSlide>
          <div className="relative flex w-full h-screen">
            <Image
              src={security5}
              className="w-full h-screen opacity-50"
              alt="image"
            />
            <div className="absolute top-14 left-0 w-full h-full flex flex-col justify-center items-center z-10">
              <div className="xl:w-9/12 md:w-1/2 p-4 mx-auto flex justify-center items-center">
                <div className="border border-gray-200 p-6 rounded-lg bg-indigo-100">
                  <h2 className="text-5xl  text-gray-900 font-semibold title-font mb-2 text-center">SGSCS</h2>
                  <p className="leading-relaxed text-lg text-center">
                    Experienced CCTV operator ensures vigilant surveillance and expertly installs comprehensive security systems.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link href={"/services"}>
                  <Button
                    borderRadius="1.75rem"
                    className="bg-black dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex w-full h-screen">
            <Image
              src={security6}
              className="w-full h-screen opacity-50"
              alt="image"
            />
            <div className="absolute top-14 left-0 w-full h-full flex flex-col justify-center items-center z-10">
              <div className="xl:w-9/12 md:w-1/2 p-4 mx-auto flex justify-center items-center">
                <div className="border border-gray-200 p-6 rounded-lg bg-indigo-100">
                  <h2 className="text-5xl  text-gray-900 font-semibold title-font mb-2 text-center">SGSCS</h2>
                  <p className="leading-relaxed text-lg text-center">
                    Professional cleaning staff ensuring spotless environments with meticulous care.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link href={"/services"}>
                  <Button
                    borderRadius="1.75rem"
                    className="bg-black dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex w-full h-screen">
            <Image
              src={security4}
              className="w-full h-screen opacity-50"
              alt="image"
            />
            <div className="absolute top-14 left-0 w-full h-full flex flex-col justify-center items-center z-10">
              <div className="xl:w-9/12 md:w-1/2 p-4 mx-auto flex justify-center items-center">
                <div className="border border-gray-200 p-6 rounded-lg bg-indigo-100">
                  <h2 className="text-5xl  text-gray-900 font-semibold title-font mb-2 text-center">SGSCS</h2>
                  <p className="leading-relaxed text-lg text-center">
                    Continuous security monitoring for proactive threat detection and response.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Link href={"/services"}>
                  <Button
                    borderRadius="1.75rem"
                    className="bg-black dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
