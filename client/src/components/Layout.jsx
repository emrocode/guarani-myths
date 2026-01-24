import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";
import { Dialog } from "./ui";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
      <Dialog />
    </>
  );
};

export default Layout;
