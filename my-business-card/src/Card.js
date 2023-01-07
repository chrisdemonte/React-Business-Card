import "./App.css"
import Info from "./Info.js"
import Bio from "./Bio.js"
import Interests from "./Interests.js"
import Footer from "./Footer.js"


function Card(){
    return (
        <div className = "card">
            < Info />
            < Bio />
            < Interests />
            < Footer />
        </div>
    )
}

export default Card