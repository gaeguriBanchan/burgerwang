import Header from "./Header";
import DeliInfoLine from "./DeliInfoLine";
const Layout = ({ children, title }) => {
  return (
    <>
      <Header title={title} />
      <DeliInfoLine />
      {children}
    </>
  );
};

export default Layout;
