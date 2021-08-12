import React, { useState, useEffect, useCallback } from "react";
import { useHistory, useLocation } from "react-router";
import axios from "axios";
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
import Menu from "@material-ui/icons/Menu";
import { useDrawer } from "../../contexts/drawerContextProvider";
import { Scope } from "../scope";
import { AccountType } from "../AccountType/accountType";
import { BankAccountTypes } from "../BankAccountType/bankAccountType";
import { BankTransactionType } from "../BankTransactionType/bankTransactionTypes";
import { Clients } from "../Client/clients";

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  })
);

export const ClientTypeDetail = (props) => {
  // theme
  const theme = useTheme();
  const classes = useStyles(theme);
  const { setDrawerOpen } = useDrawer();

  // states
  const [client_type, setClientType] = useState({});
  const [clients, setClient] = useState([]);
  const [scopes, setScope] = useState([]);
  const [account_types, setAccountType] = useState([]);
  const [bank_account_types, setBankAccountType] = useState([]);
  const [bank_transaction_types, setBankTransactionType] = useState([]);
  const [payment_types, setPaymentType] = useState([]);
  const [payment_kinds, setPaymentKind] = useState([]);

  //   fetch client_types
  useEffect(() => {
    const apiUrl = `https://explorer.eu.ngrok.io/client_types/${props.match.params.client_type_id}`;
    axios.get(apiUrl).then((response) => {
      const client_type = response.data.response_data;
      const clients = response.data.response_data.clients;
      const scopes = response.data.response_data.scopes;
      const account_types = response.data.response_data.account_types;
      const bank_account_types = response.data.response_data.bank_account_types;
      const bank_transaction_types =
        response.data.response_data.bank_transaction_types;
      setClientType(client_type);

      setScope(scopes);
      setAccountType(account_types);
      setBankAccountType(bank_account_types);
      setBankTransactionType(bank_transaction_types);
      setClient(clients);
      console.log("Bank Transaction Types");
      console.log(bank_transaction_types);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {" "}
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
            {client_type.name} Details
          </Typography>
        </Toolbar>
      </AppBar>{" "}
      <p></p>
      <Clients clients={clients}></Clients>
      <Scope scopes={scopes}></Scope>
      <hr />
      <AccountType account_types={account_types}></AccountType>
      <hr />
      <BankAccountTypes
        bank_account_types={bank_account_types}
      ></BankAccountTypes>
      <hr />
      <BankTransactionType
        bank_transaction_types={bank_transaction_types}
      ></BankTransactionType>
    </div>
  );
};
