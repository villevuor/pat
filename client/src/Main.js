import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import glamorous from 'glamorous';
import BrowseView from './BrowseView';
import Application from './Application';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={BrowseView}/>
          <Route path='/send' component={Application}/>
        </Switch>
      </main>
    )
  }
}

export default Main;
