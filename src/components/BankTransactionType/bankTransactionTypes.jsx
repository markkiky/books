import React from "react";
import { Table } from "../Table";

export const BankTransactionType = (props) => {
  const columns = [
    {
      title: "Id",
      field: "id",
    },

    {
      title: "Name",
      field: "name",
    },
    {
      title: "Description",
      field: "description",
    },
  ];
  return (
    <div>
      <Table
        title="Bank Transactions"
        data={props.bank_transaction_types}
        columns={columns}
        options={{
          rowStyle: {
            backgroundColor: "#EEE",
          },
        }}
      ></Table>
    </div>
  );
};
