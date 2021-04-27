import React from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import Home from './pages';
import { Route, Switch } from 'react-router-dom';
import DivisionRivals from './pages/divison-rivals';

function App() {
  return (
    <div className="app">
        <div className="main-content">
          <Header
            brandText='FUT Countdowns'
          />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/division-rivals' component={DivisionRivals} exact/>
          </Switch>
          <Footer />
        </div>
    </div>
  );
}

export default App;
