import { useEffect, useState } from 'react';
import { Location } from "history";
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { OrderItem } from './components/homepageComponents/orderCard';
import HomePage from './pages/homepage';
import NewOrder from './pages/neworder';

// This component will hold all the informaton about the data

const default_order: OrderItem[] = [
  {
      id:0,
      name: "Test",
      price: 10,
      notes: "This is notes",
  },
  {
      id:1,
      name: "Test 2",
      price: 20,
      notes: "This is notes",
  },
  {
      id:2,
      name: "Test 3",
      price: 30.56,
      notes: "This is notes",
  },
  {
      id:3,
      name: "Test 4",
      price: 40.56,
      notes: "This is notes",
  }
];

const App = () => {

  const [orders, setOrder] = useState<OrderItem[]>(default_order);
  const [currentID, setNextOrder] = useState(3);
  // TODO Remove this Bad Hack
  const [selectedItem, setSelectedItem] = useState(999);
  // const location = useLocation<Location>();

  //   useEffect(()=>{
  //     console.log("Changed Location", location);
  //   }, [location]);



    const findItem = (id: number) : OrderItem | any => {
        for (var i =0 ; i < orders.length; i ++){
            if (orders[i].id == id){
                return i;
            }
        }
        return -1;
    };


    const handleAdd = (id:number, name : string, price:number, notes:string) => {
      if(id == null){
        var nextID = currentID + 1;
        setOrder(orders.concat({id: nextID, name:name, price:price, notes:notes}));
        setNextOrder(nextID);
      }else{
        var currentItems = [...orders];
        var item : number = findItem(id);
        currentItems[item] = {id: id, name:name, price:price, notes:notes}
        setOrder(currentItems);
      }
    };


    const handleDelete = (id: number) => {
        var currentItems = [...orders];
        var index : number = findItem(id);
        if (index != -1){
            currentItems.splice(index, 1);
            setOrder(currentItems);
        }
    };

    const handleEditSelection = (id: number) => {
      setSelectedItem(findItem(id));
    }

    const handleNewOrder = () =>{
      setSelectedItem(999);
    }


  return (
    <Router>
      <Switch>
              <Route exact path='/' render={() => (<HomePage  items={orders} onNew={handleNewOrder} onEdit={handleEditSelection} onDelete={handleDelete}/>)} />
              <Route exact path='/new' render={()=> (<NewOrder item={selectedItem == 999 ? null : orders[selectedItem]} onAdd={handleAdd}/>)} />
          </Switch>
    </Router>
  );
}
export default App;
