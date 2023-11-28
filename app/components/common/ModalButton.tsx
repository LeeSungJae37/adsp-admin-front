import { useDispatch } from 'react-redux';
import { showModal } from '@/app/features/modalSlice';
import { ReactNode } from 'react';

interface IModalButton {
  children?: ReactNode;
  text?: string;
}

function ModalButton({ children, text }: IModalButton) {
  const dispatch = useDispatch();

  const show = () => {
    dispatch(showModal());
  };

  return (
    <>
      <button
        className="text-white inline-flex items-center bg-red-600 hover:bg-red-800 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        onClick={show}
      >
        {children}
        {text}
      </button>
    </>
  );
}

export default ModalButton;
