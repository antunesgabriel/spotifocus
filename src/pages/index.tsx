import Button from "@app/components/button/button.component";
import LayoutComponent from "@app/components/layout/layout-component";
import useAuthWithSpotify from "@app/hooks/useAuthWithSpotify";

const IndexPage = () => {
  const authWithSpotify = useAuthWithSpotify();

  const onClick = () => {
    authWithSpotify.mutate();
  };

  return (
    <LayoutComponent title="Bem vindo!">
      <div className="h-full flex justify-center items-center flex-col">
        <div className="w-full flex justify-center mt-10">
          <Button label="Conectar com Spotify" onClick={onClick} />
        </div>
      </div>
    </LayoutComponent>
  );
};

export default IndexPage;
