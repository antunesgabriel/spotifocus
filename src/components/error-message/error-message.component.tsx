import Button from "../button/button.component";

const ErrorMessage = () => {
  const onClick = () => {
    window.location.reload();
  };

  return (
    <>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
        Ops!
      </h5>
      <p className="font-normal text-gray-500 mb-1">
        Infelizmente não conseguimos carregar as informações nessesarias para
        vizualizar está tela :(...
      </p>

      <p className="font-normal text-gray-500 mb-5">
        Tente re-carregar a tela.
      </p>

      <Button label="Recarregar" onClick={onClick} />
    </>
  );
};

export default ErrorMessage;
