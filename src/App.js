import './styles.css'
import Home from "./pages/Home";
import Header from "./components/Header";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";
import {setPizzas} from "./redux/actions/pizzas";

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        axios.get("http://localhost:3000/db.json").then(response =>{
            dispatch(setPizzas(response.data.pizzas))
        })
    }, [])

    return (
        <div className="App">
            <Header/>
            <Home/>
        </div>
    );
}

export default App;
