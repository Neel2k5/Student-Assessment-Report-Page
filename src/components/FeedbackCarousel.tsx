import { useState } from "react";
import type { ProcessedFeedback } from "../types/ProcessedFeedback";
import { getColorHex } from "../lib/helper";

const FeedbackCarousel = ({ fdata }: { fdata: ProcessedFeedback[] }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);


  return (
    <div className="flex flex-col gap-2">
      {fdata.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const colorHex = getColorHex(item.score);

        return (
          <div
            key={index}
            onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
          >
            <div
              className="font-inter text-2xl px-7 p-2 shadow-md transition-all duration-300 hover:bg-[#eaeaea]"
              style={{ color: !isExpanded ? `#${colorHex}` : "#868686" }}
            >
              {item.category}
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col p-3 px-7 bg-[#E4E4E4]">
                <div className="flex text-2xl justify-between">
                  <div>{item.category} feedback</div>
                  <div className="flex gap-1">
                    <div style={{ color: `#${colorHex}` }}>{item.score}</div>
                    <div>/9</div>
                  </div>
                </div>

                <div className="text-[#646464] text-xl font-inter italic mt-2">
                  {item.detailedFeedback}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeedbackCarousel;
