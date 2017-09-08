import React from 'react'
import { Route, Switch } from 'react-router-dom'

import CoreLayout from '../layouts/CoreLayout'

import Home from './Home'
import Counter from './Counter'
import NotFound from './NotFound'

export const createRoutes = store => (
  <CoreLayout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/counter" exact component={Counter(store)} />
      <Route component={NotFound} />
    </Switch>
  </CoreLayout>
)

export default createRoutes
