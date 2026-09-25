import clsx from "clsx";
import { navbarItems } from "../../data/index";
import NavActions from "./NavActions";

export default function Navbar() {
  return (
    <div className={clsx("fixed-top bg-zinc-50")}>
      <div className="container flex-between py-6">
        <h1 className={clsx("text-lg text-black font-extrabold font-display")}>
          Coreframe
        </h1>
        <div className="hidden md:block">
          <div className="flex-align gap-12">
            {navbarItems.map((item) => {
              const { id, label } = item;

              return (
                <a
                  href="#"
                  key={id}
                  className={clsx("text-sm text-zinc-500 hover:text-zinc-900")}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>

        <NavActions cartCount={0} />
      </div>
    </div>
  );
}
