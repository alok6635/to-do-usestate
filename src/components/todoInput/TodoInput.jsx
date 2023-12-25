import { useEffect, useState } from "react";

const TodoInput=({handleAdd,edit})=>{

    const [inputValue,setInputValue] = useState()

    const handleInp = (e) => {
        setInputValue(e.target.value);
    }

    const addBtn = (e) => {
        e.preventDefault();
        handleAdd(inputValue)
        setInputValue('');
    }

    useEffect(()=>{
        setInputValue(edit)
    }, [edit])


    return (
        <>
            <form className="input-group mb-3" onSubmit={(e) => addBtn(e)}>
                <input type="text" className="form-control" placeholder="Please enter here" onChange={handleInp} value={inputValue} />
                <button className="btn btn-success py-1" type="submit" id="button-addon2">Add</button>
            </form>
        </>
    )
}
export default TodoInput;