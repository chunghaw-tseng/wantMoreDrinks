import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import OrderCard, { OrderItem } from '../components/homepageComponents/orderCard';
import { Autorenew, StoreMallDirectorySharp } from '@material-ui/icons';

// TODO Learn how to use styles to center the stuff
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }),
);

const orders: OrderItem[] = [
    {
        id:1,
        name: "Test",
        price: 30.56,
        notes: "This is notes",
    },
    {
        id:2,
        name: "Test 2",
        price: 30.56,
        notes: "This is notes",
    },
    {
        id:3,
        name: "Test 3",
        price: 30.56,
        notes: "This is notes",
    },
    {
        id:4,
        name: "Test 4",
        price: 30.56,
        notes: "This is notes",
    }
]


export interface HomePageProps {
    
}


// Show all orders and can add edit and delete orders
// List as cards and you can select to delete order from button in the card
// This should be a class to be able to save the state
export default function HomePage() {
   const classes = useStyles();

       return (
        <div className={classes.root}>
            <h1>Your Orders</h1>
            <div className={classes.demo}>
            <List>
                {orders.map((item)=> <OrderCard orderitem={item}/>)}
            </List>
            </div>
        </div>
        );
}
