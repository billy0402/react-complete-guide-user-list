import Button from '@components/ui/Button';
import Card from '@components/ui/Card';

type ErrorModalProps = {
  title: string;
  message: string;
};

const ErrorModal = ({ title, message }: ErrorModalProps) => {
  return (
    <>
      <div className='backdrop' />
      <Card className='modal'>
        <header className='header'>
          <h2>{title}</h2>
        </header>
        <main className='content'>
          <p>{message}</p>
        </main>
        <footer className='actions'>
          <Button>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
