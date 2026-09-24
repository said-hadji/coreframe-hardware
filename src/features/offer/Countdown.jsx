import { useState } from "react";
import clsx from "clsx";
import useCountdown from "../../hooks/useCountdown";

const pad = (n) => String(n).padStart(2, "0");
const SIZE = "text-3xl sm:text-4xl";

function Digit({ char }) {
  const [current, setCurrent] = useState(char);
  const [outgoing, setOutgoing] = useState(null);

  if (char !== current) {
    setCurrent(char);
    setOutgoing(current);
  }

  return (
    <span className="relative block h-[1.2em] overflow-hidden leading-[1.25em]">
      {outgoing !== null && (
        <span
          key={`out-${outgoing}`}
          className="absolute inset-0 animate-roll-out"
          onAnimationEnd={() => setOutgoing(null)}
        >
          {outgoing}
        </span>
      )}
      <span
        key={`in-${current}`}
        className={clsx("block", outgoing !== null && "animate-roll-in")}
      >
        {current}
      </span>
    </span>
  );
}

function TimeUnit({ value, label, urgent }) {
  const text = pad(value);

  return (
    <div aria-hidden="true" className="flex flex-col items-center gap-1.5">
      <div
        className={clsx(
          "flex rounded-xl px-3 py-1.5 font-display font-semibold tabular-nums ring-1 transition-colors duration-500",
          SIZE,
          urgent
            ? "bg-rose-500/10 text-rose-200 ring-rose-400/40"
            : "bg-white/5 backdrop-blur-sm text-white/90 ring-white/10",
        )}
      >
        {text.split("").map((char, i) => (
          <Digit key={text.length - i} char={char} />
        ))}
      </div>
      <span className="text-xs text-white/50">{label}</span>
    </div>
  );
}

function Separator() {
  return (
    <span
      aria-hidden="true"
      className={clsx(
        "py-1.5 font-display font-semibold leading-[1.2em] text-white/50",
        SIZE,
      )}
    >
      :
    </span>
  );
}

export default function Countdown({ startTime, endTime, showDays = true, className }) {
  const { days, hours, totalHours, minutes, seconds, started, done, urgent } =
    useCountdown(startTime, endTime);

  const shownHours = showDays ? hours : totalHours;
  const label =
    [
      showDays && `${days} days`,
      `${shownHours} hours`,
      `${minutes} minutes`,
      `${seconds} seconds`,
    ]
      .filter(Boolean)
      .join(", ") + " remaining";

  if (done || !started) return null;

  return (
    <div
      role="timer"
      aria-label={label}
      className={clsx("inline-flex items-start gap-2", className)}
    >
      {showDays && (
        <>
          <TimeUnit value={days} label="days" urgent={urgent} />
          <Separator />
        </>
      )}
      <TimeUnit value={shownHours} label="hours" urgent={urgent} />
      <Separator />
      <TimeUnit value={minutes} label="minutes" urgent={urgent} />
      <Separator />
      <TimeUnit value={seconds} label="seconds" urgent={urgent} />
    </div>
  );
}
