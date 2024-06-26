import instance from '@/app/service/service';
import { ICharterInfo, ISearchLogValue } from '@/types/Ark';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface LostarkState {
  favorites: ISearchLogValue[];
  searchValue: ISearchLogValue[];
  addFavorites: (item: string) => void;
  addSearchValue: (value: string) => void;
  removeSearchValue: (value: string) => void;
  removeFaovorites: (value: string) => void;
}

const getAPIData = async (item: string) => {
  try {
    const { data } = await instance.get(`/characters/${item}/siblings`);
    return data;
  } catch (error) {
    console.error('데이터를 받아오지 못했습니다.');
  }
};

const useLostArkSearchStore = create<LostarkState>()(
  persist(
    (set) => ({
      favorites: [],
      searchValue: [],

      addFavorites: async (item) => {
        try {
          let newData = await getAPIData(item);
          const Info = newData.filter((el: ICharterInfo) => el.CharacterName === item);

          const favoriteInfo = Info.map((el: ICharterInfo) => ({
            name: item,
            class: el.CharacterClassName,
            level: el.ItemMaxLevel,
            server: el.ServerName,
          }));

          set((state) => {
            if (state.favorites.some((el) => el.name === item)) {
              const newList = state.favorites;
              const filtering = newList.filter((el) => el.name !== item);
              return { favorites: filtering };
            } else {
              if (state.favorites.length > 7) {
                alert('즐겨찾기는 최대 7개 까지만 가능합니다.');
                // state.favorites.pop();
                return { favorites: [...state.favorites] };
              }
              return { favorites: [...favoriteInfo, ...state.favorites] };
            }
          });
        } catch (error) {
          console.log(error);
        }
      },

      removeFaovorites: (item) =>
        set((state) => {
          const newList = state.favorites;
          const filtering = newList.filter((el) => el.name !== item);
          return { favorites: filtering };
        }),

      addSearchValue: async (item) => {
        try {
          let newData = await getAPIData(item);
          const Info = newData.filter((el: ICharterInfo) => el.CharacterName === item);

          const SearchInfo = Info.map((el: ICharterInfo) => ({
            name: item,
            class: el.CharacterClassName,
            level: el.ItemMaxLevel,
            server: el.ServerName,
          }));

          set((state) => {
            const existingIndex = state.searchValue.findIndex((el) => el.name === item);
            if (existingIndex !== -1) {
              const newList = [...state.searchValue];
              newList.splice(existingIndex, 1);
              newList.unshift(SearchInfo[0]);
              return { searchValue: newList };
            } else {
              if (state.searchValue.length > 7) {
                state.searchValue.pop();
              }
              return { searchValue: [...SearchInfo, ...state.searchValue] };
            }
          });
        } catch (error) {
          console.log(error);
        }
      },
      removeSearchValue: (item) =>
        set((state) => {
          const newList = state.searchValue;
          const filtering = newList.filter((el) => el.name !== item);
          return { searchValue: filtering };
        }),
    }),
    {
      name: 'lostark-search-store',
    }
  )
);

export default useLostArkSearchStore;
