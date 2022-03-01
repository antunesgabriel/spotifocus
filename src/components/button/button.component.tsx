import Spinner from "../spinner/spinner.component";

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  label: string;
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  isLoading,
}) => {
  return (
    <button
      className="inline-flex items-center px-4 py-2 font-semibold leading-6 
      text-sm shadow rounded-full scale-0 text-white bg-brand-500
       hover:bg-brand-400 transition ease-in-out duration-150
        focus:outline-none focus:ring focus:ring-brand-300 active:bg-brand-700"
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? <Spinner /> : label}
    </button>
  );
};

export default Button;
