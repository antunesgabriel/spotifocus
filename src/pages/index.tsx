import LayoutComponent from "@app/components/layout/layout-component";
import Progress from "@app/components/progress/progress.component";
import { useState } from "react";

const IndexPage = () => {
  const [progress, setProgress] = useState(0);

  const onClick = () => {
    setProgress((old) => old + 10);
  };

  return (
    <LayoutComponent title="Home">
      <div className="h-full flex justify-center items-center flex-col">
        <Progress percentage={progress} color="#57B65F" text="25:00" />

        <div className="w-full flex justify-center mt-10">
          <button
            className="text-white uppercase text-sm bg-brand-main py-2 px-5 rounded-full hover:bg-brand-maindark transition-all duration-75 ease-in-out"
            onClick={onClick}
          >
            start
          </button>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default IndexPage;
