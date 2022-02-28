import LayoutComponent from "@app/components/layout/layout-component";

const IndexPage = () => (
  <LayoutComponent title="Home">
    <div className="h-full flex justify-center items-center">
      <h1 className="text-brand-main font-bold text-2xl">Hello Next.js 👋</h1>
    </div>
  </LayoutComponent>
);

export default IndexPage;
