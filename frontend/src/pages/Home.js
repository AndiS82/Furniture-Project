import { ItemList } from "../components/AllStuff"
import { Navbar } from "../components/Navbar"
import "./Pages.css"


export const Home = () => {
    return (
        <div>
            <>
                <Navbar />
            </>
            <header>
                <h1>My Furniture</h1>
            </header>
            <>
                <ItemList />
            </>
        </div>
    )
}