import { useEffect, useState } from "react"
import { AddStuff } from "../components/AddStuff"
import { Navbar } from "../components/Navbar"

export const BigStuff = () => {

    const [bigstuff, setBigstuff] = useState([])

    useEffect(() => {
        fetch("http://localhost:9998/api/bigstuff")
            .then((res) => res.json())
            .then((data) => {
                setBigstuff(data.furn.filter(single => single.stuff === "bigstuff"))
            })
        console.log(bigstuff)
    }, [])

    return (
        <div>
            <Navbar />
            {console.log(bigstuff)}
            {bigstuff?.map((stuff) =>
                <div>
                    <div>{stuff.title}</div>
                    <div>{stuff.room}</div>
                </div>)}
            <AddStuff />
        </div>
    )
}