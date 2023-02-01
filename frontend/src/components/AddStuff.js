import { useEffect, useState } from "react";
import "./Components.css"

export const AddStuff = () => {
    const [furniture, setFurniture] = useState([])
    const [picId, setPicId] = useState()

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
                    "stuff": e.target.stuff.value,
                    "text": e.target.text.value

                })
            })
            .then((response) => response.json())
            .then((data) => {
                setFurniture(data)
                setPicId(data.id)
            })
    }

    return (
        <div className="formDiv">
            <form onSubmit={handleSubmit}>
                <div className="inputDiv"><label>Title</label>
                    <input type="text" name="title" placeholder="Title" />
                </div>
                <div className="inputDiv"><label>Room</label>
                    <input type="text" name="room" placeholder="Room" />
                </div>
                <div className="inputDiv"><label>Stuff Size:</label>
                    <div id="checkboxStuff">
                        <div className="inputDiv"><label>Big Stuff</label>
                            <input name="stuff" type="radio" value="Big Stuff"></input>
                        </div>
                        <div className="inputDiv"><label>Not So Big Stuff</label>
                            <input name="stuff" type="radio" value="Not So Big Stuff" ></input>
                        </div>
                        <div className="inputDiv"><label>Small Stuff</label>
                            <input name="stuff" type="radio" value="Small Stuff" ></input>
                        </div>
                    </div>
                </div>
                <div className="inputDiv"><textarea className="textInput" rows="5" columns="10" maxLength="150" name="text" placeholder="Add Text"></textarea></div>
                <button type="submit">Add Furniture</button>
            </form>
            <div className="uploadDiv">
                <form action={`http://localhost:9998/api/fileUpload/${picId}`} method="post" enctype="multipart/form-data">
                    <div className="inputDiv"><input type="file" name="wallpaper" /></div>
                    <button type="submit">Add Picture</button>
                </form>
            </div>

        </div>
    )
}