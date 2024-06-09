// Extend the window object with a custom electron property
interface Window {
  electron: {
    setCookie: (name: string, value: string, days: number) => void;
  };
}
