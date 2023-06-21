const Body = () => {
    const onSubmitHandler = e => {
        e.preventDefault();
        
    }
    return (

        <form onSubmit={onSubmitHandler}>
            <input placeholder="Enter notification text" type="text" />
            <button > Send </button>
        </form>
    )
}

export default Body