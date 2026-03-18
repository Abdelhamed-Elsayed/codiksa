import { create } from 'zustand'

interface UIState {
  isMenuOpen: boolean
  isScrolled: boolean
  setMenuOpen: (value: boolean) => void
  setScrolled: (value: boolean) => void
  toggleMenu: () => void
}

export const useUIStore = create<UIState>()((set) => ({
  isMenuOpen: false,
  isScrolled: false,
  setMenuOpen: (value) => set({ isMenuOpen: value }),
  setScrolled: (value) => set({ isScrolled: value }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}))
