import React from 'react'
import './App.css'
import Navigation from './ui_components/shared/Navigation.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './ui_components/pages/HomePage'
import Contact from './ui_components/pages/ContactPage'
import Login from './ui_components/pages/Login'
import Portfolio from './ui_components/pages/Portfolio'
import Resume from './ui_components/pages/Resume'
import Submissions from './ui_components/pages/Submissions'
import PrivateRoute from './ui_components/shared/PrivateRoute'

function App() {
  return (
   <BrowserRouter>
        <Navigation />
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
        <Footer />  
    </BrowserRouter>
  )
}

export default App;