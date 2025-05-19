import { create } from "zustand";

interface UIStore {
  isEditModalOpen: boolean;
  toggleEditModal: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isEditModalOpen: false,
  toggleEditModal: () =>
    set((state) => ({ isEditModalOpen: !state.isEditModalOpen })),
}));
