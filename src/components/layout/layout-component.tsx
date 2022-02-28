import React, { ReactNode } from "react";

import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const LayoutComponent = ({
  children,
  title = "Gabriel Antunes - Front-end Enginner",
}: Props) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="favicon" href="/favicon/favicon.ico" />
      <title data-testid="page-title">{title}</title>
    </Head>

    <main className="h-full">{children}</main>
  </>
);

export default LayoutComponent;
