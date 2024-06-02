import Image from 'next/image'
import React from 'react'
import person1 from '../safety/person1.jpg';
export default function page() {
    return (
        <>
            <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20 pt-5 ">
                            <h1 className="text-2xl font-medium title-font mb-4 text-white">OUR TEAM</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Meet the SGSCS team: Dedicated professionals with years of experience in cybersecurity, committed to safeguarding your security with cutting-edge technology and personalized solutions.</p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                <div className="h-full flex flex-col items-center text-center">
                                    <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={person1} />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-white">Alper Kamu</h2>
                                        <h3 className="text-white mb-3">UI Developer</h3>
                                        <p className="mb-4 text-white">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                <div className="h-full flex flex-col items-center text-center">
                                    <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={person1} />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-white">Holden Caulfield</h2>
                                        <h3 className="text-white mb-3">UI Developer</h3>
                                        <p className="mb-4 text-white">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                <div className="h-full flex flex-col items-center text-center">
                                    <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={person1} />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-white">Atticus Finch</h2>
                                        <h3 className="text-white mb-3">UI Developer</h3>
                                        <p className="mb-4 text-white">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                <div className="h-full flex flex-col items-center text-center">
                                    <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={person1} />
                                    <div className="w-full">
                                        <h2 className="title-font font-medium text-lg text-white">Henry Letham</h2>
                                        <h3 className="text-white mb-3">UI Developer</h3>
                                        <p className="mb-4 text-white">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
