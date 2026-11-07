/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Card,
  Layout,
  List,
  Spin,
  Statistic,
  Tag,
  Typography,
} from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

import type { Asset } from "../../data";
import CryptoContext from "../../context/crypto-context";
import { useContext } from "react";

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
  padding: "1rem",
};

export function AppSider() {
 const { assets } = useContext(CryptoContext)

 
  return (
    <>
      <Layout.Sider width="25%" style={siderStyle}>
        {assets.map((asset: Asset) => {
          return (
            <Card
              key={asset.id}
              style={{ marginBottom: "1rem", textAlign: "left" }}
            >
              <Statistic
                title={asset.id}
                value={asset.totalAmount}
                precision={2}
                styles={{
                  content: { color: asset.grow ? "#3f8600" : "#cf1322" },
                }}
                prefix={
                  asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />
                }
                suffix="$"
              />
              <List
                dataSource={[
                  {
                    title: "Total Profit",
                    value: asset.totalProfit,
                    withTag: true,
                  },
                  { title: "Asset Amount", value: asset.amount, isPlain: true },
                  // { title: 'Difference', value: asset.growPercent },
                ]}
                renderItem={(item) => (
                  <List.Item>
                    <span>{item.title}</span>
                    <span>
                      {item.withTag && (
                        <Tag color={asset.grow ? "green" : "red"}>
                          {asset.growPercent}%
                        </Tag>
                      )}
                      {item.isPlain && item.value}
                      {!item.isPlain && (
                        <Typography.Text
                          type={asset.grow ? "success" : "danger"}
                        >
                          {item.value.toFixed(2)}$
                        </Typography.Text>
                      )}
                    </span>
                  </List.Item>
                )}
              />
            </Card>
          );
        })}
      </Layout.Sider>
    </>
  );
}
