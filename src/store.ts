import { create } from "zustand";

type State = {
  page: string,
  viewMode: "list" | "block",
}

type Action = {
  goToPage: (page: string) => void;
  setViewMode: (mode: "list" | "block") => void;
}

const useStore = create<State & Action>((set) => ({
  page: "Home",
  viewMode: "list",
  goToPage: (page) => set(prev => ({ ...prev, page: page })),
  setViewMode: (mode) => set(prev => ({ ...prev, viewMode: mode })),
}))

export default useStore;
