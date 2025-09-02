import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
