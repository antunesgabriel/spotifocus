import Button from "@app/components/button/button.component";
import LayoutComponent from "@app/components/layout/layout-component";
import Progress from "@app/components/progress/progress.component";
import { useState } from "react";

const WorkspacePage = () => {
  const [progress, setProgress] = useState(0);

  const onClick = () => {
    setProgress((old) => old + 10);
  };

  return (
    <LayoutComponent title="Home">
      <div className="h-full flex justify-center items-center flex-col">
        <Progress percentage={progress} color="#57B65F" text="25:00" />

        <div className="w-full flex justify-center mt-10">
          <Button onClick={onClick} label="start" />
        </div>
      </div>
    </LayoutComponent>
  );
};

export default WorkspacePage;
