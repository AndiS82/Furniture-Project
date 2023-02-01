import { useEffect, useState } from "react"


export function ItemList() {
    const [inventar, setInventar] = useState([])

    useEffect(() => {
        fetch("http://localhost:9998/api/bigstuff")
            .then((response) => response.json())
            .then((data) => { setInventar(data) })
    }, [])
    return (
        <div>
            {inventar.map((inventar, key) => <article key={key}>
                <p>Name: {inventar.titel}</p>
                <p>Raum: {inventar.room}</p>
                <p>Stuff: {inventar.stuff}</p>
            </article>)}
        </div>
    )
}