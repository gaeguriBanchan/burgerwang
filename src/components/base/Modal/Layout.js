import Header from "../Header";
const Layout = ({ children, title }) => {
  return (
    <>
      <Header title={title} />
      {children}
    </>
  );
};

export default Layout;
