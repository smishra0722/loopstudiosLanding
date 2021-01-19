import React from 'react';
import Homepage from './pages/homepage/homepage.component.jsx'
import {Route, Switch} from 'react-router-dom';
import './App.css';

const testPage = () => {
  return (
    <div>Test Success</div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/deep-earth' component={testPage} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
