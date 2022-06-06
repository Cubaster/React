import React from "react"

export default function SearchBar(props){
    const [text, textChange] = React.useState("")

    // set state on input change
    function changeText(event){
        textChange(input =>
           event.target.value)
    }

    // sent input value up
    function getSearch(){
        props.search(text)
    }

    // return seachbar
    return(
        <div className="searchbar">
            <input className="searchbar--input" type="text" value={text} onChange={changeText} placeholder="search"></input>
            <button className="searchbar--button" onClick={getSearch}>
                <img className="searchbar--image" src="https://jf-staeulalia.pt/img/other/89/collection-magnifier-cliparts-white-22.png" alt="loop"></img>
            </button>
        </div>
    )
}