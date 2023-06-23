import { useState } from "react";
import axios from "axios";

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

        <form onSubmit={onSubmitHandler}>
            <input placeholder="Enter notification text" type="text" onChange={onChangeHandler} value={name} />
            <button > Send </button>
        </form>
    )
}

export default Body