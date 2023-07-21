import './styles.css'
import Home from "./pages/Home";
import Header from "./components/Header";
import React from "react";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
        </div>
    );
}

export default App;
