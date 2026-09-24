import clsx from "clsx";
import Button from "../Button";
import { ArrowRight } from "lucide-react";
import ProductCard from "../ProductCard";

export default function Suggestions({ className, products }) {
  return (
    <div className={clsx("w-full bg-zinc-950", className)}>
      <div className="container flex-column gap-10 py-20">
        <div className="flex-between">
          <h1 className="text-xl lg:text-2xl text-white/80 font-bold font-display">
            Suggestions
          </h1>
          <Button type="show_more" href="#show_more">
            <span>Show more</span>
            <ArrowRight size={20} strokeWidth={1.2} />
          </Button>
        </div>

        <div className="w-full overflow-x-auto snap-x snap-mandatory">
          <div className="grid grid-flow-col auto-cols-[80%] sm:auto-cols-70 lg:grid-flow-row lg:grid-cols-4 lg:auto-cols-auto gap-2 sm:gap-4">
            {products.map((p) => {
              const {
                id,
                title,
                description,
                rating,
                price,
                image,
                availability,
                discount,
              } = p;

              return (
                <ProductCard
                  id={id}
                  title={title}
                  description={description}
                  rating={rating}
                  price={price}
                  image={image}
                  availability={availability}
                  discount={discount}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
