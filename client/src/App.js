import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Movies from './pages/Movies'
import Favorites from './pages/Favorites'
import Shows from './pages/Shows'
import Movie from './pages/Movie'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route  path="/movies" exact component={Movies}/>
          <Redirect from="/" exact to="/movies"/>
          <Route path="/movies/:id" component={Movie} />
          <Route  path="/favorites" component={Favorites}/>
          <Route  path="/shows" component={Shows}/>
        </Layout>
      </Switch>

    </Router>
  );
}

export default App;
