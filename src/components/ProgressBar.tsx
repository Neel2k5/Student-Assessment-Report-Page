import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getColorHex } from "../lib/helper";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

/**
 * Props for the ProgressBar component.
 */
type ProgressBarProps = {
  /** Label shown above the progress bar */
  label: string;
  /** Current score value */
  value: number;
  /** Maximum possible score (default: 9) */
  max?: number;
  /** Hex color (with `#`) for the filled portion of the bar */
  color: string;
};

/**
 * Renders a horizontal stacked progress bar representing a score.
 *
 * - Filled portion represents the achieved value
 * - Remaining portion fills the rest of the bar
 * - Colors are dynamically applied based on score
 *
 * @param {ProgressBarProps} props - Progress bar configuration
 * @returns {JSX.Element} Progress bar component
 */
const ProgressBar = ({
  label,
  value,
  max = 9,
  color,
}: ProgressBarProps) => {
  const remaining = max - value;

  const data = {
    labels: [label],
    datasets: [
      {
        data: [value],
        backgroundColor: color,
        barThickness: 8,
        borderRadius: 999,
        stack: "progress",
      },
      {
        data: [remaining],
        backgroundColor: "#e5e7eb",
        barThickness: 8,
        borderRadius: 999,
        stack: "progress",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        min: 0,
        max,
        stacked: true,
        display: false,
      },
      y: {
        stacked: true,
        display: false,
      },
    },
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  };

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs">
        <span className="text-gray-600 text-lg">{label}</span>
        <span>
          <span
            className="text-lg"
            style={{ color: `#${getColorHex(value)}` }}
          >
            {value}
          </span>
          <span className="text-gray-600 text-lg">/{max}</span>
        </span>
      </div>

      <div className="h-[8px] w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ProgressBar;
