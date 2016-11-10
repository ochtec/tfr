import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../containers/Main'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute />
    </Route>
  </Router>
)
