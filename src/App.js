import './styles.css'
import Home from "./pages/Home";
import Header from "./components/Header";
import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";

function App() {

    return (
        <HashRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Home/> } exact/>
                    <Route path={'/cart'} element={<Cart/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
