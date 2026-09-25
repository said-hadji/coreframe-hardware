import { Link } from "react-router";
import clsx from "clsx";
import { useCoreframe } from "../../hooks/useCoreframe";
import Button from "../../components/Button";

const states = [
  { id: 1, title: "Customers", number: 1000 },
  { id: 2, title: "Products", number: 500 },
];

export default function Home() {
  const { isCart } = useCoreframe();

  return (
    <div
      className={clsx(
        "relative fill-screen bg-[url(/images/heroImg.jpg)] bg-cover bg-center",
      )}
    >
      {isCart && <div className={clsx("fixed-overlay backdrop-blur-md")} />}

      <div className="absolute top-0 left-0 w-full h-screen bg-linear-to-r from-zinc-950 via-zinc-950/95 to-zinc-950/30"></div>

      <div className="container relative fill-parent overflow-hidden">
        <div className="absolute inset-0 flex-col-justify px-2 sm:px-3.5">
          <div>
            <h2 className="text-5xl sm:text-6xl xl:text-8xl font-extrabold font-display text-white">
              Build it right,
            </h2>
            <h1 className="text-5xl sm:text-6xl xl:text-8xl font-extrabold font-display text-purple">
              the first time
            </h1>
          </div>

          <div className="flex-align gap-6 mt-8 ml-2">
            {states.map((s) => {
              return (
                <div className="flex-align gap-4">
                  <div className="space-x-2">
                    <span className="text-4xl text-white font-display font-medium">
                      +{s.number}
                    </span>
                    <span className="text-xl text-white/70 font-display font-medium">
                      {s.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 lg:mt-9 xl:mt-11 sm:pl-1.5">
            <Button as={Link} to="/new" variant="discover_new" href={"#google"}>
              Discover New
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
