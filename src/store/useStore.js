import { create } from "zustand";

const useStore = create((set) => ({
  user: {},
  setUser: (user) => set((state) => ({ user: user })),
}));

export default useStore;
