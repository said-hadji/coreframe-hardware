import { Routes, Route } from "react-router";
import CoreframeProvider from "./context/CoreframeProvider";
import HomePage from "./pages/HomePage";
import AutumnPage from "./pages/AutumnPage";
import NewProductsPage from "./pages/NewProductsPage";

function App() {
  return (
    <CoreframeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/autumn" element={<AutumnPage />} />
        <Route path="/new" element={<NewProductsPage />} />
      </Routes>
    </CoreframeProvider>
  );
}

export default App;
