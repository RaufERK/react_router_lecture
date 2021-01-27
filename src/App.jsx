import About from './components/About';
import Contacts from './components/Contacts';
import Detailed from './components/Detailed';
import Home from './components/Home';
import Prodution from './components/Production';
import { useHistory } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

const App = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.goBack()}>BACK</button>
      <button onClick={() => history.goForward()}>NEXT</button>
      <div>
        <nav>
          <ul className="menu">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
            <li>
              <NavLink to="/prodution">Prodution</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/prodution">
          <Prodution />
        </Route>
        <Route path="/detailed/:id">
          <Detailed />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
