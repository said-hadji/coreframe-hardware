import clsx from "clsx";

const buttonStyle = "font-display font-medium rounded-full py-2";

export function BuyNow({ className }) {
  return (
    <a
      href="#buy_now"
      className={clsx(
        "bg-zinc-775 hover:bg-zinc-700 text-center text-white/80",
        buttonStyle,
        className,
      )}
    >
      Buy Now
    </a>
  );
}

export function AddToCart({ className }) {
  return (
    <button
      className={clsx(
        "bg-blue-300 hover:bg-blue-100 text-center text-black/80 cp",
        buttonStyle,
        className,
      )}
    >
      Add to cart
    </button>
  );
}
