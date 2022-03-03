import React, { ReactNode } from "react";

import Head from "next/head";

import useAuth from "@app/hooks/useAuth";

import Spinner from "../spinner/spinner.component";
import Button from "../button/button.component";
import { useRouter } from "next/dist/client/router";

type Props = {
  children?: ReactNode;
  title?: string;
  isPrivate?: boolean;
};

const UnautoriedMessage = () => {
  const router = useRouter();

  const onClick = () => {
    router.replace("/");
  };

  return (
    <div className="h-full flex justify-center items-center flex-col">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
        Ops! 401 🚫
      </h5>
      <p className="font-normal text-gray-500 mb-1">
        Para ver esta pagina é preciso estar conectado a uma conta spotify.
      </p>

      <p className="font-normal text-gray-500 mb-5">
        Conecte Sua conta para continuar.
      </p>

      <Button label="Conectar" onClick={onClick} />
    </div>
  );
};

const PrivateLayoutComponent: React.FC = ({ children }) => {
  const { isLoading, data } = useAuth();

  if (isLoading) {
    <main className="h-full bg-black">
      <div className="h-full flex justify-center items-center flex-col">
        <div className="w-full flex justify-center ">
          <Spinner size={9} />
        </div>
      </div>
    </main>;
  }

  return (
    <main className="h-full bg-black">
      {data ? children : <UnautoriedMessage />}
    </main>
  );
};

const LayoutComponent = ({
  isPrivate,
  children,
  title = "Gabriel Antunes - Front-end Enginner",
}: Props) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="favicon" href="/favicon/favicon.ico" />
      <title data-testid="page-title"> SpotiFocus | {title}</title>
    </Head>

    {isPrivate ? (
      <PrivateLayoutComponent>{children}</PrivateLayoutComponent>
    ) : (
      <main className="h-full bg-black">{children}</main>
    )}
  </>
);

export default LayoutComponent;
