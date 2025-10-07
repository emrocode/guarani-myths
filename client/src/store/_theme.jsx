import { create } from "zustand";
import Darkify from "darkify-js";

let d = null;

const useThemeStore = create((set) => {
  if (!d) {
    d = new Darkify("button#dTheme", {
      autoMatchTheme: true,
      useLocalStorage: true,
      useColorScheme: ["#e9e4d7", "#0d0c0a"],
    });
  }

  const toggleDarkMode = () => {
    d.toggleTheme();
    set({ theme: d.getCurrentTheme() });
  };

  return { theme: d.getCurrentTheme(), toggleDarkMode };
});

export default useThemeStore;
