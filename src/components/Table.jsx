import React from "react";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from "@material-ui/icons/Edit"

export const Table = (props) => {
  return (
    <div>
      <MaterialTable
        title="Client Types"
        data={props.data.client_types}
        columns={props.columns}
        options={props.options}
        actions={props.actions}
      >
        
      </MaterialTable>
      <Button variant="contained" color="primary">
          Primary
        </Button>
    </div>
  );
};
