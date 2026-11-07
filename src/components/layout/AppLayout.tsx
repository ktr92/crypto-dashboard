import { Layout, Spin } from "antd";
import { AppSider } from "./AppSider";
import { AppContent } from "./AppContent";
import { AppHeader } from "./AppHeader";
import { useContext } from "react";
import CryptoContext from "../../context/crypto-context";

const layoutStyle = {
  overflow: "hidden",
};
export function AppLayout()  {
  const { loading } = useContext(CryptoContext)
   if (loading) {
    return <Spin fullscreen />;
  }
  return (
    <>
    <Layout style={layoutStyle}>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  </>
  )
}
  
  
