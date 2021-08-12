import React from "react";
import { Table } from "../Table"

export const BankAccountTypes = (props) => {

    const columns = [
        {
            title: "Id", field: "id"
        },

        {
            title: "Name", field: "name"
        },
        {
            title: "Description", field: "description"
        }
    ]
  return <div>
      <Table
      title= "Bank Account Types"
        data={props.bank_account_types}
        columns={columns}
        options={{
            rowStyle: {
                backgroundColor: '#EEE',
              }
        }}
      >

      </Table>
  </div>;
};
