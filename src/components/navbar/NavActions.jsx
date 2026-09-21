import { Search, ShoppingBasket, User } from "lucide-react";
import Button from "../Button";

export default function NavActions({ cartCount }) {
  const hasItem = cartCount > 0;

  return (
    <div className={`flex-align gap-6`}>
      <Button as="button">
        <Search
          size={20}
          strokeWidth={1.2}
          className={`text-gray-500 hover:text-gray-900`}
        />
      </Button>

      <Button as="button" type={"cart_button"}>
        <ShoppingBasket
          size={20}
          strokeWidth={1.2}
          className={`text-zinc-500 hover:text-zinc-900`}
        />

        {hasItem && (
          <span className="absolute -top-2 -right-1 bg-bg-d-blue pl-1 pr-[4.3px] rounded-full text-txt-l-white text-[10px]">
            {cartCount}
          </span>
        )}
      </Button>

      <Button as="a" href="#signUp">
        <User
          size={20}
          strokeWidth={1.2}
          className={`text-zinc-500 hover:text-zinc-900`}
        />
      </Button>
    </div>
  );
}
