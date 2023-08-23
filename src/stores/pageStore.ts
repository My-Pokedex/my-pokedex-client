import { create } from 'zustand';

interface PageState {
  page: number;
  increasePage: () => void;
  resetPage: () => void;
}

const usePageStore = create<PageState>((set) => ({
  page: 0,
  increasePage: () => set((state) => ({ page: state.page + 1 })),
  resetPage: () => set(() => ({ page: 0 })),
}));

export default usePageStore;
