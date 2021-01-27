import Home from './components/Home'
import Contacts from './components/Contacts'
import About from './components/About'
import Production from './components/Production'
import Detailed from './components/Detailed'
import {
  Route,
  NavLink,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import './App.css'

const App = () => {
  return (

    <div>
      <div >
        <ul className="menu">
          <li><NavLink exact activeClassName={'active2'} to="/">Home</NavLink></li>
          <li><NavLink activeStyle={{ color: 'blue' }} to="/about">About</NavLink></li>
          <li>
            <Link
              to={{
                pathname: "/contacts",
                search: "?sort=name",
                hash: "#the-hash",
                state: { fromDashboard: true }
              }}
            >Contacts</Link>
          </li>
          <li><NavLink to="/production">production</NavLink></li>
        </ul>
      </div>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/about' component={About} />
        <Route path='/production/:id' component={Detailed} />
        <Route path='/production' component={Production} />
        <Redirect to={'/'} />
        {/* показывет ошибку есл нет такого пути */}
        {/* <Route render={() => (<h1>404 No this Page</h1>)} /> */}
      </Switch>


    </div>);
}

export default App;
