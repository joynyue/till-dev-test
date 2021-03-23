import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import axios from "axios";

interface Itransactions {
  id: string;
  amount: number;
  description: string;
  ccLastFour: string;
  ccExpiry: string;
  ccToken: string;
  customerId: string;
  date: string;
}

const columns: ColumnsType<Itransactions> = [
  {
    key: "id",
    title: "ID",
    dataIndex: "id",
  },
  {
    key: "amount",
    title: "Amount",
    dataIndex: "amount",
    render: (text, record) => {
      return (record.amount / 100).toFixed(2);
    },
  },
  {
    key: "description",
    title: "Description",
    dataIndex: "description",
  },
  {
    key: "ccLastFour",
    title: "CCLastFour",
    dataIndex: "ccLastFour",
  },
  {
    key: "ccExpiry",
    title: "CCExpiry",
    dataIndex: "ccExpiry",
  },
  {
    key: "ccToken",
    title: "CCToken",
    dataIndex: "ccToken",
  },
  {
    key: "customerId",
    title: "Customer ID",
    dataIndex: "customerId",
  },
  {
    key: "date",
    title: "Date",
    dataIndex: "date",
  },
];

const Transaction = (props: any) => {
  const { transactions } = props.merchant;
  return <Table<Itransactions> columns={columns} dataSource={transactions} />;
};

export default Transaction;
