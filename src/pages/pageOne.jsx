import React from 'react';
import { AppBar, IconButton, Hidden, Toolbar, Typography, createStyles, makeStyles, useTheme } from '@material-ui/core';
import { EmptyState } from '@pxblue/react-components';
import Menu from '@material-ui/icons/Menu';
import Event from '@material-ui/icons/Event';
import { useDrawer } from '../contexts/drawerContextProvider';
import { Table } from "../components/Table"

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

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <AppBar position={'sticky'}>
                <Toolbar className={classes.toolbar}>
                    <Hidden mdUp={true}>
                        <IconButton
                            color={'inherit'}
                            onClick={() => {
                                setDrawerOpen(true);
                            }}
                            edge={'start'}
                            style={{ marginRight: theme.spacing(3) }}
                        >
                            <Menu />
                        </IconButton>
                    </Hidden>
                    <Typography variant={'h6'} color={'inherit'}>
                        Page One
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{ flex: '1 1 0px' }}>
                <Table></Table>
            </div>
        </div>
    );
};
