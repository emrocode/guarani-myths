import { create } from "zustand";
import Darkify from "darkify-js";

let d = null;

const useThemeStore = create(() => {
  if (!d) {
    d = new Darkify("button#dTheme", {
      autoMatchTheme: true,
      useLocalStorage: true,
      useColorScheme: ["#ffffff", "#010101"],
    });
  }

  const toggleDarkMode = () => {
    d?.toggleTheme();
  };

  return { toggleDarkMode };
});

export default useThemeStore;
