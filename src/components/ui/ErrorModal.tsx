import ReactDOM from 'react-dom';

import Backdrop from '@components/ui/Backdrop';
import ModalOverlay from './ModalOverlay';

type ErrorModalProps = {
  title: string;
  message: string;
  onConfirm?: () => void;
};

const ErrorModal = ({ title, message, onConfirm }: ErrorModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop className='backdrop' onConfirm={onConfirm} />,
        document.getElementById('backdrop-root') as HTMLElement,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('overlay-root') as HTMLElement,
      )}
    </>
  );
};

export default ErrorModal;
