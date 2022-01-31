import Button from '@components/ui/Button';
import Card from '@components/ui/Card';

type ErrorModalProps = {
  title: string;
  message: string;
  onConfirm?: () => void;
};

const ErrorModal = ({ title, message, onConfirm }: ErrorModalProps) => {
  return (
    <>
      <div className='backdrop' onClick={onConfirm} />
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
    </>
  );
};

export default ErrorModal;
