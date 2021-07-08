import { Button, createStyles, Grid, InputAdornment, InputLabel, makeStyles, TextField, Theme } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import { OrderItem } from '../components/homepageComponents/orderCard';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     flexGrow: 1
    },
    orderForm: {
      padding: 20
    },
    fields: {
      padding: 5
    }
  }),
);

interface INewOrderProps{
  item: OrderItem | any,
  onAdd: (id: number| any, name: string, price: number, notes: string) => void
}


const NewOrder: React.FC<INewOrderProps> = (props) => {
  const classes = useStyles();
  const [name, setName] = useState(props.item != null ? props.item.name: "");
  const [price, setPrice] = useState(props.item != null ? props.item.price: 0);
  const [notes, setNotes] = useState(props.item != null ?  props.item.notes : "");

  // TODO Check the different inputs
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch(event.target.getAttribute("id")){
      case "name" : {
        setName(event.target.value);
        break;
      }
      case "price": {
        setPrice(Number(event.target.value));
        break;
      }
      case "notes": {
        setNotes(event.target.value);
        break;
      }
    }
  };

  const history = useHistory();

  // TODO Submit and pass to the other page and finished
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    props.onAdd(props.item == null ? null : props.item.id, name, price, notes);
    history.push('/');
  };
  
    // TODO Deal with errors on the text edit
    return (
      <div className={classes.root}>
        <Grid container direction="column" justify="center">
          <Grid item>
            <h1>{ props.item != null ? "Edit Order" : "New Order"}</h1>
          </Grid>
          <Grid item>
          <form className={classes.orderForm} noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField required fullWidth className={classes.fields} id="name" label="Name" value={name} onChange={handleChange} />
              <TextField required fullWidth className={classes.fields} id="price" label="Price" type="number" value={price} onChange={handleChange}  
              InputProps={{ startAdornment: <InputAdornment position="start">¥</InputAdornment>}}/>
              <TextField multiline fullWidth className={classes.fields} rowsMax={4} variant="outlined" label="Notes" id="notes" value={notes}  onChange={handleChange} />
              <Button type="submit" color="primary">Submit</Button>
          </form>
          </Grid>
        </Grid>
      </div>
    );

}

export default NewOrder;