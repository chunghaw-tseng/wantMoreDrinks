import { Card, CardContent, Collapse, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, makeStyles, Theme, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from '@material-ui/icons/Edit';
import React,  {MouseEvent, useState} from 'react';
import { useHistory } from 'react-router-dom';

export interface OrderItem{
  id: number,
  name:string,
  price:number,
  notes:string
}

const useStyles = makeStyles({
    order: {
      margin: '10px',
      minWidth: 700
    }
  }
);

interface IOrderCardProps{
  orderitem:OrderItem,
  onEdit: (id: number) => void,
  onDelete: (id: number) => void
}

// Press to edit
// export default function OrderCard(orderitem: OrderItem, onEdit: any, onDelete: any) {
const OrderCard: React.FC<IOrderCardProps> = (props) => {
  const classes = useStyles();
  const [expand, setExpand] = useState(false);
  const history = useHistory();


  const onDelete = (event: MouseEvent) : void =>{
    // TODO Show an alert dialog
     props.onDelete(props.orderitem.id);
  };

  const onEdit = (event: MouseEvent) : void =>{
    props.onEdit(props.orderitem.id);
    history.push("/new");
  };

  return (
    <Card className={classes.order}>
        <ListItem>
            <ListItemText
          primary={props.orderitem.name}
          secondary={
            <React.Fragment>
              {props.orderitem.price}
            </React.Fragment>
          }
        />
            <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
            <IconButton edge="end" aria-label="edit" onClick={onEdit}>
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="expand" onClick={()=> {setExpand(!expand)}}>
              <ExpandMoreIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Collapse in={expand} timeout="auto" unmountOnExit>
            <CardContent>
              <div>{props.orderitem.notes}</div>
            </CardContent>
          </Collapse>
    </Card>
    );
}

export default OrderCard;
