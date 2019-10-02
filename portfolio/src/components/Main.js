import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from './LandingPage'
import Projects from './Projects'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Resume from './Resume'

const Main = () => (
  <Switch>
    <Route exact path="/" component= {LandingPage} />
    <Route  path="/Projects" component= {Projects} />
    <Route  path="/AboutMe" component= {AboutMe} />
    <Route  path="/Contact" component= {Contact} />
    <Route  path="/Resume" component= {Resume} />
  </Switch>
);
export default Main