import { ReactNode } from "react";
import Sidebar from "../components/sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-[#10141F] flex flex-col lg:flex-row p-6 gap-6 h-screen overflow-hidden text-white ">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full overflow-scroll">
        <div className="w-full">{children} </div>
      </div>
    </div>
  );
};

export default Layout;
