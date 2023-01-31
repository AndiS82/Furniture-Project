import { Link } from "react-router-dom"
import "./Components.css"

export const Navbar = () => {
    return (
        <div className="Nav">
            <Link className="NavP" to={"/"}><p >HOME</p></Link>
            <Link className="NavP" to={"/bigstuff"}><p >BIG STUFF</p></Link>
            <Link className="NavP" to={"/notsobigstuff"}><p>NOT SO BIG STUFF</p></Link>
            <Link className="NavP" to={"/smallstuff"}><p >SMALL STUFF</p></Link>
        </div>
    )
}