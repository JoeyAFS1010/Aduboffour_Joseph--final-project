import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './ui_components/pages/HomePage.js'
import Contact from './ui_components/pages/ContactPage.js'
import Login from './ui_components/pages/Login'
import SignUp from './ui_components/pages/SignUp'
import Portfolio from './ui_components/pages/Portfolio.js'
import Resume from './ui_components/pages/Resume.js'
import Submissions from './ui_components/pages/Submissions.js'
import PrivateRoute from './ui_components/shared/PrivateRoute.js'

function App() {
  return (
   <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/ContactPage" component={Contact} />
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/SignUp" component={SignUp}/>
          <PrivateRoute path="/submissions_path">
            <Submissions/>
          </PrivateRoute>
        </Switch>
    </BrowserRouter>
  )
}

export default App;
