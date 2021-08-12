import React from "react";
import { Table } from "../Table";
export const AccountType = (props) => {
  const columns = [
    { title: "Id", field: "id" },
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
        title="Available Account Types"
        data={props.account_types}
        columns={columns}
        options={{
          search: true,
          paging: true,
          filtering: false,
          exportButton: false,
          actionsColumnIndex: -1,
          rowStyle: {
            backgroundColor: '#EEE',
          }
        }}
        actions={props.actions}
      ></Table>
    </div>
  );
};
