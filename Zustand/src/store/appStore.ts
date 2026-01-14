import { create } from "zustand";

type User = {
  id: string;
  name: string;
};

type CounterStore = {
  //Auth slice
  user: User | null;
  login: (user: User) => void;
  logout: () => void;

  //UI slice
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const useAppStore = create<CounterStore>((set) => ({
  //Auth slice
  user: null,
  login: (user) => set(() => ({ user })),
  logout: () => set(() => ({ user: null })),

  //UI slice
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
