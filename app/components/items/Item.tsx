import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  Del_Yn,
  Show_Yn,
  useChangeUseYnMutation,
  useDeleteItemMutation,
} from '@/app/gql/generated/graphql';

export interface IItem {
  item_id: number;
  img_url: string;
  item_title: string;
  keywords: string;
  bid: number;
  use_yn: Show_Yn;
  ins_date: string;
  upd_date: string;
  del_yn: string;
}

export default function Item({ item }: { item: IItem }) {
  const [useYn, setUseYn] = useState(item.use_yn ? item.use_yn : Show_Yn.N);
  const [delYn, setDelYn] = useState<Del_Yn>(Del_Yn.N);

  const { mutate: changeMutate } = useChangeUseYnMutation({
    endpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
    fetchParams: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  });

  const { mutate: deleteMutate } = useDeleteItemMutation({
    endpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
    fetchParams: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  });

  const changeUseYn = () => {
    if (useYn === Show_Yn.Y) setUseYn(Show_Yn.N);
    else if (useYn === Show_Yn.N) setUseYn(Show_Yn.Y);
  };

  const deleteItem = () => {
    if (delYn === Del_Yn.Y) setDelYn(Del_Yn.N);
    else if (delYn === Del_Yn.N) setDelYn(Del_Yn.Y);
    deleteMutate({
      item: {
        item_id: item.item_id,
      },
    });
  };

  // useEffect(() => {
  //   deleteMutate({
  //     item: {
  //       item_id: item.item_id,
  //     },
  //   });
  // }, [delYn]);

  useEffect(() => {
    changeMutate({
      item: {
        item_id: item.item_id,
        item_title: item.item_title,
        img_url: item.img_url,
        use_yn: useYn,
        keywords: item.keywords,
      },
    });
  }, [useYn]);

  return (
    <div className="flex justify-center">
      <div className="w-1/12 p-3">
        <Image src={item.img_url} width={100} height={200} alt={'상품이미지'} />
      </div>
      <div className="w-2/12 p-3">{item.item_title}</div>
      <div className="w-1/12 p-3 text-end">
        <label className="relative inline-flex items-center me-5 cursor-pointer tex">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={useYn === Show_Yn.Y}
            onChange={changeUseYn}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </label>
      </div>
      <div className="w-3/12 p-3">{item.keywords}</div>
      <div className="w-1/12 p-3 text-center mt-1">{item.bid}</div>
      <div className="w-1/12 p-3 text-center">
        <button
          className="bg-red-300 hover:bg-red-700 text-white py-2 px-4 rounded"
          onClick={deleteItem}
        >
          삭제
        </button>
      </div>
    </div>
  );
}
