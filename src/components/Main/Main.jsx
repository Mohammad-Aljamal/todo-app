import React from "react";

import ToDo from "../todo/todo.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

function Main (props){

    return(
        <>
            <Header/>
            <ToDo/>
            <Footer/>
        </>
    )
}

export default Main;
