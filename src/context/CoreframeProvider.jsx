import { useLayoutEffect, useState } from "react";
import { CoreframeCtx } from "./CoreframeCtx";

export default function CoreframeProvider({ children }) {
  const [isCart, setIsCart] = useState(false);

  useLayoutEffect(() => {
    document.body.style.overflow = isCart ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCart]);

  return (
    <CoreframeCtx.Provider value={{ isCart, setIsCart }}>
      {children}
    </CoreframeCtx.Provider>
  );
}
