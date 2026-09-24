export default function Countdown() {
  return (
    <div className="w-fit px-6 py-0.5 bg-white backdrop-blur-sm rounded-full flex-align gap-4 select-none">
      <div>
        <span className="text-xl text-black/80 font-display font-medium">
          23h
        </span>
      </div>

      <div className="px-px py-4 bg-zinc-300"></div>

      <div>
        <span className="text-xl text-black/80 font-display font-medium">
          59m
        </span>
      </div>

      <div className="px-px py-4 bg-zinc-300"></div>

      <div>
        <span className="text-xl text-black/80 font-display font-medium">
          59s
        </span>
      </div>
    </div>
  );
}
