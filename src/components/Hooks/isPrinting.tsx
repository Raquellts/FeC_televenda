import { useState, useEffect, useCallback } from "react";

let isPrinting = false;
let listeners: Array<(state: boolean) => void> = [];

const notifyListeners = () => {
  listeners.forEach((listener) => listener(isPrinting));
};

export const usePrintState = () => {
  const [state, setState] = useState(isPrinting);

  useEffect(() => {
    const listener = (newState: boolean) => setState(newState);
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  const startPrinting = useCallback(() => {
    isPrinting = true;
    notifyListeners();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
      window.print();
      isPrinting = false;
      notifyListeners();
    }, 0);
  }, []);

  return { isPrinting: state, startPrinting };
};
