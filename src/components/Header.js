import React from "react"
import SearchBar from "./SearchBar"


export default function Header(props){
    
    // pass searchbar input
    function passSearch(value){
        props.search(value)
    }
    
    // return header 
    return (
        <div className="header">
            <div className="header--section">
                <img src="https://www.kindpng.com/picc/m/237-2377415_transparent-reading-fluency-clipart-open-book-icon-creative.png" className="header--section--logo" alt="logo"></img>
                <h1 className="header--section--title">Books collection</h1>
            </div>
            <SearchBar search={passSearch}/>
        </div>
    )
}

