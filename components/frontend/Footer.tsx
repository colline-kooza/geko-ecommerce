"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";
import { Facebook, Linkedin, MailSearch, Twitter } from "lucide-react";
import { usePathname } from "next/navigation";

const companyBio: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida, mi eu pulvinar cursus, sem elit interdum mauris";

const footerPages = [
  {
    title: "About Us",
    content: [
      {
        text: "Our Story",
        href: "/our-story",
      },
      {
        text: "Mission and Values",
        href: "/mission-and-values",
      },
      {
        text: "Team",
        href: "/team",
      },
      {
        text: "Testimonials",
        href: "/testimonials",
      },
      {
        text: "Go-To-Dashboard",
        href: "/dashboard",
      },
    ],
  },
  {
    title: "Services",
    content: [
      {
        text: "Web Development",
        href: "/web-development",
      },
      {
        text: "Mobile App Development",
        href: "/mobile-app-development",
      },
      {
        text: "UI/UX Design",
        href: "/ui-ux-design",
      },
      {
        text: "Digital Marketing",
        href: "/digital-marketing",
      },
    ],
  },
  {
    title: "Resources",
    content: [
      {
        text: "Webinars",
        href: "/webinars",
      },
      {
        text: "Ebooks",
        href: "/ebooks",
      },
      {
        text: "Templates",
        href: "/templates",
      },
      {
        text: "Tutorials",
        href: "/tutorials",
      },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/dashboard")) {
    return null;
  }
  return (
    <>
      {/* main footer */}
      <div className='bg-white px-8 py-12 w-full md:max-w-7xl md:mx-auto font-[sans-serif]'>
        {/* news-letter */}
        <div className='lg:max-w-[50%] mx-auto text-center pb-12'>
          <h3 className='text-3xl font-bold text-black'>Newsletter</h3>
          <p className='text-sm mt-6 text-gray-400'>
            Subscribe to our newsletter and stay up to date with the latest
            news, updates, and exclusive offers. Get valuable insights. Join our
            community today!
          </p>
          <div className='bg-[#dddddd] flex px-2 py-1 rounded-full text-left mt-10'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full outline-none bg-transparent text-sm pl-2'
            />
            <Button title='Submit' />
          </div>
        </div>

        <div className='grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-20 max-lg:gap-8'>
          {/* bio */}
          <div className='lg:col-span-2'>
            <h4 className='text-lg font-bold mb-6 text-[#333] capitalize'>
              About Us
            </h4>
            <p className='text-gray-500 text-[15px]'>{companyBio}</p>
            <div className='bg-[#e8e8e88f] flex px-4 py-3 rounded-md text-left mt-4'>
              <MailSearch className='mr-3' />

              <input
                type='email'
                placeholder='Enter your email address...'
                className='w-full outline-none text-zinc-950 placeholder:text-zinc-950 bg-transparent text-[15px]'
              />
            </div>
          </div>

          {/* footer pages */}
          {footerPages.map((item, index) => (
            <div key={index}>
              <h4 className='text-lg font-bold mb-6 text-[#333]'>
                {item.title}
              </h4>
              <ul className='space-y-4'>
                {item.content.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className='text-gray-500 hover:text-blue-600 text-[15px]'
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* downer footer */}
      <div className='bg-blue-600 py-4 px-10 font-[sans-serif]'>
        <div className='w-full md:max-w-7xl px-8 md:mx-auto'>
          <div className='flex items-start justify-between'>
            <div>
              <p className='text-sm text-white font-bold'>Follow us:</p>
            </div>
            <ul className='flex gap-2'>
              <li>
                <Link href='/'>
                  <Facebook className='inline text-white w-6 h-6' />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <Linkedin className='inline text-white w-6 h-6' />
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <Twitter className='inline text-white w-6 h-6' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
