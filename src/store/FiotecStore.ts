import { create } from 'zustand';
import { Projects } from '../types/IProjects';

type Fiotec = {
  favorite: Projects[];
  addToFavorities: (item: Projects) => void;
  removeToFavorities: (id: number) => void;
};

export const useFiotecStore = create<Fiotec>((set) => {
  return {
    favorite: [],
    addToFavorities: (item) =>
      set((state) => ({ favorite: [...state.favorite, item] })),
    removeToFavorities: (id) =>
      set((state) => ({
        favorite: state.favorite.filter((item) => item.id !== id),
      })),
  };
});
