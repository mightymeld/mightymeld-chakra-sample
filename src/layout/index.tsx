import { ReactNode } from "react";
import Sidebar from "../components/sidebar";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      bg={"#10141F"}
      display={"flex"}
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      color="white"
      p={6}
      gap={6}
      overflowY={"hidden"}
      style={{ height: "100vh" }}
    >
      <Sidebar />
      <Box width={"full"} overflowY={"scroll"}>
        <Box>{children} </Box>
      </Box>
    </Box>
  );
};

export default Layout;
