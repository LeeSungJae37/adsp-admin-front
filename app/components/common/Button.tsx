import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '@/app/features/modalSlice';

interface IButton {
  children?: ReactNode;
  text?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ children, text, onClick }: IButton) {
  return (
    <>
      <button
        className="text-white inline-flex items-center bg-red-600 hover:bg-red-800 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        onClick={onClick}
      >
        {children}
        {text}
      </button>
    </>
  );
}

export default Button;
