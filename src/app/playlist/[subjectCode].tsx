// pages/playlist/[subjectCode].tsx

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import VideoAccordion from "@/components/custom/videoaccordion"; 

type Video = {
  index: string;
  thumbnailUrl: string;
  videoTitle: string;
  videoLink: string;
  videoDurationInSeconds: number;
};

const PlaylistPage = () => {
  const router = useRouter();
  const { subjectCode } = router.query;
  const [videos, setVideos] = useState<Video[]>([]);
  const [checkboxStatus, setCheckboxStatus] = useState<Record<string, boolean>>(
    {}
  );
  const [daysOption, setDaysOption] = useState(5);

  useEffect(() => {
    if (subjectCode) {
      const data: Video[] = require(`../../data/${subjectCode}.json`);
      setVideos(data);
    }
  }, [subjectCode]);

  useEffect(() => {
    const savedStatus = localStorage.getItem(`checkboxStatus-${subjectCode}`);
    if (savedStatus) {
      setCheckboxStatus(JSON.parse(savedStatus));
    }
  }, [subjectCode]);

  useEffect(() => {
    localStorage.setItem(
      `checkboxStatus-${subjectCode}`,
      JSON.stringify(checkboxStatus)
    );
  }, [checkboxStatus, subjectCode]);

  const handleCheckboxChange = (index: string) => {
    setCheckboxStatus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const groupedVideos: Video[][] = [];
  let currentDay: Video[] = [];
  let currentTotalTime = 0;
  const totalDurationPerDay = (daysOption * 3600) / daysOption;

  videos.forEach((video) => {
    const videoDuration = video.videoDurationInSeconds;

    if (currentTotalTime + videoDuration <= totalDurationPerDay) {
      currentDay.push(video);
      currentTotalTime += videoDuration;
    } else {
      groupedVideos.push(currentDay);
      currentDay = [video];
      currentTotalTime = videoDuration;
    }
  });

  if (currentDay.length > 0) {
    groupedVideos.push(currentDay);
  }

  return (
    <div>
      <h1>Playlist</h1>
      <div>
        {groupedVideos.map((group, index) => (
          <VideoAccordion
            key={index}
            videos={group}
            checkboxStatus={checkboxStatus}
            onCheckboxChange={handleCheckboxChange}
          />
        ))}
      </div>
    </div>
  );
};

export default PlaylistPage;
