import { create } from 'zustand';

interface PageState {
  page: number;
  isLastPage: boolean;
  increasePage: () => void;
  resetPage: () => void;
  setLastPage: (newState: boolean) => void;
}

const usePageStore = create<PageState>((set) => ({
  page: 0,
  isLastPage: false,
  increasePage: () => set((state) => ({ page: state.page + 1 })),
  resetPage: () => set(() => ({ page: 0 })),
  setLastPage: (newState) => set(() => ({ isLastPage: newState })),
}));

export default usePageStore;
