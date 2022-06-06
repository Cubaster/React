import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainSection from "./components/MainSection"
import Styles from "./index.css"


export default function App(){
    const [searched, isFound] = React.useState("")

    // return searchbar input to state
    function find(param){
        isFound(param)
    }

    // main body
    return(
        <div className="root">
            <Header search={find}/>
            <MainSection searched={searched}/>
            <Footer />
        </div>
    )
}