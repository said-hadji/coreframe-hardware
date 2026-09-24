import { Routes, Route } from "react-router";
import CoreframeProvider from "./context/CoreframeProvider";
import HomePage from "./pages/HomePage";
import AutumnPage from "./pages/AutumnPage";
import NewProductsPage from "./pages/NewProductsPage";
import Products from "./pages/Products";

function App() {
  return (
    <CoreframeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/new" element={<NewProductsPage />} />
        <Route path="/autumn" element={<AutumnPage />} />
      </Routes>
    </CoreframeProvider>
  );
}

export default App;
