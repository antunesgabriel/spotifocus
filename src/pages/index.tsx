import Button from "@app/components/button/button.component";
import LayoutComponent from "@app/components/layout/layout-component";

const IndexPage = () => {
  return (
    <LayoutComponent title="Home">
      <div className="h-full flex justify-center items-center flex-col">
        <div className="w-full flex justify-center mt-10">
          <Button label="Login with Spotify" isLoading />
        </div>
      </div>
    </LayoutComponent>
  );
};

export default IndexPage;
