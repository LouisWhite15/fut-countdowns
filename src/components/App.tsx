import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import Index from '.';
import { Route, Switch } from 'react-router-dom';
import DivisionRivals from './divison-rivals';

function App() {
  return (
    <div className="app">
        <div className="main-content">
          <Header
            brandText='FUT Countdowns'
          />
          <Switch>
            <Route path='/' component={Index} exact />
            <Route path='/division-rivals' component={DivisionRivals} />
          </Switch>
          <Footer />
        </div>
    </div>
  );
}

export default App;
