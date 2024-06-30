"use client";
import Link from "next/link";
import { PinContainer } from "@/components/ui/3d-pin";
import { useState } from "react";
export default function CategoryCard(
//   {
//   name,
//   slug,
// }: {
//   name: string;
//   slug: string;
//  }
) {
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
  const [selectedSemester, setSelectedSemester] = useState<string>("Sem1");
  const currentData = semesterData[0][selectedSemester] || {
    ebook: [],
    playlist: [],
  };

 return (
 <>
  {currentData.playlist.map((playlist, index) => (
    <div key={playlist.slug}  className="flex flex-wrap gap-4 items-center justify-center">
    <div key={index} className="flex flex-col items-center transform transition-transform duration-200 hover:scale-105">
      <Link
            href={{
              pathname: `/subject/${playlist.name}`,
              query: { subjectCode: playlist.slug },
            }}
          >
      
        <div className="flex h-fit flex-col p-4 tracking-tight text-slate-100/50 w-[15rem] sm:w-[12rem] sm:h-[15rem] items-center">
          <img
            src={playlist.image}
            alt={playlist.name}
            className="w-full h-full mb-2"
          />
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100  text-center">
            {playlist.name}
          </h3>
        </div>
      
      </Link>
    </div>
    </div>
  ))}
</>
    // <div
    //   key={slug}
    //   className="group relative flex rounded-2xl bg-primary-foreground hover:ring-4 hover:ring-primary transition duration-300"
    // >
    //   <Link
    //         href={{
    //           pathname: `/subject/${name}`,
    //           query: { subjectCode: slug },
    //         }}
    //       >
            
    //         {name}
    //       </Link>
    //   </div>
    
  );
}
