import { useEffect, useState } from "react";

export const AddStuff = () => {
    const [furniture, setFurniture] = useState([])

    useEffect(() => {
        fetch("http://localhost:9998/api/bigstuff")
            .then((response) => response.json())
            .then((data) => {
                setFurniture(data)
            })
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9998/api/bigstuff",
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "title": e.target.title.value,
                    "room": e.target.room.value,
                    "stuff": e.target.stuff.value
                })
            })
            .then((response) => response.json())
            .then((data) => {
                setFurniture(data)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div><label>Title</label>
                    <input type="text" name="title" />
                </div>
                <div><label>Room</label>
                    <input type="text" name="room" />
                </div>
                <div ><label>Stuff Size:</label>
                    <div id="checkboxStuff">
                        <div><label>Big Stuff</label>
                            <input name="stuff" type="radio" value="bigstuff"></input>
                        </div>
                        <div><label>Not So Big Stuff</label>
                            <input name="stuff" type="radio" value="notsobigstuff" ></input>
                        </div>
                        <div><label>Small Stuff</label>
                            <input name="stuff" type="radio" value="smallstuff" ></input>
                        </div>
                    </div>
                </div>
                <div><label>Image</label>
                    <input type="image" name="image"></input></div>
                <div><input type={"text"} placeholder="Add Text"></input></div>
                <button type="submit">Add Furniture</button>
            </form>
        </div>
    )
}