import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Landing from './components/LandingPage/Landing'
import Register from './components/Register'
import Login from './components/Login'
import Searchview from './components/CRUD/Projects/Search/Searchview'
import JOIN from './components/LandingPage/JOIN'
import Profile from './components/Users/Profile'
import OwnedProject from './components/Users/OwnedProjects'
import Editprofile from './components/Users/Editprofile'
import ViewUser from './components/Users/ViewUser'
import EditProject from './components/CRUD/Projects/EditProject'
import DeleteProject from './components/CRUD/Projects/DeleteProject'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <JOIN/>
        <Route exact path="/" component={Landing} />
        <div className="container-full">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/myproject" component={OwnedProject} />
          <Route exact path="/myproject/edit/:id" component={EditProject} />
          <Route exact path="/myproject/delete/:id" component={DeleteProject} />
          <Route exact path="/profile/edit" component={Editprofile} />
          <Route exact path="/users" component={ViewUser} />
          <Route exact path="/search/:id" component={Searchview} />
        </div>
      </div>
    </Router>
  );
}

export default App;