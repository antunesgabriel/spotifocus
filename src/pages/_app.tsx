import "animate.css";
import "@app/assets/css/tailwind.css";
import "@app/assets/css/fonts.css";

import { useState } from "react";
import type { AppProps /*, AppContext */ } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
