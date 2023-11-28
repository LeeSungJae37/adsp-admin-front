import Image from 'next/image';
import React from 'react';
import logo from '@/public/image/ADSP.png';
import emailIcon from '@/public/icons/envelope-regular.svg';
import notificationIcon from '@/public/icons/bell-regular.svg';
import profileIcon from '@/public/icons/profile.png';

export default function Header() {
  return (
    <div className="flex my-4 pb-5 border-b-gray-500 border-opacity-20 border-solid border-b-2 items-center">
      <div className="w-10/12 ml-7 mr-12 flex items-center">
        <div>
          <Image
            src={logo}
            alt={'로고'}
            width={135}
            height={135}
            className="!max-w-none mt-3"
          ></Image>
        </div>
        <div className="text-lg bold">상품 관리</div>
      </div>

      <div className="w-2/12 mx-5">
        <div className="flex justify-end items-center">
          <div>
            <Image
              src={emailIcon}
              width={22}
              height={22}
              alt={'이메일'}
              className="ml-5 !max-w-none"
            />
          </div>
          <div>
            <Image
              src={notificationIcon}
              width={20}
              height={20}
              alt={'알림'}
              className="ml-5  !max-w-none"
            />
          </div>
          <div>
            <Image
              src={profileIcon}
              width={35}
              height={35}
              alt={'프로필'}
              className="ml-10 mr-6  !max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
