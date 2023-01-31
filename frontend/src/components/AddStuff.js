export const AddStuff = () => {
    return (
        <div>
            <form>
                <div><label>Title</label>
                    <input type="text" name="title"></input></div>
                <div><label>Room</label>
                    <input type="text" name="room"></input></div>
                <div ><label>Stuff Size:</label>
                    <div id="checkboxStuff">
                        <div><label>Big Stuff</label>
                            <input name="stuff" type={"radio"}></input>
                        </div>
                        <div><label>Not So Big Stuff</label>
                            <input name="stuff" type={"radio"}></input>
                        </div>
                        <div><label>Small Stuff</label>
                            <input name="stuff" type={"radio"}></input>
                        </div>
                    </div>
                </div>
                <div><label>Image</label>
                    <input type="image" name="image"></input></div>
                <div><input type={"text"} placeholder="Add Text"></input></div>
            </form>
        </div>
    )
}