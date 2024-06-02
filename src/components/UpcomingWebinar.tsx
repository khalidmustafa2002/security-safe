'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';

export default function UpcomingWebinar() {
    const featuredWebinars = [
        {
            title: 'Latest Cyber Threat Trends',
            description:
                'Understand the new and emerging threats that are expected to dominate the cybersecurity landscape in 2024.',
            slug: 'latest-cyber-threat-trends',
            isFeatured: true,
        },
        {
            title: 'Advanced Threat Detection',
            description:
                'Discover cutting-edge techniques and tools for identifying and mitigating threats before they can cause significant harm.',
            slug: 'advanced-threat-detection',
            isFeatured: true,
        },
        {
            title: 'Proactive Security Measures',
            description:
                'Learn about proactive measures and best practices to enhance your organization’s security posture.',
            slug: 'proactive-security-measures',
            isFeatured: true,
        },
        {
            title: 'Case Studies',
            description:
                'Review real-world case studies of recent cyber attacks and the successful strategies used to defend against them.',
            slug: 'case-studies',
            isFeatured: true,
        },
        // Added two more webinars
        {
            title: 'Expert Insights',
            description:
                'Gain valuable insights from leading cybersecurity experts on how to stay ahead of potential threats and safeguard your digital assets.',
            slug: 'expert-insights',
            isFeatured: true,
        },
        {
            title: 'Principles of Zero Trust',
            description:
                'Understand the core concepts and principles behind Zero Trust Architecture and why it is essential for modern network security.',
            slug: 'principles-of-zero-trust',
            isFeatured: true,
        },
    ];
    return (
        <div className='p-12 bg-gray-900'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className='text-center'>
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Webinar</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enchance Your Security Journey</p>
                </div>
                <div className='mt-10'>
                    <HoverEffect items={featuredWebinars.map(webinar => (
                        {
                            title: webinar.title,
                            description: webinar.description,
                            link: '/'
                        }
                    ))} />
                </div>
                <div className='mt-10 text-center'>
                    <Link href={'/'} className='px-4 py-2 rounded border border-neural-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>View all Webinar</Link>
                </div>
            </div>
        </div>
    )
}
