import { useId } from "react";

export default function Star({
  filled = false,
  fillPercent,
  size = 20,
  color = "#f59e0b",
  emptyColor = "#f59e0b",
  strokeWidth = 1.5,
  className = "",
}) {
  const id = useId();
  const pct =
    typeof fillPercent === "number"
      ? Math.max(0, Math.min(100, fillPercent))
      : filled
        ? 100
        : 0;

  const points =
    "12,2 14.35,8.76 21.51,8.91 15.8,13.24 17.88,20.09 12,16 6.12,20.09 8.2,13.24 2.49,8.91 9.65,8.76";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={`star-clip-${id}`}>
          <rect x="0" y="0" width={`${pct}%`} height="24" />
        </clipPath>
      </defs>

      <polygon
        points={points}
        fill="none"
        stroke={emptyColor}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />

      {pct > 0 && (
        <polygon
          points={points}
          fill={color}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          clipPath={`url(#star-clip-${id})`}
        />
      )}
    </svg>
  );
}