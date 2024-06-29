import React from "react";

type Video = {
  index: string;
  thumbnailUrl: string;
  videoTitle: string;
  videoLink: string;
  videoDurationInSeconds: number;
};

type VideoAccordionProps = {
  videos: Video[];
  checkboxStatus: Record<string, boolean>;
  onCheckboxChange: (index: string) => void;
};

const formatDuration = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
};

const VideoAccordion: React.FC<VideoAccordionProps> = ({
  videos,
  checkboxStatus,
  onCheckboxChange,
}) => {
  return (
    <div className="accordion">
      {videos.map((video) => (
        <div key={video.index} className="video-item p-4 border-b">
          <div className="flex items-center">
            <img
              src={video.thumbnailUrl}
              alt={video.videoTitle}
              className="w-16 h-16 mr-4"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{video.videoTitle}</h3>
              <p className="text-sm text-gray-500">
                Duration: {formatDuration(video.videoDurationInSeconds)}
              </p>
            </div>
            <a
              href={video.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mr-4"
            >
              Watch
            </a>
            <input
              type="checkbox"
              checked={checkboxStatus[video.index] || false}
              onChange={() => onCheckboxChange(video.index)}
              className="form-checkbox"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoAccordion;
