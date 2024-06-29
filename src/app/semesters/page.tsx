"use client";
import { useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { PinContainer } from "@/components/ui/3d-pin";
import { Subjects } from "@/components/custom/Subjects";
import CategoryCard from "@/components/custom/categorycard";
// Define types
interface Ebook {
  image: string;
  pdf: string;
  name: string;
}

interface Playlist {
  image: string;
  link: string;
  name: string;
  slug:string;
}

interface SemesterData {
  ebook: Ebook[];
  playlist: Playlist[];
}

interface Semesters {
  [key: string]: SemesterData;
}

const semesterData: Semesters[] = [
  {
    Sem1: {
      ebook: [
        {
          image: "/book logo/physic logo.png",
          pdf: "/bookdoc/physics ebook.pdf",
          name: "Physics for Engineering",
        },
        {
          image: "/book logo/electrical logo.png",
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
        {
          image: "/book logo/math logo.png",
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Maths for Engineering",
        },
      ],
      playlist: [
        {
          image: "/thumbnail/physicsyoutube.png",
          link: "/bookdoc/physics ebook.pdf",
          name: "Physics for Engineering",
          slug:"ph",
        },
        {
          image: "/thumbnail/electricalyoutube.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
          slug:"ee",
        },
        {
          image: "/thumbnail/mathyoutube.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Maths for Engineering",
          slug:"mt",
        },
      ],
    },
    Sem2: {
      ebook: [
        
        {
          image: "/book logo/chem logo.png",
          pdf: "/bookdoc/Chemistry engineering ebook.pdf",
          name: "Chemistry for Engineering",
        },
        {
          image: "/book logo/c lang pic.png",
          pdf: "/bookdoc/Let us c -ebook.pdf",
          name: "C Programming",

        },
      ],
      playlist: [
        {
          image: "/thumbnail/chemyoutube.png",
          link: "https://www.youtube.com/playlist?list=PLW1Y7Rfg4m8Jhs-s_VfYWgWzwTqYUvxJb",
          name: "Chemistry for Engineering",
          slug:"ch",
        },
        {
          image: "/book logo/english logo.png",
          link: "/bookdoc/english ebook.pdf",
          name: "English",
          slug:"en",
        },
        {
          image: "/book logo/c lang pic.png",
          link: "/bookdoc/Let us c -ebook.pdf",
          name: "C programming",
          slug:"c",
        },
      ],
    },
    Sem3: {
      ebook: [
        
        {
          image: "/book logo/chem logo.png",
          pdf: "/bookdoc/Chemistry engineering ebook.pdf",
          name: "Chemistry for Engineering",
        },
        {
          image: "/book logo/c lang pic.png",
          pdf: "/bookdoc/Let us c -ebook.pdf",
          name: "C Programming",

        },
      ],
      playlist: [
        {
          image: "/thumbnail/chemyoutube.png",
          link: "https://www.youtube.com/playlist?list=PLW1Y7Rfg4m8Jhs-s_VfYWgWzwTqYUvxJb",
          name: "Chemistry for Engineering",
          slug:"ch",
        },
        {
          image: "/book logo/english logo.png",
          link: "/bookdoc/english ebook.pdf",
          name: "English",
          slug:"en",
        },
        {
          image: "/book logo/c lang pic.png",
          link: "/bookdoc/Let us c -ebook.pdf",
          name: "C programming",
          slug:"c",
        },
      ],
    },
    Sem4: {
      ebook: [
        
        {
          image: "/book logo/chem logo.png",
          pdf: "/bookdoc/Chemistry engineering ebook.pdf",
          name: "Chemistry for Engineering",
        },
        {
          image: "/book logo/c lang pic.png",
          pdf: "/bookdoc/Let us c -ebook.pdf",
          name: "C Programming",

        },
      ],
      playlist: [
        {
          image: "/thumbnail/chemyoutube.png",
          link: "https://www.youtube.com/playlist?list=PLW1Y7Rfg4m8Jhs-s_VfYWgWzwTqYUvxJb",
          name: "Chemistry for Engineering",
          slug:"ch",
        },
        {
          image: "/book logo/english logo.png",
          link: "/bookdoc/english ebook.pdf",
          name: "English",
          slug:"en",
        },
        {
          image: "/book logo/c lang pic.png",
          link: "/bookdoc/Let us c -ebook.pdf",
          name: "C programming",
          slug:"c",
        },
      ],
    },
    Sem5: {
      ebook: [
        
        {
          image: "/book logo/chem logo.png",
          pdf: "/bookdoc/Chemistry engineering ebook.pdf",
          name: "Chemistry for Engineering",
        },
        {
          image: "/book logo/c lang pic.png",
          pdf: "/bookdoc/Let us c -ebook.pdf",
          name: "C Programming",

        },
      ],
      playlist: [
        {
          image: "/thumbnail/chemyoutube.png",
          link: "https://www.youtube.com/playlist?list=PLW1Y7Rfg4m8Jhs-s_VfYWgWzwTqYUvxJb",
          name: "Chemistry for Engineering",
          slug:"ch",
        },
        {
          image: "/book logo/english logo.png",
          link: "/bookdoc/english ebook.pdf",
          name: "English",
          slug:"en",
        },
        {
          image: "/book logo/c lang pic.png",
          link: "/bookdoc/Let us c -ebook.pdf",
          name: "C programming",
          slug:"c",
        },
      ],
    },
    Sem6: {
      ebook: [
        
        {
          image: "/book logo/chem logo.png",
          pdf: "/bookdoc/Chemistry engineering ebook.pdf",
          name: "Chemistry for Engineering",
        },
        {
          image: "/book logo/c lang pic.png",
          pdf: "/bookdoc/Let us c -ebook.pdf",
          name: "C Programming",

        },
      ],
      playlist: [
        {
          image: "/thumbnail/chemyoutube.png",
          link: "https://www.youtube.com/playlist?list=PLW1Y7Rfg4m8Jhs-s_VfYWgWzwTqYUvxJb",
          name: "Chemistry for Engineering",
          slug:"ch",
        },
        {
          image: "/book logo/english logo.png",
          link: "/bookdoc/english ebook.pdf",
          name: "English",
          slug:"en",
        },
        {
          image: "/book logo/c lang pic.png",
          link: "/bookdoc/Let us c -ebook.pdf",
          name: "C programming",
          slug:"c",
        },
      ],
    },
    Sem7: {
      ebook: [
        
        {
          image: "/book logo/chem logo.png",
          pdf: "/bookdoc/Chemistry engineering ebook.pdf",
          name: "Chemistry for Engineering",
        },
        {
          image: "/book logo/c lang pic.png",
          pdf: "/bookdoc/Let us c -ebook.pdf",
          name: "C Programming",

        },
      ],
      playlist: [
        {
          image: "/thumbnail/chemyoutube.png",
          link: "https://www.youtube.com/playlist?list=PLW1Y7Rfg4m8Jhs-s_VfYWgWzwTqYUvxJb",
          name: "Chemistry for Engineering",
          slug:"ch",
        },
        {
          image: "/book logo/english logo.png",
          link: "/bookdoc/english ebook.pdf",
          name: "English",
          slug:"en",
        },
        {
          image: "/book logo/c lang pic.png",
          link: "/bookdoc/Let us c -ebook.pdf",
          name: "C programming",
          slug:"c",
        },
      ],
    },
    Sem8: {
      ebook: [
        
        {
          image: "/book logo/chem logo.png",
          pdf: "/bookdoc/Chemistry engineering ebook.pdf",
          name: "Chemistry for Engineering",
        },
        {
          image: "/book logo/c lang pic.png",
          pdf: "/bookdoc/Let us c -ebook.pdf",
          name: "C Programming",

        },
      ],
      playlist: [
        {
          image: "/thumbnail/chemyoutube.png",
          link: "https://www.youtube.com/playlist?list=PLW1Y7Rfg4m8Jhs-s_VfYWgWzwTqYUvxJb",
          name: "Chemistry for Engineering",
          slug:"ch",
        },
        {
          image: "/book logo/english logo.png",
          link: "/bookdoc/english ebook.pdf",
          name: "English",
          slug:"en",
        },
        {
          image: "/book logo/c lang pic.png",
          link: "/bookdoc/Let us c -ebook.pdf",
          name: "C programming",
          slug:"c",
        },
      ],
    },
  },
];

const Semester = () => {
  const [selectedSemester, setSelectedSemester] = useState<string>("Sem1");

  const handleButtonClick = (sem: string) => {
    setSelectedSemester(sem);
  };

  const currentData = semesterData[0][selectedSemester] || {
    ebook: [],
    playlist: [],
  };

  return (
    <section className="w-full bg-black h-full flex flex-col gap-[36px] px-4 sm:px-8 py-[36px]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#E41B3F"
      />
      <div className="text-[24px] sm:text-[40px] opacity-100 font-DM_Sans items-center justify-center font-bold flex text-text">
        Choose Your <div className="text-red ml-2">Semester</div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[80%] sm:w-[50%] grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-4 text-text">
          {Object.keys(semesterData[0]).map((sem) => (
            <button
              key={sem}
              onClick={() => handleButtonClick(sem)}
              className={`${
                selectedSemester === sem ? "bg-red" : ""
              } flex justify-center border-2 border-red px-2 py-[0.3rem] rounded-md transform transition-transform duration-200 hover:scale-105`}
            >
              {sem.replace("Sem", "Sem-")}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col">
        <h2 className="text-[24px] sm:text-[30px] font-medium text-text py-4 sm:py-10 text-center">E-Books</h2>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          {currentData.ebook.map((book, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-[12rem] h-[15rem] sm:w-[12rem] sm:h-[15rem] justify-center bg-black rounded-md shadow-lg border-text border-[1.5px] transform transition-transform duration-200 hover:scale-105 group"
            >
              <img src={book.image} alt={book.name} className="w-full h-full" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center">
                <span className="text-white text-sm">{book.name}</span>
                <a
                  href={book.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-[24px] sm:text-[30px] font-medium text-text py-4 sm:py-10 text-center">Playlists</h2>
        <div className="flex flex-wrap gap-4 items-center justify-center">
            
          <CategoryCard/>
        </div>
      </div>
      {/* <Subjects /> */}
    </section>
  );
};

export default Semester;