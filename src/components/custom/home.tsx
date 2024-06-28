"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FlipWords } from "@/components/ui/flip-words";
import React, { useRef } from "react";

const ContactForm = () => (
  <form className="flex flex-col gap-6">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className="p-3 bg-gray-800 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-lightred transition-all"
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      className="p-3 bg-gray-800 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-lightred transition-all"
    />
    <input
      type="text"
      name="message"
      placeholder="Your Doubts"
      className="p-3 bg-gray-800 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-lightred transition-all"
      
    />
    <button
      type="submit"
      className="bg-lightred hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-transform transform hover:scale-105"
    >
      Send
    </button>
  </form>
);

export const projects = [
  {
    title: "Computer Science & Engineering ",
    description:
      "Involves studying and applying computer software and hardware principles, including programming, algorithms, and system design.",
    link: "/semesters",
  },
  {
    title: "Electronics & Communication Engineering ",
    description:
      "Focuses on designing electronic devices and communication systems for applications in telecommunications and hardware development.",
    link: "https://netflix.com",
  },
  {
    title: "Computer Science & Business Systems ",
    description:
      "Integrates computer science with business strategies to develop efficient IT solutions that enhance productivity and decision-making.",
    link: "https://google.com",
  },
  {
    title: "Electrical Engineering",
    description:
      "Focuses on electricity, electronics, and electromagnetism, designing and developing electrical systems for industries like power generation and telecommunications.",
    link: "https://meta.com",
  },
  {
    title: "Mechanical Engineering",
    description:
      "Involves designing, analyzing, and manufacturing mechanical systems, from engines and machinery to robotics and renewable energy technologies.",
    link: "https://amazon.com",
  },
  {
    title: "Civil Engineering",
    description:
      "Focuses on designing, constructing, and managing infrastructure projects such as bridges, roads, buildings, and water supply networks, ensuring safety and sustainability in urban development.",
    link: "https://microsoft.com",
  },
];

const Home = () => {
  const words = ["Excellence", "Resource", "Guidance", "Success"];
  const departmentRef = useRef<HTMLDivElement | null>(null); // Step 2

  const scrollToDepartment = () => {
    departmentRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col min-h-screen  bg-black text-white p-12">
      <div className="flex md:flex-row pb-4 ">
        <div className="flex flex-col gap-7 w-full md:w-1/2 mt-16 md:pl-8 text-center md:text-left items-center md:items-start">
          <div className="text-4xl">
            Your Ultimate Source for Semester
            <FlipWords className="!text-lightred" words={words} />
          </div>
          <div className="text-m text-offwhite">
            KnowledgeNook offers a wide range of resources for semester success:
            study guides, exam papers, lecture notes, project materials, tips,
            and interactive tutorials—all at your fingertips.
          </div>
          <div>
            <button className="bg-lightred hover:bg-red-700 text-white font-m py-2 px-4 rounded" onClick={scrollToDepartment}>
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 items-center justify-center hidden md:flex">
          <img
            src="/assets/girlworking2.svg"
            alt="Descriptive Text"
            className="w-3/4 h-auto max-w-sm"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row pb-20">
        <div className="flex w-1/2 items-center justify-center">
          <img
            src="/assets/KnowledgeNook.svg"
            alt="Descriptive Text"
            className="w-1/2 h-auto hidden md:flex"
          />
        </div>
        <div className="flex flex-col gap-1 w-full md:w-1/2 mt-16">
          {/* {/ebook/} */}
          <div className="flex justify-center items-center">
            <img
              src="/assets/ebook.svg"
              alt="Descriptive Text"
              // className="h-30"
              style={{ width: "158px", height: "158px" }}
            />
            <div className="flex flex-col">
              <div className="text-m font-bold">E-Books</div>
              <div className="text-sm text-offwhite">
                Explore a digital library of semester ebooks for comprehensive
                academic support.
              </div>
            </div>
          </div>
          {/* {/playlists/} */}
          <div className="flex justify-center items-center">
            <img
              src="/assets/playlists.svg"
              alt="Descriptive Text"
              className="h-30"
            />
            <div className="flex flex-col">
              <div className="text-m font-bold">Playlists</div>
              <div className="text-sm text-offwhite">
                Explore a digital library of semester ebooks for comprehensive
                academic support.
              </div>
            </div>
          </div>
          {/* {/progress tracker/} */}
          <div className="flex justify-center items-center">
            <img
              src="/assets/progress_tracker.svg"
              alt="Descriptive Text"
              className="h-30"
            />
            <div className="flex flex-col">
              <div className="text-m font-bold">Progress Tracker</div>
              <div className="text-sm text-offwhite">
                Explore a digital library of semester ebooks for comprehensive
                academic support.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center" ref={departmentRef}>
        <div className="text-4xl">
          Select <span className="text-lightred font-bold">Department</span>
        </div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>

      <div className="flex flex-col min-h-screen bg-black p-12">
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-4xl mb-4 font-bold text-white tracking-wide shadow-md animate-fade-in">
            Contact <span className="text-lightred font-bold">Us</span>
          </h2>
          <div className="w-full max-w-md px-4 py-8 bg-black text-black rounded-lg shadow-lg animate-slide-up">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

