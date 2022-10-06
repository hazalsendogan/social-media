import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import axios from "axios";
import React, {useState, useEffect} from "react";
import User from "./Users/User";
import { Nav, Navbar, NavItem } from "reactstrap";
import Users from "./Users/Users";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then(res => setUsers(res.data))
  }, [users])
  
  return (
    <BrowserRouter>
    <Navbar className="bg-purple">
      <Nav>
        <NavItem>
          <Link className="nav-link text-white" to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link text-white" to="/users">Users</Link>
        </NavItem>
      </Nav>
    </Navbar>
      <Routes>
        <Route exact path="/" element={<Home users={users}/>}></Route>
        <Route exact path="/users" element={<Users users={users}/>}></Route>
        <Route exact path="/user/:id" element={<User/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
