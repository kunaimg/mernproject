import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Read from "./components/read"
import Update from "./components/update"

import Delete from "./components/deletee"

import Create from "./components/create"
import Error from "./components/Error"
import Allusers from "./components/allusers"
import {Link} from "react-router-dom"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand-lg">
  <div class="container">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="nav-link" aria-current="page" to={"/create"}>Create user</Link>
        </li>
   
        <li class="nav-item">
        <Link class="nav-link" to={"/allusers"}>All users</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    
    <Routes>
      <Route path='/' element={<Allusers></Allusers>}></Route>
      <Route path='/update/:id' element={<Update></Update>}></Route>
      <Route path='/delete' element={<Delete></Delete>}></Route>
      <Route path='/create' element={<Create></Create>}></Route>
      <Route path='/error' element={<Error></Error>}></Route>
      <Route path='/allusers' element={<Allusers></Allusers>}></Route></Routes>
      </BrowserRouter>
      
  )
}

export default App