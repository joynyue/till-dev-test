import React from "react";
import { Select } from "antd";

const MerchantSelect = (props: any) => {
  return (
    <Select
      options={props.merchants.map((m: any) => ({
        label: `${m.name} - ${m.id}`,
        value: m.id,
      }))}
      defaultValue="Select Merchant"
      onChange={props.onMerchantSelect}
      style={{ width: 250 }}
    />
  );
};

export default MerchantSelect;
