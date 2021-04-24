import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CreateBookings from 'screens/CreateBookings';
import ConfirmBookings from 'screens/ConfirmBookings';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={CreateBookings} exact />
          <Route path='/confirm' component={ConfirmBookings} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;



