import Navbar from "../components/navbar/Navbar";
import Home from "../features/home/Home";
import SuggestionsSection from "../features/suggestionsSection/SuggestionsSection";
import Offer from "../features/offer/Offer";
import ValueProposition from "../features/valueProposition/ValueProposition";
import { useCoreframe } from "../hooks/useCoreframe";

export default function HomePage() {
  const { offerData } = useCoreframe();

  return (
    <>
      <Navbar />
      <Home />
      <SuggestionsSection />
      {offerData && <Offer offerData={offerData} />}
      <ValueProposition />
    </>
  );
}
