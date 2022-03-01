import { cleanPercentage } from "@app/helpers/percentage.helper";

type ProgressProps = {
  percentage: number;
  color: string;
  text?: string;
};

const Progress: React.FC<ProgressProps> = ({ percentage, color, text }) => {
  const pct = cleanPercentage(percentage);

  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle color="#121212" pct={100} />
        <Circle color={color} pct={pct} />
      </g>
      <Text text={text} />
    </svg>
  );
};

const Text: React.FC<{ text?: string }> = ({ text = "" }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fill="#fff"
    >
      {text}
    </text>
  );
};

const Circle: React.FC<{ color: string; pct: number }> = ({ color, pct }) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;

  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth="0.7rem"
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
      className="transition-all duration-75"
    ></circle>
  );
};

export default Progress;
