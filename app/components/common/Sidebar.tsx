'use client';

import Image from 'next/image';
import leftIcon from '@/public/icons/angle-left-solid.svg';
import itemListIcon from '@/public/icons/list-solid.svg';
import moneyIcon from '@/public/icons/sack-dollar-solid.svg';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="w-60 sidebar-bg-color text-gray-300">
      <div className="flex justify-evenly pt-10 items-center">
        <div className="text-lg">전체 메뉴</div>
        <div>
          <Image
            src={leftIcon}
            width={14}
            height={14}
            alt={'닫기'}
            className="relative left-3"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="h-px my-8 bg-gray-200 opacity-20 border-0 dark:bg-gray-700 w-48" />
      </div>
      <div
        className="flex justify-center align-middle cursor-pointer hover:text-red-600"
        onClick={() => router.push('/items')}
      >
        <div className="w-2/12 ml-10 mr-3 flex">
          <Image
            src={itemListIcon}
            width={22}
            height={22}
            alt={'상품 관리'}
            className="mt-0.5"
          />
        </div>
        <div className="w-10/12">상품 관리</div>
      </div>
      <div
        className="flex mt-7 justify-center align-middle cursor-pointer"
        onClick={() => router.push('/money')}
      >
        <div className="w-2/12 ml-10 mr-3">
          <Image src={moneyIcon} width={22} height={22} alt={'예치금 충전'} />
        </div>
        <div className="w-10/12 hover:text-red-600">예치금 충전</div>
      </div>
    </div>
  );
}
