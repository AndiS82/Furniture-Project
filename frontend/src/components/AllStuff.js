import { useEffect, useState } from "react"

export function ItemList() {
    const [inventar, setInventar] = useState([])
    //console.log("inventar console log: ", inventar)
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
                <article>
                    <p>Name: {inventar.titel}</p>
                    <p>Raum: {inventar.room}</p>
                    <p>Stuff: {inventar.stuff}</p>
                </article>
            )}
        </div>
    )
}