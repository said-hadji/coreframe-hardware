import { whyUsFeatures } from "../../data";

export default function ValueProposition() {
  return (
    <div className="w-full bg-zinc-950 py-20">
      <div className="container">
        <h1 className="text-white/80 text-xl lg:text-2xl font-bold font-display">
          Why choose us?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {whyUsFeatures.map((f) => {
            const { id, title, description } = f;

            return (
              <div key={id} className="bg-zinc-875 border border-zinc-775 p-8 rounded-4xl space-y-4">
                <h1 className="text-lg lg:text-xl text-white font-medium font-display">
                  {title}
                </h1>
                <p className="text-white/70 font-sans leading-7">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
