type BackdropProps = {
  className?: string;
  onConfirm?: () => void;
};

const Backdrop = ({ className, onConfirm }: BackdropProps) => {
  return <div className={className} onClick={onConfirm} />;
};

export default Backdrop;
