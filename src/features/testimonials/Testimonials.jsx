import { data } from "../../data/data";
import StarRating from "../../components/StarRating";

export default function Testimonials() {
  return (
    <div className="w-full bg-zinc-950 py-20">
      <div className="container">
        <h1 className="text-white/80 text-xl lg:text-2xl font-bold font-display">
          Testimonials
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
          {data.testimonials.map((f) => {
            const { id, name, description, rating } = f;

            return (
              <div
                key={id}
                className="relative bg-zinc-875 border border-zinc-775 p-8 rounded-4xl space-y-4"
              >
                <h1 className="text-lg lg:text-xl text-white font-medium font-display">
                  {name}
                </h1>
                <p className="text-white/70 font-sans leading-7 line-clamp-3">
                  {description}
                </p>
                <StarRating rating={rating} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
