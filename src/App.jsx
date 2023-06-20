import React from "react";
import Picture from "./components/Picture";
import Info from "./components/Info";
import Media from "./components/Media";
import AboutInterests from "./components/AboutInterests";
import Footer from "./components/Footer";

export default function App() {
    return(
        <>
        <div>
            <Picture/>
            <Info/> 
            <Media/>
            <AboutInterests/> 
            <Footer/>
        </div>
        </>
    ); 
}
