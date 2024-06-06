import { Outlet } from "react-router-dom";
import Footer from "../Footer/index";
import Navbar from "../layout/Navbar/index";

function Layout() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-grow">
        <Outlet />
      </section>
      <footer className="">
        <Footer />
      </footer>
    </main>
  );
}

export default Layout;
