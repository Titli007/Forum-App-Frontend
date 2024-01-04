import React, {useReducer} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import CreatePost from "./CreatePost";
import Home from "./Home";
import PostCard from "./PostCard";
import { UserContext, initialState, reducer } from '../middleware/context'
import UserProfile from "./UserProfile";
import HamburgerMenu from "../components/HamburgerMenu";

function App() {
  const [data, setData] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{data:data, setData:setData}}>
    <div className="font-serif">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<CreatePost/>}/>
          <Route path='/post/:id' element={<PostCard/>}/>
          <Route path='/user/:user_id' element={<UserProfile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </UserContext.Provider>
  );
}

export default App;
