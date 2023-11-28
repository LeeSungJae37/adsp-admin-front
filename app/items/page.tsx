'use client';

import ModalButton from '@/app/components/common/ModalButton';
import React from 'react';
import ItemEnrollModal from '@/app/components/items/ItemEnrollModal';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import {
  GetItemListQuery,
  useGetItemListQuery,
} from '@/app/gql/generated/graphql';
import Item from '@/app/components/items/Item';

export default function Page() {
  const isShowModal = useSelector(
    (state: RootState) => state.modal.isModalShow,
  );

  const { data, isLoading, isSuccess } = useGetItemListQuery<
    GetItemListQuery,
    Error
  >({
    endpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
    fetchParams: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-20 py-10">
      {isShowModal ? <ItemEnrollModal /> : undefined}
      <div className="text-end mb-10 mr-20">
        <ModalButton text="상품 등록" />
      </div>
      <div className="flex font-bold justify-center">
        <div className="w-1/12 bg-gray-200 p-3 text-center border-t-gray-500 border-2">
          이미지
        </div>
        <div className="w-2/12 bg-gray-200 p-3 text-center border-t-gray-500 border-2">
          상품 정보
        </div>
        <div className="w-1/12 bg-gray-200 p-3 text-center border-t-gray-500 border-2">
          노출여부
        </div>
        <div className="w-3/12 bg-gray-200 p-3 text-center border-t-gray-500 border-2">
          검색 키워드
        </div>
        <div className="w-1/12 bg-gray-200 p-3 text-center border-t-gray-500 border-2">
          입찰가
        </div>
        <div className="w-1/12 bg-gray-200 p-3 text-center border-t-gray-500 border-2">
          삭제
        </div>
      </div>
      {data?.item_list.map((item) => <Item key={item.item_id} item={item} />)}
    </div>
  );
}
