import type { ReportData } from "../types/ReportData";
import Feedback from "./Feedback";
import OverallData from "./OverallData";

const ReportItem = ({ data }: { data: ReportData }) => {
  return (
    <div className="flex m-2 gap-2 flex-col items-center">
      <OverallData report_data={data}/>
      <Feedback
        pronounciation={data.pronounciation}
        vocabulary={data.vocabulary}
        fluency={data.fluency}
        grammer={data.grammer}
      />
    </div>
  );
};

export default ReportItem;
