import { BuyNow, AddToCart } from "./Actions";
import StarRating from "./StarRating";
import { getDiscountedPrice } from "../utils/getDiscountedPrice";
import clsx from "clsx";
import Button from "./Button";
import { formatCurrency } from "../utils/formatCurrency";

export default function ProductCard({
  id,
  image,
  title,
  description,
  rating,
  price,
  availability,
  discount,
}) {
  const isDiscount = discount > 0;
  const priceAfterDiscount = getDiscountedPrice({ price, discount });

  return (
    <a
      key={id}
      href={`#product-${id}`}
      className={`group bg-zinc-875 border border-zinc-775 rounded-4xl flex-column overflow-hidden snap-center`}
    >
      <div className={`w-full aspect-square bg-white overflow-hidden`}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-107 duration-300"
        />
      </div>

      <div className="flex-1 flex-col-between gap-6.5 p-2">
        <div>
          <h2 className="font-display font-medium text-lg text-white/80 mb-2 truncate">
            {title}
          </h2>

          <p className={`text-sm text-white/70 font-sans mb-1 line-clamp-1`}>
            {description}
          </p>

          <div className="flex-align gap-1 mb-3.5">
            <span className={`text-sm text-white/80 mt-0.5`}>{rating}</span>
            <StarRating rating={rating} size={15} />
          </div>

          <div className={clsx({ "flex-align gap-1.5": isDiscount })}>
            <span className="font-display font-extrabold text-white text-xl leading-none">
              {formatCurrency(priceAfterDiscount)}
            </span>
            {isDiscount && (
              <span className="text-[15px] text-white/60 font-sans line-through leading-none">
                {formatCurrency(price)}
              </span>
            )}
          </div>
        </div>

        {availability ? (
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2`}>
            <BuyNow />
            <AddToCart />
          </div>
        ) : (
          <Button type={"notify_user"} href="#notify_user">
            Notify me when available
          </Button>
        )}
      </div>
    </a>
  );
}
