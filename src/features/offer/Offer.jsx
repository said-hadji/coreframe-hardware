import { Link } from "react-router";
import Button from "../../components/Button";
import Countdown from "./Countdown";

export default function Offer({ offerData }) {
  const { name, title, description, startTime, endTime } = offerData;

  return (
    <div className="w-full bg-zinc-950">
      <div className="container py-20 flex-column gap-10">
        <h1 className="text-white/80 text-xl lg:text-2xl font-bold font-display">
          {name} offer
        </h1>
        <div
          className="relative w-full bg-[url(/images/autumn-offer-image.jpg)] bg-no-repeat bg-cover bg-center border border-zinc-875 rounded-4xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-br from-zinc-950 via-zinc-950 to-zinc-900/10"></div>
          <div className="relative z-10 p-5 sm:p-8 flex-col-between gap-10">
            <div className="space-y-4">
              <h1 className="text-xl lg:text-3xl text-white font-extrabold font-display">
                {title}
              </h1>
              <p className="text-sm sm:text-lg text-white/70 max-w-lg">
                {description}
              </p>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center gap-10">
              <Button
                as={Link}
                to="/autumn"
                variant="shop_deals"
                style={{ boxShadow: "0px 0px 23px 10px #B8ACF620" }}
              >
                Shop {name} Deals
              </Button>

              <Countdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
