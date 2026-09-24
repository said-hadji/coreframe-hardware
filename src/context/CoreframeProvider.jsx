import { useLayoutEffect, useState } from "react";
import { CoreframeCtx } from "./CoreframeCtx";
import { data } from "../data";

export default function CoreframeProvider({ children }) {
  const [isCart, setIsCart] = useState(false);

  useLayoutEffect(() => {
    document.body.style.overflow = isCart ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCart]);

  const offerData = data?.offer ?? null;

  return (
    <CoreframeCtx.Provider value={{ isCart, setIsCart, offerData }}>
      {children}
    </CoreframeCtx.Provider>
  );
}
