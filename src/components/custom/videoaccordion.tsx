import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import VideoCard from "./videocard";
import { Dispatch, SetStateAction } from "react";
type Video = {
  index: string;
  thumbnailUrl: string;
  videoTitle: string;
  videoLink: string;
  channelName: string;
  views: string;
  uploadedTime: string;
  videoTime: string;
  videoDurationInSeconds: number;
};
type TVideoAccordion = {
  day: number;
  videos: number;
  videosForDay: Video[];
  checkboxStatus: Record<string, boolean>;
  setCheckboxStatus: Dispatch<SetStateAction<Record<string, boolean>>>;
};

export default function VideoAccordion({
  day,
  videos,
  videosForDay,
  checkboxStatus,
  setCheckboxStatus,
}: TVideoAccordion) {
  function calculateProgress() {
    const totalVideos = videosForDay.length;
    const startIndex = parseInt(videosForDay[0].index);
    const endIndex = parseInt(videosForDay[videosForDay.length - 1].index);
    let totalWatchedVideos = 0;

    for (let i = startIndex; i <= endIndex; i++) {
      if (checkboxStatus[i.toString()] === true) {
        totalWatchedVideos++;
      }
    }

    return (totalWatchedVideos / totalVideos) * 100;
  }

  return (
    <div className="mx-auto py-1">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center w-full">
              <h1 className="font-bold text-lg flex-shrink-0">
                Day - {day}{" "}
                <span className="text-muted-foreground font-normal text-base ml-1 block">
                  {videos} videos
                </span>
              </h1>
              <div className="flex-grow mx-4">
                <div className="flex justify-center">
                  <Progress
                    value={calculateProgress()}
                    className="w-full md:w-96"
                  />
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {videosForDay.map((video) => (
              <div key={video.index} className="mb-4">
                <VideoCard
                  video={video}
                  checkboxStatus={checkboxStatus}
                  setCheckboxStatus={setCheckboxStatus}
                />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
