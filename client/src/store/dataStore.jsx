import { create } from "zustand";

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
        fetch("/api/myths/1?lang=es", {
          headers: { Authorization: `Bearer ${key}` },
        }),
        new Promise((t) => setTimeout(t, 777)),
      ]);

      const result = await response.json();
      set({ data: { result, isLoading: false } });
    } catch {
      set((state) => ({ data: { ...state.data, isLoading: false } }));
    }
  },
}));

export default useDataStore;
