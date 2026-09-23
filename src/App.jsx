import CoreframeProvider from "./context/CoreframeProvider";
import Navbar from "./components/navbar/Navbar";
import Home from "./features/home/Home";
import SuggestionsSection from "./features/suggestionsSection/SuggestionsSection";
import AutumnOffer from "./features/offers/AutumnOffer";

function App() {
  return (
    <CoreframeProvider>
      <Navbar />
      <Home />
      <SuggestionsSection />
      <AutumnOffer />
    </CoreframeProvider>
  );
}

export default App;
