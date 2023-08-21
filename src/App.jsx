import Home from "./components/Home";
import Posts from "./components/Posts";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/Login";
import useState from "react";


export default function App() {
  const [token, setToken] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Hello 👋")
  return (
    <>
       <signUpForm token={token} setToken={setToken} />
      <authenticate token={token} setToken={setToken} />
      {/* <home />
      <posts />
      <login/> */}
    </>
  );
}}












// import { useState } from 'react'
// import './App.css'
// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./components/Home"
// import Login from "./components/Login"
// import UserRegistration from "./components/UserRegistration"
// import Posts from "./components/Posts"
// import Authenticate from './components/Authenticate';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//    <>
//   <div id="navbar">
//   <Link to="/home">Home</Link>
//   <Link to="/Login">Login</Link>
//   <Link to="/posts">Posts</Link>
//   <Link to="/userregistration">UserRegistration</Link>
//   </div>

// <div id="main-section">
// <Routes>
// <Route path="/" element={<h1>Home</h1>} />
// <Route path="/login" element={<h1>Login</h1>}/>
// <Route path="/userRegistration" element={<>UserRegistration</>}/>
// <Route path="/posts" element={<h1><Posts></Posts></h1>}/>
// <Route path="/authenticate" element={<h1><Authenticate></Authenticate></h1>}/>
// </Routes>
// </div>
// </>
//   )
// }

// export default App;
