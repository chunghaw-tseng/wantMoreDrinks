import { Card, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export interface OrderItem{
  id: number,
  name:string,
  price:number,
  notes:string
}

interface IOderCardProps{
  orderitem:OrderItem,
  // onEdit: (name:string, price:number, notes:string) => void,
  // onDelete: (id: number) => void
}

// Press to edit
// export default function OrderCard(orderitem: OrderItem, onEdit: any, onDelete: any) {
const OrderCard: React.FC<IOderCardProps> = (props) => {
  // TODO The click of the button

  return (
    <Card>
        <ListItem>
            <ListItemText>{props.orderitem.name}</ListItemText>
            <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
    </Card>
    );
  
}

export default OrderCard;
