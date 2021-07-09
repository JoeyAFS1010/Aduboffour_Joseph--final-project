import React from 'react'
import './App.css'
//import Navigation from './ui_components/shared/Navigation.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './ui_components/pages/HomePage.js'
import Contact from './ui_components/pages/ContactPage.js'
import Login from './ui_components/pages/Login'
import Portfolio from './ui_components/pages/Portfolio.js'
import Resume from './ui_components/pages/Resume.js'
import Submissions from './ui_components/pages/Submissions.js'
import PrivateRoute from './ui_components/shared/PrivateRoute.js'

function App() {
  return (
   <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/submissions_path">
            <Submissions/>
          </PrivateRoute>
        </Switch>
    </BrowserRouter>
  )
}

export default App;
