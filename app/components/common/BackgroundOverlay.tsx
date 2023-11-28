'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

export default function BackgroundOverlay() {
  const isShowModal = useSelector(
    (state: RootState) => state.modal.isModalShow,
  );

  return isShowModal ? <div className="bg-overlay min-h-screen" /> : <div />;
}
