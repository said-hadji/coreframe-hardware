import { useEffect, useState } from "react";

const ONE_HOUR = 60 * 60 * 1000;

export default function useCountdown(startTime, endTime) {
  const target = new Date(endTime).getTime();
  const start = new Date(startTime).getTime();
  const [now, setNow] = useState(Date.now);

  useEffect(() => {
    if (!Number.isFinite(target)) return;

    let id;
    const schedule = () => {
      const left = target - Date.now();
      if (left <= 0) return;
      id = setTimeout(
        () => {
          setNow(Date.now());
          schedule();
        },
        left % 1000 || 1000,
      );
    };

    schedule();
    return () => clearTimeout(id);
  }, [target]);

  const remaining = Number.isFinite(target) ? Math.max(target - now, 0) : 0;
  const totalSeconds = Math.ceil(remaining / 1000);
  const started = !Number.isFinite(start) || now >= start;

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    totalHours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    started,
    done: remaining === 0,
    urgent: remaining > 0 && remaining <= ONE_HOUR,
  };
}
