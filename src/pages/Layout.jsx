import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="flex flex-col phone:gap-y-12 tablet:gap-y-20 laptop:gap-y-32 justify-between min-h-screen ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
