import useLostArkSearchStore from '@/stores/useLostArkSearchStore';
import { ICharterInfo } from '@/types/Ark';
import React from 'react';

interface IInfoProps {
  CharacterInfo: ICharterInfo[];
  decodedId: string;
}

const Characters: React.FC<IInfoProps> = ({ CharacterInfo, decodedId }) => {
  const { addFavorites } = useLostArkSearchStore();
  const addFavorite = () => {
    addFavorites(decodedId);
  };

  return (
    <div>
      {CharacterInfo.filter((el) => el.CharacterName === decodedId).map((el) => (
        <div key={el.CharacterName}>
          <p>{el.ServerName}</p>
          <p>{el.CharacterClassName}</p>
          <p>{el.CharacterName}</p>
          <p>{el.ItemAvgLevel}</p>
          <p>{el.ItemMaxLevel}</p>
          <p onClick={addFavorite}>즐겨찾기</p>
        </div>
      ))}
    </div>
  );
};

export default Characters;