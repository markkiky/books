import React, { useState, useEffect, useCallback } from "react";
import { useHistory, useLocation } from "react-router";
import {
  AppBar,
  IconButton,
  Hidden,
  Toolbar,
  Typography,
  createStyles,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { EmptyState } from "@pxblue/react-components";
import Menu from "@material-ui/icons/Menu";
import Event from "@material-ui/icons/Event";
import { useDrawer } from "../../contexts/drawerContextProvider";
import { Table } from "../Table";
import axios from "axios";
import { EditModal } from "../EditModal";

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  })
);

export const Clients = (props) => {
  // theme manenos
  const theme = useTheme();
  const classes = useStyles(theme);
  const { setDrawerOpen } = useDrawer();
  // navigation tings
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const history = useHistory();
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);
  const navigate = useCallback(
    (id) => {
      history.push(id);
      setSelected(id);
    },
    [history, setSelected]
  );

  // modal tings
  function showEditModal() {
    setEditModal(true);
  }

  function hideEditModal() {
    setEditModal(false);
  }

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      hideEditModal();
    }
  };

  // states
  const [edit_modal, setEditModal] = useState(false);

  // datatable vibes
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Client ID", field: "client_id" },
    { title: "Client Secret", field: "client_secret" },
    { title: "Test account", field: "test" },
  ];
  const actions = [
    {
      icon: "visibility",
      tooltip: "show client type",
      onClick: (event, rowData) => {
        navigate(`/clients/${rowData.id}`);
        if (isMobile) setDrawerOpen(false);
      },
    },
    {
      icon: "edit",
      tooltip: "edit client type",
      onClick: (event, rowData) => {
        // Do edit operation
        showEditModal();
      },
    },
  ];
  return (
    <div>
      <Table
        title="Clients"
        data={props.clients}
        columns={columns}
        options={{
          rowStyle: {
            backgroundColor: "#EEE",
          },
          actionsColumnIndex: -1,
        }}
        actions={actions}
      ></Table>
    </div>
  );
};
