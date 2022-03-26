import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.scss';
import DashboardContainer from './containers/dashboard/dashboard';
import AboutUsContainer from './containers/aboutUs/aboutUs';

function App() {
  return (
    <div className="App">
        
        <Router>
          <div className = "content">
            <Switch>
              <Route exact path="/" render={() => <DashboardContainer />}></Route>
              <Route exact path="/aboutUs" render={() => <AboutUsContainer />}></Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
