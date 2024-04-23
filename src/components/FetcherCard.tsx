import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { CSSProperties } from 'react';

interface FetcherCardProps {
  title: string;
  description: string;
  icon: ReactNode; // ReactNode can accept any JSX
  gradientFrom: string;
  gradientTo: string;
}

const FetcherCard: React.FC<FetcherCardProps> = ({ title, description, icon }) => {
  return (
    <div className={`w-full group h-[380px] grid grid-rows-2 rounded-3xl bg-gray-800 hover:bg-gradient-to-t hover:from-green-800 hover:to-green-400 p-10 hover:drop-shadow-2xl`}>
      <div className='w-full h-full grid place-content-center'>
        <div className='w-28 h-28 border-green-400 border group-hover:bg-gradient-to-b mb-4 from-emerald-600 to-green-400 rounded-full grid place-content-center text-white'>
          {icon}
        </div>
      </div>
      <div className='w-full h-full items-center text-center flex flex-col gap-4'>
        <h1 className='text-2xl font-bold text-white'>{title}</h1>
        <p className='text-[18px] text-white'>{description}</p>
      </div>
    </div>
  );
}

export default FetcherCard;
