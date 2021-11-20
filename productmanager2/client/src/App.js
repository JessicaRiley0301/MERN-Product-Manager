import Main from './components/Main';
import ViewOne from './components/ViewOne';
import Create from './components/Create';
import './App.css';
import {Link, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <h1> Product Manager </h1>
        <Link to ="/">Home</Link> | <Link to ="/products/new">Create</Link>

        <Switch>
          <Route exact path= "/">
            <Redirect to ="/products"/>
          </Route>

          <Route exact path="/products">
            <Create/>
            <Main/>
          </Route>


          <Route exact path="/products/:id">
            <ViewOne/>
          </Route>

        </Switch>
    </div>
  );
}

export default App;
