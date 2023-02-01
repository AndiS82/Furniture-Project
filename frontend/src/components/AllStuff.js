import { useEffect, useState } from "react"
import "./Components.css"

export function ItemList() {
    const [inventar, setInventar] = useState([])
    useEffect(() => {
        fetch("http://localhost:9998/api/bigstuff")
            .then((response) => response.json())
            .then((data) => {
                setInventar(data)
                console.log(data)
            })
    }, [])
    console.log(inventar)
    return (
        <div className="container">
            {inventar?.furn?.map((inventar) =>
                <div>
                    <div id="fetch">
                        <div className="picContainer">
                            <img className="previewPic" src={`http://localhost:9998/${inventar.path}`}></img>
                        </div>
                        <p className="previewP">{inventar.stuff.toUpperCase()}</p>
                        {/* <p>Name: {inventar.title}</p>
                    <p>Raum: {inventar.room}</p>
                    <p>Text: {inventar.text}</p> */}
                    </div>
                </div>)
            }
        </div>
    )
}