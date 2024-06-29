"use client";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/spotlight";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { PinContainer } from "@/components/ui/3d-pin";
import Link from "next/link";
import subjects from "@/data/subjects.json"
type TSubjectCard = {
    subjectCode: string;
    subjectName: string;
  };
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
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Chemistry for Engineering",
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
          image: "/thumbnail/chemyoutube.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Chemistry for Engineering",
        },
        {
          image: "/thumbnail/electricalyoutube.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
        {
          image: "/thumbnail/mathyoutube.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Maths for Engineering",
        },
      ],
    },
    Sem2: {
      ebook: [
        {
          image: "/book logo/electrical logo.png",
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Engineering",
        },
        {
          image: "/book logo/electrical logo.png",
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
      ],
      playlist: [
        {
          image: "/book logo/electrical logo.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
        {
          image: "/book logo/electrical logo.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
      ],
    },
    Sem3: {
      ebook: [
        {
          image: "/book logo/electrical logo.png",
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Engineering",
        },
        {
          image: "/book logo/electrical logo.png",
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
      ],
      playlist: [
        {
          image: "/book logo/electrical logo.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
        {
          image: "/book logo/electrical logo.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
      ],
    },
    Sem4: {
      ebook: [
        {
          image: "/book logo/electrical logo.png",
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Engineering",
        },
        {
          image: "/book logo/electrical logo.png",
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
      ],
      playlist: [
        {
          image: "/book logo/electrical logo.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
        {
          image: "/book logo/electrical logo.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
      ],
    },
    Sem5: {
      ebook: [
        {
          image: "/book logo/electrical logo.png",
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Engineering",
        },
        {
          image: "/book logo/electrical logo.png",
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
      ],
      playlist: [
        {
          image: "/book logo/electrical logo.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
        {
          image: "/book logo/electrical logo.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
      ],
    },
    Sem6: {
      ebook: [
        {
          image: "/book logo/electrical logo.png",
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Engineering",
        },
        {
          image: "/book logo/electrical logo.png",
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
      ],
      playlist: [
        {
          image: "/book logo/electrical logo.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
        {
          image: "/book logo/electrical logo.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
      ],
    },
    Sem7: {
      ebook: [
        {
          image: "/book logo/electrical logo.png",
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Engineering",
        },
        {
          image: "/book logo/electrical logo.png",
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
      ],
      playlist: [
        {
          image: "/book logo/electrical logo.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
        {
          image: "/book logo/electrical logo.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
      ],
    },
    Sem8: {
      ebook: [
        {
          image: "/book logo/electrical logo.png",
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Engineering",
        },
        {
          image: "/book logo/electrical logo.png",
          pdf: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
      ],
      playlist: [
        {
          image: "/book logo/electrical logo.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
        {
          image: "/book logo/electrical logo.png",
          link: "/bookdoc/basic electrical engineering ebook.pdf",
          name: "Basic Electrical Engineering",
        },
      ],
    },
  },
];

const Semester = ({ subjectCode, subjectName }: TSubjectCard) => {
  const [selectedSemester, setSelectedSemester] = useState<string>("Sem1");

  const handleButtonClick = (sem: string) => {
    setSelectedSemester(sem);
  };

  const currentData = semesterData[0][selectedSemester] || {
    ebook: [],
    playlist: [],
  };

  return (
    <section className="w-full bg-black h-full flex flex-col gap-[36px] px-4 sm:px-20 py-[36px]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#E41B3F"
      />
      <div className="text-[40px] text-nowrap opacity-100 font-DM_Sans items-center justify-center font-medium flex text-text">
        Choose Your <div className="text-red ml-2">Semester</div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[50%] grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-4 text-text">
          {Object.keys(semesterData[0]).map((sem) => (
            <button
              key={sem}
              onClick={() => handleButtonClick(sem)}
              className={`${
                selectedSemester === sem ? "bg-red" : ""
              } flex- justify-center border-2 border-red px-2 sm:px-10 py-[0.3rem] rounded-md`}
            >
              {sem.replace("Sem", "Sem-")}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col ">
        <h2 className="text-[30px] font-medium text-text py-10">E-Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center ml-12">
          {currentData.ebook.map((book, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-[12rem] h-[15rem] justify-center bg-black rounded-md shadow-lg border-text border-[1.5px] group"
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
        <div className="text-[30px] font-medium text-text py-10">Playlists</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ml-10">
          {currentData.playlist.map((playlist, index) => (
            <div key={index} className="flex flex-col items-center">
                <Link
      href={{ pathname: `/subject/${subjectName}`, query: { subjectCode } }}
      className="group relative block h-64 mx-2 md:mx-0"
    > <PinContainer title={playlist.link} href={`/subject/${subjectName}?${new URLSearchParams({ subjectCode }).toString()}`}>
    <div className="flex h-fit flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] ">
      {/* <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
{playlist.name}
</h3> */}

      <img
        src={playlist.image}
        alt={playlist.name}
        className="w-full h-full mb-2"
      />
      <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
        {playlist.name}
      </h3>
    </div>
  </PinContainer>
  </Link>
            </div>
            
          ))}
          
        </div>
        
      </div>
      
    </section>
  );
};

export default Semester;