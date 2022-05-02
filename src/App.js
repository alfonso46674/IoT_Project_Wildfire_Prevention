import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.scss';
import DashboardContainer from './containers/dashboard/dashboard';
import AboutUsContainer from './containers/aboutUs/aboutUs';
import HomepageContainer from './containers/homepage/homepage';

function App() {
  return (
    <div className="App">
        
        <Router>
          <div className = "content">
            <Switch>
              <Route exact path="/homepage" render={() => <HomepageContainer />}></Route>
              <Route exact path="/aboutUs" render={() => <AboutUsContainer />}></Route>
              <Route exact path="/" render={() => < DashboardContainer/>}></Route>

            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
