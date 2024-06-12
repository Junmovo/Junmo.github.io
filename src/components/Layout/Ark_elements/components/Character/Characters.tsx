import useLostArkSearchStore from '@/stores/useLostArkSearchStore';
import { ICharacterWeapon, ICharterInfo, ICharterProfiles, IInfoProps } from '@/types/Ark';
import Image from 'next/image';
import React from 'react';
import ArkPadding from '../../ArkPadding';
import InfoBox from './InfoTitle';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

const Characters: React.FC<IInfoProps> = ({ CharacterInfo, decodedId }) => {
  const { addFavorites } = useLostArkSearchStore();
  const { favorites } = useLostArkSearchStore();
  const isFavorite = favorites.some((el) => el.name === decodedId);
  const onClickAddFavorite = (v: string) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    addFavorites(v);
  };

  return (
    <div>
      <div className="mt-10 p-[20px] ">
        <div className="flex justify-between ">
          <div className="flex items-center gap-7">
            {/* 프로필사진 */}
            <div className="w-[250px] rounded-xl h-[250px] bg-[#15181d] relative overflow-hidden">
              <div className="absolute w-[469px] right-[-100px] top-[-45px]">
                <Image
                  src={CharacterInfo?.CharacterImage || ''}
                  width={612}
                  height={708}
                  alt={CharacterInfo?.CharacterName || ''}
                />
              </div>
            </div>
            {/* 내용 */}
            <div>
              <div className=" text-[14px]">{CharacterInfo?.ServerName} </div>
              <div className="flex items-end">
                <div className="font-bold text-black text-[30px]">{decodedId}</div>
                <div className="text-[14px] ml-[5px] text-gray-500">{CharacterInfo?.CharacterClassName}</div>
              </div>
              <InfoBox contents={CharacterInfo?.ItemAvgLevel} subcontents="Lv." />

              <div
                className=" p-[5px] text-[14px] flex justify-center items-center bg-gray-200 text-white rounded-lg w-[100px]"
                onClick={onClickAddFavorite(decodedId)}
              >
                <span className="mr-[3px]">{isFavorite ? <FaStar color="#425ad5" /> : <CiStar />}</span> 즐겨찾기
              </div>
            </div>
          </div>
          {/* <div className="bg-white shadow-[0_2px_30px_0_rgba(0,0,0,.06)] rounded-lg mt-5">
              <div>
                <div className="text-gray-500">상세정보</div>
                <p> PVP :{CharacterInfo.PvpGradeName} </p>
                <p>
                  영지:{CharacterInfo.TownLevel} {CharacterInfo.TownName}
                </p>
                <p> 칭호 :{CharacterInfo.Title} </p>
                <p> 길드 :{CharacterInfo.GuildName} </p>
              </div>
            </div> */}
          {/* <div className="flex gap-4">
            <InfoBox title={'아이템'} contents={CharacterInfo.ItemAvgLevel} />
            <InfoBox title={'원정대'} contents={CharacterInfo.ExpeditionLevel} />
            <InfoBox title={'전투'} contents={CharacterInfo.CharacterLevel} subcontents="Lv." />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Characters;
