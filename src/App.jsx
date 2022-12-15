// Components
import Home from "./Pages/Home/Home";

// Routes
import { Routes, Route } from "react-router-dom";

//Brands Data
import brandsData from "./Data/data.json"

// Redux Imports : -
import action from "./GlobalStates/Action/Brand_action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// CSS :-
import "./App.scss";


const App = () => {

  let dispatch = useDispatch();


  // UseEffect
  useEffect(() => {
    dispatch(action(brandsData))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
