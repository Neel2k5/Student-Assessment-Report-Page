import { getColorHex } from "../lib/helper";
import type { ReportData } from "../types/ReportData";
import ProgressBar from "./ProgressBar";
import RingWithCenterText from "./RingWithCenterText";

const OverallData = ({ report_data }: { report_data: ReportData }) => {
  const Overall_Score =
    Math.round(
      90 *
        ((report_data.pronounciation / 9 +
          report_data.fluency / 9 +
          report_data.grammer / 9 +
          report_data.vocabulary / 9) /
          4)
    ) / 10;

  return (
    <div className="bg-white shadow-sm h-fit sm:h-[350px] sm:w-full px-4 py-2">
      <div className="flex flex-col justify-between sm:flex-row gap-4 pb-5 items-center">
        <div className="sm:w-[300px] sm:h-[300px] ml-10 mr-20">
          <RingWithCenterText score={Overall_Score} size={300} />
          <div className="text-[#8A8A8A] mb-2">Overall Score</div>
        </div>

        <div className="flex flex-col px-10 sm:min-w-[800px]">
          <div className="flex justify-end">
            <div>
              <div className="text-6xl italic mt-2 font-inter">
                {report_data.Name}
              </div>
              <div className="text-3xl italic text-[#FF01E6]  font-inter">
                {report_data.Report_Date}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-6">
            <ProgressBar
              label="Pronunciation"
              value={report_data.pronounciation}
              color={"#" + getColorHex(report_data.pronounciation)}
            />
            <ProgressBar
              label="Fluency"
              value={report_data.fluency}
              color={"#" + getColorHex(report_data.fluency)}
            />
            <ProgressBar
              label="Vocabulary"
              value={report_data.vocabulary}
              color={"#" + getColorHex(report_data.vocabulary)}
            />
            <ProgressBar
              label="Grammar"
              value={report_data.grammer}
              color={"#" + getColorHex(report_data.grammer)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallData;
