import React, { useState, useEffect, useCallback } from "react";
import { useHistory, useLocation } from "react-router";
import {
  createStyles,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { useDrawer } from "../contexts/drawerContextProvider";
import { Table } from "../components/Table";
import axios from "axios";
import { EditModal } from "../components/EditModal";
import { Header } from "../components/Header";


export const ClientTypes = () => {
  // theme manenos
  const theme = useTheme();
  const { setDrawerOpen } = useDrawer();

  // states
  const [client_types, setClientTypes] = useState([]);
  const [edit_modal, setEditModal] = useState(false);
  const [current_row, setRow] = useState({});

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

  // datatable vibes
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
        navigate(`/client_types/${rowData.id}`);
        if (isMobile) setDrawerOpen(false);
      },
    },
    {
      icon: "edit",
      tooltip: "edit client type",
      onClick: (event, rowData) => {
        // Do edit operation
        showEditModal();
        setRow(rowData);
      },
    },
  ];

  // allow escape key for modal exit
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  // fetch client_types
  useEffect(() => {
    const apiUrl = "https://explorer.eu.ngrok.io/client_types";
    axios.get(apiUrl).then((response) => {
      const client_types = response.data.response_data;
      setClientTypes({ client_types });
    });
  }, []);

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

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Header title="Client Types"></Header>
      <div style={{ flex: "1 1 0px" }}>
        <Table
          title="Client Types"
          data={client_types.client_types}
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