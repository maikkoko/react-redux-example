import React from "react"
import { Route, Switch } from "react-router-dom"

import asyncComponent from '../components/AsyncComponent'

const CoreLayout = asyncComponent(() => import(/* webpackChunkName: "layout" */ '../layouts/CoreLayout/CoreLayout'));
const AsyncHome = asyncComponent(() => import(/* webpackChunkName: "home" */ "./Home/HomeContainer"));
const AsyncAbout = asyncComponent(() => import(/* webpackChunkName: "about" */ "./About/AboutView"));

export const createRoutes = (store) => (
  <CoreLayout>
    <Switch>
      <Route path="/" exact component={AsyncHome} />
      <Route path="/about" exact component={AsyncAbout} />
    </Switch>
  </CoreLayout>
)

export default createRoutes
