import { Link } from "react-router-dom"
import "./Components.css"

export const Navbar = () => {
    return (
        <div className="Nav">
            <Link className="NavP" to={"/"}><p >HOME</p></Link>
            <Link className="NavP" to={"/Big Stuff"}><p >BIG STUFF</p></Link>
            <Link className="NavP" to={"/Not So Big Stuff"}><p>NOT SO BIG STUFF</p></Link>
            <Link className="NavP" to={"/Small Stuff"}><p >SMALL STUFF</p></Link>
        </div>
    )
}