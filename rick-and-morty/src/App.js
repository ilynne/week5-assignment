import React from 'react';
import { BrowserRouter as Router, Route, Link, useParams, Switch, withRouter } from 'react-router-dom';
import './App.scss';
import './RickAndMorty.scss'
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

function App() {
  return (
    <div className={'main-content-container'}>
      <Router>
        <Switch>
          <Route path="/" exact component={CharacterList} />
          <Route path="/character/:id" exact component={CharacterDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
