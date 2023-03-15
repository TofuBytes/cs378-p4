import "./App.css";
import Login from './components/Login';
import Home from './components/Home';
import {Routes, Route, useNavigate} from "react";


//const databaseURL = "https://cs378-c1009-default-rtdb.firebaseio.com/"

function App() {
  return(
    <div className="App">
        <Login/>

    </div>
  );
}

export default App;

