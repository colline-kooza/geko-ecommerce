import React from "react";
import Link from "next/link";
import Button from "./Button";

const content = [
  {
    title: "A community doing good",
    content:
      "Geko is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet.",
    additionalContent:
      "Here are some of the ways we’re making a positive impact, together.",
    tooltipText:
      "Your purchases on Geko in 2020 generated nearly $4 billion in income for small businesses. We advocate for policy—at the global and local level—that benefits creative entrepreneurs and helps small businesses grow and thrive. We are deepening our commitment to a sustainable future and are working towards a new goal to reach net zero emissions by 2030.",
  },
  {
    title: "Support independent creators",
    content:
      "There’s no Geko warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.",
    additionalContent: "",
  },
  {
    title: "Peace of Mind",
    content:
      "Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.",
    additionalContent: "",
  },
];

export default function ContentBlock() {
  return (
    <div className='bg-[#FFFBD8] w-full'>
      <div className='flex flex-col items-center gap-8 justify-center max-w-7xl mx-auto py-10 px-8 text-zinc-950'>
        <div className='flex flex-col items-center'>
          <h3 className='text-3xl font-medium'>What is Geko?</h3>
          <Link href='/about' className='text-sm underline pt-2'>
            Read our wonderfully weird story
          </Link>
        </div>

        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4'>
          {/* content */}
          {content.map((item, i) => (
            <div key={i} className='flex flex-col'>
              <h4 className='font-semibold text-2xl pb-3 '>{item.title}</h4>
              <p>
                {item.content}{" "}
                <span className='underline decoration-wavy'>
                  {/* additional text */}
                  {item.additionalContent}
                </span>
              </p>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center gap-2 flex-col mt-8'>
          <span className='font-semibold text-[1.2rem]'>
            Have a question? Well, we’ve got some answers.
          </span>
          <div className='max-w-xl mt-4'>
            <Button title='Go to Help Center' />
          </div>
        </div>
      </div>
    </div>
  );
}
