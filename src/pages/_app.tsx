import React from "react";
import type { AppProps /*, AppContext */ } from "next/app";

import "animate.css";
import "@app/assets/css/tailwind.css";
import "@app/assets/css/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
