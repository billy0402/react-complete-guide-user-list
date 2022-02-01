import Button from '@components/ui/Button';
import Card from '@components/ui/Card';

type ModalOverlayProps = {
  title: string;
  message: string;
  onConfirm?: () => void;
};

const ModalOverlay = ({ title, message, onConfirm }: ModalOverlayProps) => {
  return (
    <Card className='modal'>
      <header className='header'>
        <h2>{title}</h2>
      </header>
      <main className='content'>
        <p>{message}</p>
      </main>
      <footer className='actions'>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

export default ModalOverlay;
