import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import NewOrder from './pages/neworder';
import { ButtonLink, SelectionBar } from './styles/routingStyles';


// TODO Make this centered
function App() {
  return (
    <Router>
      <SelectionBar>
        <ButtonLink to="/"><Button variant="contained" color="primary">Home</Button></ButtonLink>
        <ButtonLink to="/new"><Button variant="contained">New Order</Button></ButtonLink>
      </SelectionBar>
      
      <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/new' component={NewOrder} />
          </Switch>
    </Router>
  );
}

export default App;
