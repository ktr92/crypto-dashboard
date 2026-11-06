import { Layout } from "antd";
import { AppSider } from "./AppSider";
import { AppContent } from "./AppContent";
import { AppHeader } from "./AppHeader";

const layoutStyle = {
  overflow: "hidden",
};
export const AppLayout: React.FC = () => (
  <>
    <Layout style={layoutStyle}>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  </>
);
