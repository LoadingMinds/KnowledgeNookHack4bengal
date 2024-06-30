"use client";
import React, { useEffect, useState } from "react";
import ProgressBar from "react-animated-progress-bar";

const Profile = () => {
  const [progressData, setProgressData] = useState<
    { id: number; subject: string; progress: number }[]
  >([]);

  const userData = {
    name: "Neelakshi Das",
    email: "neelakshidas2003@gmail.com",
    profilePicture: "/assets/avatar1.svg",
    education: {
      year: "3",
      semester: "2nd",
      college: "Academy of Technology",
    },
    progress: [
      { id: 1, subject: "DSA", progress: 75 },
      { id: 2, subject: "Mathematics", progress: 85 },
      { id: 3, subject: "Chemistry", progress: 90 },
      { id: 4, subject: "Biology", progress: 70 },
    ],
  };

  useEffect(() => {
    // Initialize progress data
    setProgressData(userData.progress);
  }, []);

  // Function to manually update progress
  const updateProgress = (id: number, newProgress: number) => {
    setProgressData((currentData) =>
      currentData.map((item) =>
        item.id === id ? { ...item, progress: newProgress } : item
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white p-12 gap-8">
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* Left part - Profile information */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <div className="bg-charcoal rounded-lg shadow-md p-6 text-white h-full group relative">
            <div className="flex flex-col items-center md:flex-col md:items-start mb-6">
              <img
                src={userData.profilePicture || "/assets/default-avatar.svg"}
                alt={`Profile of ${userData.name}`}
                className="w-24 h-24 rounded-full object-cover mr-6 border-4 border-red md:mb-4 md:mr-0"
              />
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{userData.name}</h2>
                <p className="text-gray-400">{userData.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right part - Education details */}
        <div className="flex-1">
          <div className="bg-charcoal rounded-lg shadow-md p-6 text-white h-full">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <span className="font-medium">Year:</span>
                <span>{userData.education.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Semester:</span>
                <span>{userData.education.semester}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">College:</span>
                <span>{userData.education.college}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard - Progress tracking */}
      <div className="bg-charcoal rounded-lg shadow-md p-6 text-white">
        <h2 className="text-2xl font-bold mb-6">Progress Dashboard</h2>
        <div className="flex flex-col gap-4">
          {progressData.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <span className="font-medium">{item.subject}:</span>
              <ProgressBar
                width="50%"
                height="10px"
                rect
                fontColor="gray"
                percentage={item.progress.toString()}
                rectPadding="1px"
                rectBorderRadius="20px"
                trackPathColor="transparent"
                bgColor="red"
                trackBorderColor="grey"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
