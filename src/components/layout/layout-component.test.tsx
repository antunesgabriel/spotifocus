import React from "react";
import { render, screen } from "@testing-library/react";

import LayoutComponent from "./layout-component";

describe("<LayoutComponent />", () => {
  it("it should render correctly children", () => {
    const hello = "Hello World";

    render(
      <LayoutComponent>
        <h1>Hello World</h1>
      </LayoutComponent>
    );

    expect(screen.getByRole("heading", { name: hello })).toBeInTheDocument();
  });
});
