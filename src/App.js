import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "./components/Searchview.css"

import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import Searchview from './components/Searchview'
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
        <Route exact path="/" component={Landing} />
        <div className="container-full">
          <Route exact path="/post" component={Post} />
          <Route exact path="/put" component={Put} />
          <Route exact path="/delete" component={Delete} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Searchview" component={Searchview} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/myproject" component={OwnedProject} />
          <Route exact path="/myproject/edit/:id" component={EditProject} />
          <Route exact path="/myproject/delete/:id" component={DeleteProject} />
          <Route exact path="/profile/edit" component={Editprofile} />
          <Route exact path="/users" component={ViewUser} />
        </div>
      </div>
    </Router>
  );
}

export default App;