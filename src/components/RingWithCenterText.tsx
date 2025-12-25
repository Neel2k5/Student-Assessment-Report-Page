import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getColorHex } from "../lib/helper";

ChartJS.register(ArcElement, Tooltip, Legend);

type RingWithCenterProps = {
  score: number;
  max?: number;
  size?: number; // width/height in px
};

/**
 * Renders a doughnut chart with a centered score
 */
const RingWithCenterText = ({
  score,
  max = 9,
  size = 300,
}: RingWithCenterProps) => {
  const data = {
    datasets: [
      {
        data: [score, max - score],
        backgroundColor: [`#${getColorHex(score)}`, "#e5e7eb"],
        borderWidth: 0,
      },
    ],
  };

  const centerTextPlugin = {
    id: "centerText",
    beforeDraw(chart: any) {
      const { ctx, width, height } = chart;
      ctx.save();

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const centerX = width / 2;
      const centerY = height / 2;
      const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;

      const scoreFontSize = innerRadius * 0.6;
      const slashFontSize = innerRadius * 0.45;

      ctx.font = `${scoreFontSize}px Inter`;
      ctx.fillStyle = `#${getColorHex(score)}`;
      ctx.fillText(`${score}`, centerX - innerRadius * 0.15, centerY);

      ctx.font = `${slashFontSize}px Inter`;
      ctx.fillStyle = "#646464";
      ctx.fillText(`/ ${max}`, centerX + innerRadius * 0.65, centerY + innerRadius * 0.05);

      ctx.restore();
    },
  };

  const options: ChartOptions<"doughnut"> = {
    cutout: "80%",
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  };

  return (
    <div style={{ width: size, height: size }}>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
};

export default RingWithCenterText;
