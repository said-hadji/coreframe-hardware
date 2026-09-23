import Button from "../../components/Button";

export default function AutumnOffer() {
  return (
    <div className={`w-full bg-zinc-950`}>
      <div className="container py-20 flex-column gap-10">
        <h1 className="text-white/80 text-xl lg:text-2xl font-bold font-display">
          Autumn offer
        </h1>
        <div
          className={`relative w-full bg-[url(/images/autumn-offer-image.jpg)] bg-no-repeat bg-cover bg-center border border-zinc-875 rounded-4xl overflow-hidden`}
        >
          <div className="absolute inset-0 bg-linear-to-br from-zinc-950 via-zinc-950 to-zinc-900/10"></div>
          <div className="relative z-10 p-5 sm:p-8 flex-col-between gap-10">
            <div className="space-y-4">
              <h1 className="text-xl lg:text-3xl text-white font-extrabold font-display">
                Upgrade your workspace or gaming rig with up to 50% OFF
              </h1>
              <p className="text-sm sm:text-lg text-white/70 max-w-lg">
                Premium audio, ultra-fast peripherals, and desktop
                essentials—now up to 50% off for a limited time
              </p>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center gap-10">
              <a
                href="#autumn_offer"
                className="relative overflow-hidden w-fit inline-flex px-5 py-2.5 bg-purple hover:bg-blue-50 text-black font-medium font-display rounded-full"
              >
                Shop Autumn Deals
              </a>

              <div className="w-fit px-6 py-0.5 bg-white backdrop-blur-sm rounded-full flex-align gap-4 select-none">
                <div>
                  <span className="text-xl text-black/80 font-display font-medium">
                    23h
                  </span>
                </div>

                <div className="px-px py-4 bg-zinc-300"></div>

                <div>
                  <span className="text-xl text-black/80 font-display font-medium">
                    59m
                  </span>
                </div>

                <div className="px-px py-4 bg-zinc-300"></div>

                <div>
                  <span className="text-xl text-black/80 font-display font-medium">
                    59s
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
