import React, { useState, useEffect } from "react";
import {
  AppBar,
  IconButton,
  Hidden,
  Toolbar,
  Typography,
  createStyles,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import { EmptyState } from "@pxblue/react-components";
import Menu from "@material-ui/icons/Menu";
import Event from "@material-ui/icons/Event";
import { useDrawer } from "../contexts/drawerContextProvider";
import { Table } from "../components/Table";
import axios from "axios";
import { EditModal } from "../components/EditModal";

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  })
);

export const PageOne = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { setDrawerOpen } = useDrawer();

  const [client_types, setClientTypes] = useState([]);
  const [edit_modal, setEditModal] = useState(false);
  const [current_row, setRow] = useState({});

  const columns = [
    { title: "Id", field: "id" },
    { title: "Name", field: "name" },
    { title: "Created At", field: "created_at" },
    { title: "Updated At", field: "updated_at" },
  ];

  const actions = [
    {
      icon: "visibility",
      tooltip: "show client type",
      onClick: (event, rowData) => {
        debugger;
      },
    },
    {
      icon: "edit",
      tooltip: "edit client type",
      onClick: (event, rowData) => {
        // Do edit operation
        showEditModal();
        setRow(rowData);
        //   debugger
      },
    },
  ];

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      hideEditModal();
    }
  };

  //   allow escape key for modal exit
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  //   fetch client_types
  useEffect(() => {
    const apiUrl = "https://explorer.eu.ngrok.io/client_types";
    axios.get(apiUrl).then((response) => {
      const client_types = response.data.response_data;
      setClientTypes({ client_types });
    });
  }, []);
  console.log(client_types);

  function showEditModal() {
    setEditModal(true);
  }

  function hideEditModal() {
    setEditModal(false);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <AppBar position={"sticky"}>
        <Toolbar className={classes.toolbar}>
          <Hidden mdUp={true}>
            <IconButton
              color={"inherit"}
              onClick={() => {
                setDrawerOpen(true);
              }}
              edge={"start"}
              style={{ marginRight: theme.spacing(3) }}
            >
              <Menu />
            </IconButton>
          </Hidden>
          <Typography variant={"h6"} color={"inherit"}>
            Client Types
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ flex: "1 1 0px" }}>
        <Table
          data={client_types}
          columns={columns}
          options={{
            search: true,
            paging: true,
            filtering: true,
            exportButton: false,
            actionsColumnIndex: -1,
          }}
          actions={actions}
        ></Table>
        <EditModal
          show={edit_modal}
          handleClose={hideEditModal}
          title={"Edit Client Type"}
        ></EditModal>
      </div>
    </div>
  );
};
