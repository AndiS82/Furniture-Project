import { useEffect, useState } from "react"
import { AddStuff } from "../components/AddStuff"
import { Navbar } from "../components/Navbar"

export const BigStuff = () => {

    const [bigstuff, setBigstuff] = useState([])

    useEffect(() => {
        fetch("http://localhost:9998/api/bigstuff")
            .then((res) => res.json())
            .then((data) => {
                setBigstuff(data.furn.filter(single => single.stuff === "Big Stuff"))
                console.log(data)
            })
        console.log(bigstuff)
    }, [])

    return (
        <div>
            <Navbar />
            {console.log(bigstuff)}
            {bigstuff?.map((stuff) =>
                <div>
                    <div>
                        <img src={`http://localhost:9998/${stuff.path}`} alt="bigstuff"></img>
                    </div>
                    <p>{stuff.title}</p>
                    <p>{stuff.room}</p>
                    <p>{stuff.text}</p>
                </div>)}
            <AddStuff />
        </div>
    )
}