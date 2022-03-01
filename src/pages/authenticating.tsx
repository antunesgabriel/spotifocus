import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { addSeconds } from "date-fns";

import LayoutComponent from "@app/components/layout/layout-component";
import Spinner from "@app/components/spinner/spinner.component";
import { setUserCrendentials } from "@app/configs/localstorage.config";

const AuthPage = () => {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      router.replace("/");
    }

    const params = new URLSearchParams(hash.replace("#", "?"));
    const accessToken = params.get("access_token");
    const tokenType = params.get("token_type");
    const expireIn = Number(params.get("expires_in"));

    if (!accessToken || !tokenType || !expireIn) {
      router.replace("/");
    }

    const expirationDate = addSeconds(
      new Date(),
      Number(expireIn)
    ).toISOString();

    setUserCrendentials(
      accessToken as string,
      tokenType as string,
      expirationDate
    );

    router.replace("/workspace");
  }, []);

  return (
    <LayoutComponent title="Autenticando...">
      <div className="h-full flex justify-center items-center flex-col">
        <div className="w-full flex justify-center mt-10">
          <Spinner size={9} />
        </div>
      </div>
    </LayoutComponent>
  );
};

export default AuthPage;
