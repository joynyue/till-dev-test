import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Customer from "./components/customers";
import Transaction from "./components/merchants";
import MerchantSelect from "./components/MerchantSelect";
import { Tabs } from "antd";

function App() {
  const [merchantList, setMerchantList] = useState([{ id: "" }]);
  const [selectedMerchantId, setSelectedMerchantId] = useState("");
  useEffect(() => {
    axios.get("/merchants").then((res) => {
      setMerchantList(res.data);
    });
  }, []);

  const handleMerchantSelect = (value: any) => {
    setSelectedMerchantId(value);
  };

  return (
    <div className="App">
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Customers" key="1">
          <Customer />{" "}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Merchants" key="2">
          <MerchantSelect
            onMerchantSelect={handleMerchantSelect}
            merchants={merchantList}
          />
          <Transaction
            merchant={
              merchantList.find((m: any) => {
                return m.id === selectedMerchantId;
              }) || {}
            }
          />{" "}
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default App;
