import Umbra from "@emrocode/umbra";
import { create } from "zustand";

const d = new Umbra({
  useColorScheme: ["oklch(0.173 0.0063 91.68)"],
});

const useThemeStore = create((set) => {
  return {
    theme: d.getCurrentTheme(),
    toggleTheme: () => {
      d.toggleTheme();
      set({ theme: d.getCurrentTheme() });
    },
  };
});

export default useThemeStore;
