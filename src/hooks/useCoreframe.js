import { useContext } from "react";
import { CoreframeCtx } from "../context/CoreframeCtx";

export const useCoreframe = () => {
  const context = useContext(CoreframeCtx);
  if (!context) throw new Error("useCoreframe must be used inside StoreProvider!");
  return context;
};
