import Navbar from "@/components/shared/Navbar/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Navbar />
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default layout;
