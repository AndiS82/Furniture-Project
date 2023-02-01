import { useEffect, useState } from "react"

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
        <div>
            {inventar?.furn?.map((inventar) =>

                <div id="fetch">
                    <div >
                        <p>Name: {inventar.title}</p>
                    </div>
                    <div>
                        <img src={`http://localhost:9998/${inventar.path}`}></img>
                    </div>
                    <div>
                        <p>Raum: {inventar.room}</p>
                    </div>
                    <div>
                        <p>Stuff: {inventar.stuff}</p>
                    </div>
                </div>)
            }
        </div>
    )
}