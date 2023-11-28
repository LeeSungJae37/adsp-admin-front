import CloseButton from '@/app/components/common/CloseButton';
import Button from '@/app/components/common/Button';
import React, { ChangeEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideModal } from '@/app/features/modalSlice';
import dummyImage from '@/public/image/dummy-image-square.jpg';
import Image from 'next/image';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAddItemMutation } from '@/app/gql/generated/graphql';

export default function ItemEnrollModal() {
  const [keywords, setKeywords] = useState('');
  const [itemTitle, setItemTitle] = useState('');
  const [imagePath, setImagePath] = useState<string | ArrayBuffer>('');
  const [bid, setBid] = useState(50);
  const dispatch = useDispatch();
  const imgRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const onChangeImgFile = () => {
    const file = imgRef.current!.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePath(reader.result!);
    };
  };

  const uploadImage = async () => {
    const formData = new FormData();
    const file = imgRef.current!.files![0];

    formData.append('file', file);

    const response = await fetch('/image/upload', {
      method: 'POST',
      headers: {
        Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN!,
      },
      body: formData,
    });

    const result = response.json();

    return result;
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setItemTitle(event.target.value);
    console.log(itemTitle);
  };

  const onChangeBid = (event: ChangeEvent<HTMLInputElement>) => {
    setBid(+event.target.value);
    console.log(bid);
  };

  const onChangeKeywords = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setKeywords(event.target.value);
    console.log(keywords);
  };

  const { mutate: addMutate, isSuccess: addIsSuccess } = useAddItemMutation({
    endpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
    fetchParams: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  });

  const {
    mutate: uploadImageMutate,
    isSuccess: uploadIsSuccess,
    data,
  } = useMutation({
    mutationFn: uploadImage,
    mutationKey: ['uploadImage'],
    onSuccess: (data) => {
      const result = data.result;

      addMutate({
        item: {
          item_title: itemTitle,
          img_url:
            process.env.NEXT_PUBLIC_IMAGE_SERVER +
            result.id +
            process.env.NEXT_PUBLIC_IMAGE_SERVER_PUBLIC,
          bid: bid,
          keywords: keywords,
        },
      });
      dispatch(hideModal());

      queryClient.invalidateQueries({ queryKey: ['getItemList'] });
    },
  });

  // if (!uploadIsSuccess && !addIsSuccess) {
  //   return <div> loading... </div>;
  // }

  // 이부분 고치고싶다 이상해..
  const addItem = async () => {
    uploadImageMutate();
  };

  return (
    <div
      id="crud-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              상품 등록
            </h3>
            <CloseButton />
          </div>
          <div className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2 mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  광고 이미지
                </label>
                <div className="flex my-5 justify-center">
                  <Image
                    src={imagePath ? (imagePath as string) : dummyImage}
                    width={300}
                    height={300}
                    alt={'광고 이미지'}
                  />
                </div>
                <label
                  htmlFor="fileInput"
                  className="bg-gray-500 text-white text-sm font-thin p-2 rounded cursor-pointer"
                >
                  파일 등록
                </label>
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  accept=".jpg, .jpeg, .png"
                  onChange={onChangeImgFile}
                  ref={imgRef}
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  상품명
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="이천쌀 20kg"
                  onChange={onChangeTitle}
                />
              </div>
              <div className="col-span-2 sm:col-span-2">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  입찰가
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="50"
                  min="10"
                  step="10"
                  onChange={onChangeBid}
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  검색 키워드
                </label>
                <textarea
                  id="description"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="2개 이상 키워드 ,구분"
                  onChange={onChangeKeywords}
                ></textarea>
              </div>
            </div>
            <Button text={'등록'} onClick={addItem}></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
