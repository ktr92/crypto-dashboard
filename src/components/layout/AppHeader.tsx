import { Layout } from "antd";

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

export const AppHeader: React.FC = () => (
  <>
    <Layout.Header style={headerStyle}>Header</Layout.Header>
  </>
);
