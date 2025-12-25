import { useEffect, useState } from "react";
import type { ProcessedFeedback } from "../types/ProcessedFeedback";
import FeedbackCarousel from "./FeedbackCarousel";
import { ressolveFeedback } from "../lib/helper";

type FeedbackProps = {
  pronounciation: number;
  fluency: number;
  vocabulary: number;
  grammer: number;
};


/**
 * Feedback Component
 * Takes the scores of the different categories as props
 * @param pronounciation
 * @param fluency
 * @param vocabulary
 * @param grammer
 * @returns Feedback component
 */
const Feedback = ({
  pronounciation,
  fluency,
  vocabulary,
  grammer,
}: FeedbackProps) => {
  const [processedData, setProcessedData] = useState<ProcessedFeedback[]>([]);
  useEffect(() => {
    const entries: ProcessedFeedback[] = [
      {
        category: "Pronunciation",
        score: pronounciation,
        detailedFeedback: ressolveFeedback(pronounciation),
      },
      {
        category: "Fluency",
        score: fluency,
        detailedFeedback: ressolveFeedback(fluency),
      },
      {
        category: "Vocabulary",
        score: vocabulary,
        detailedFeedback: ressolveFeedback(vocabulary),
      },
      {
        category: "Grammar",
        score: grammer,
        detailedFeedback: ressolveFeedback(grammer),
      },
    ];
    setProcessedData(entries);
  }, []);
  
  return (
    <div className="py-2 px-7 bg-white drop-shadow-sm h-fit w-full flex flex-col">
      <div className="text-[#8A8A8A] text-xl">Feedback</div>
      <div>
        
        <FeedbackCarousel fdata={processedData} />
      </div>
    </div>
  );
};

export default Feedback;
