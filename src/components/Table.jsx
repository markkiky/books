import React from "react";
import MaterialTable from "material-table";

export const Table = () => {
  const data = [
    {
      name: "Mark ",
      age: 35,
    },
    {
      name: "Kish ",
      age: 24,
    },
    {
      name: "Ndunug ",
      age: 24,
    },
  ];
  const column = [
    { title: "Name", field: "name" },
    { title: "Age", field: "age" },
  ];
  return (
    <div>
      <MaterialTable
        title="Client Types"
        data={data}
        columns={column}
        options={{search: true, paging: true, filtering: true, exportButton: true}}
      ></MaterialTable>
    </div>
  );
};
