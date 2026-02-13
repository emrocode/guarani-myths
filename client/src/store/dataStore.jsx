import { create } from "zustand";
import axios from "axios";

const useDataStore = create((set, get) => ({
  data: {
    result: {},
    isLoading: false,
  },
  run: false,
  key: "",
  setRun: (val) => set({ run: val }),
  setKey: (val) => set({ key: val }),
  fetchData: async () => {
    const { run, key, data } = get();

    if (!run) return;

    set({ data: { ...data, isLoading: true } });

    try {
      const [response] = await Promise.all([
        axios.get("/api/myths/1", {
          params: { lang: "es" },
          headers: { Authorization: `Bearer ${key}` },
          validateStatus: () => true,
        }),
        new Promise((t) => setTimeout(t, 777)),
      ]);
      set({ data: { result: response?.data, isLoading: false } });
    } catch (error) {
      set((state) => ({ data: { ...state.data, isLoading: false } }));
    }
  },
}));

export default useDataStore;
