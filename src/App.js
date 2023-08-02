import './styles.css'
import Home from "./pages/Home";
import Header from "./components/Header";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
