import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import ProvideContext from './components/Context/ProvideContext';
import FoodMenu from './components/FoodMenu/FoodMenu';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';



function App() {
  return (
    <div className="App">
      <ProvideContext>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/foodmenu">
              <FoodMenu></FoodMenu>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </ProvideContext>

    </div>
  );
}

export default App;
