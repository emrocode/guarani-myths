import { create } from "zustand";
import Darkify from "darkify-js";

let d = null;

const useThemeStore = create((set) => {
  if (!d) {
    d = new Darkify(null, {
      autoMatchTheme: true,
      useLocalStorage: true,
      useColorScheme: [
        "oklch(0.9967 0.0013 106.42)",
        "oklch(0.173 0.0063 91.68)",
      ],
    });
  }

  return {
    theme: d.getCurrentTheme(),
    toggleTheme: () => {
      d.toggleTheme();
      set({ theme: d.getCurrentTheme() });
    },
  };
});

export default useThemeStore;
