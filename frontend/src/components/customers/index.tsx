import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import axios from "axios";

interface ICustomer {
  id: string;
  name: string;
  merchantId: string;
}

const columns: ColumnsType<ICustomer> = [
  {
    key: "id",
    title: "ID",
    dataIndex: "id",
  },
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
  },
  {
    key: "merchantId",
    title: "Merchant ID",
    dataIndex: "merchantId",
  },
];

const Customer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/customers").then((res) => {
      setData(res.data);
    });
  }, []);

  return <Table<ICustomer> columns={columns} dataSource={data} />;
};
export default Customer;
