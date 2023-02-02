import { useEffect, useState } from "react"
import { AddStuff } from "../components/AddStuff"
import { Navbar } from "../components/Navbar"
import "./Pages.css"

export const SmallStuff = () => {

    const [smallStuff, setSmallStuff] = useState([])

    useEffect(() => {
        fetch("http://localhost:9998/api/bigstuff")
            .then((res) => res.json())
            .then((data) => {
                setSmallStuff(data.furn.filter(single => single.stuff === "Small Stuff"))
                console.log(data)
            })
        console.log(smallStuff)
    }, [])

    return (
        <div>
            <Navbar />
            {console.log(smallStuff)}
            <div className="bigStuffContainer">
                <div >
                    {smallStuff?.map((stuff) =>
                        <div className="pageContainer">
                            <div className="pageImgDiv">
                                <img className="pagePic" src={`http://localhost:9998/${stuff.path}`} alt="bigstuff"></img>
                            </div>
                            <div className="pageText">
                                <h2 className="pageH">{stuff.title}</h2>
                                <p className="pageP">Location: {stuff.room}</p>
                                <h4>Beschreibung: </h4>
                                <p className="pageP">{stuff.text}</p>
                            </div>
                        </div>)}
                </div>
                <div className="formular">
                    <AddStuff />
                </div>
            </div>
        </div>
    )
}