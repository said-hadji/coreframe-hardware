import clsx from "clsx";
import { useCoreframe } from "../../hooks/useCoreframe";
import Button from "../../components/Button";

export default function Home() {
  const { isCart } = useCoreframe();

  return (
    <div
      className={clsx(
        "fill-screen bg-[url(/images/heroImg.jpg)] bg-cover bg-center",
      )}
    >
      {isCart && <div className={clsx("fixed-overlay backdrop-blur-md")} />}

      <div className="absolute top-0 left-0 fill-screen bg-linear-to-r from-zinc-950 via-zinc-950/95 to-zinc-950/30"></div>

      <div className="container fill-parent">
        <div className="absolute z-60 top-1/2 -translate-y-1/2">
          <div>
            <h2 className="text-5xl sm:text-6xl xl:text-8xl font-extrabold font-display text-white">
              Build it right,
            </h2>
            <h1 className="text-5xl sm:text-6xl xl:text-8xl font-extrabold font-display text-blue-200">
              the first time
            </h1>
          </div>

          <p className="text-zinc-200/70 text-sm sm:text-base xl:text-lg font-sans mt-6">
            Every component, prebuilt PC, and peripheral you need, in stock and
            ready to ship today.
          </p>

          <div className="lg:mt-15 xl:mt-13">
            <Button
              type={"discover_new"}
              onClick={() => console.log("clicked")}
              href={"#google"}
            >
              Discover New
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
