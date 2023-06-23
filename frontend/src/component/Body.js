import { useState } from "react";
import axios from "axios";
import "../css/Body.css"

const Body = () => {
    const [name, setName] = useState('')

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/api/v1/sending-digest',{name})
        setName('');
    }
    const onChangeHandler = e => {
        setName(e.target.value)
    }
    return (

        <form onSubmit={onSubmitHandler} className="form">
            <input placeholder="Enter notification text" type="text" onChange={onChangeHandler} value={name} className="text"/>
            <button className="btn"> Send </button>
        </form>
    )
}

export default Body