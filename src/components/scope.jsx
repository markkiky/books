import React from "react";
import {Table} from "./Table"
export const Scope = (props) => {
    console.log("props")
    console.log(props.scopes)

    const columns = [
        {title: "Id", field: "id"},
        {title: "Name", field: "name"},
        {title: "Description", field: "description"}
    ]
  return (
    <div>
      <Table
        title="Available Scopes"
        data={props.scopes}
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
