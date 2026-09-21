import CoreframeProvider from "./context/CoreframeProvider";
import Navbar from "./components/navbar/Navbar";
import Home from "./features/home/Home"
import SuggestionsSection from "./features/suggestionsSection/SuggestionsSection"

function App() {
  return (
    <CoreframeProvider>
      <Navbar />
      <Home />
      <SuggestionsSection />
    </CoreframeProvider>
  );
}

export default App;
