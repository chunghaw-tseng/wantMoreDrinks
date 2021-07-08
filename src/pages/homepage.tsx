import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Fab, Grid, List } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import OrderCard, { OrderItem } from '../components/homepageComponents/orderCard';
import { ButtonLink } from '../styles/routingStyles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     flexGrow: 1
    },
    orderList: {
        textAlign: "center"
    },
    title: {
      textAlign: "center"
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
  }),
);

interface IHomePageProps{
    items:OrderItem[],
    onEdit: (id:number ) => void,
    onNew: () => void,
    onDelete: (id: number) => void
  }



// Show all orders and can add edit and delete orders
// List as cards and you can select to delete order from button in the card
// This should be a class to be able to save the state
const HomePage : React.FC<IHomePageProps> = (props) => {
   
    // TODO When press on button reset the props
   const classes = useStyles();
       return (
        <div className={classes.root}>
            <Grid container wrap="nowrap" direction="column" justify="center">
                <Grid item>
                    <h1 className={classes.title}>Your Orders</h1>
                </Grid>
                <Grid item>
                    <List className={classes.orderList}>
                        {props.items.map((item)=> <OrderCard key={item.id} orderitem={item} onEdit={props.onEdit} onDelete={props.onDelete}/>)}
                    </List>
                </Grid>
            </Grid>
            <ButtonLink to="/new">
                <Fab color="primary" aria-label="add" className={classes.fab} onClick={props.onNew}>
                    <AddIcon />
                </Fab>
            </ButtonLink>
        </div>
        );
}

export default HomePage;