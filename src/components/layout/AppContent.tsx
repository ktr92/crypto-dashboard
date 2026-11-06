import { Layout } from "antd";

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: '100vh',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
export const AppContent: React.FC = () => (
  <>
    <Layout.Content style={contentStyle}>Content</Layout.Content>
  </>
);
