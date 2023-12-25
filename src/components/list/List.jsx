import ShowList from "./ShowList";

const List = ({ todoItems, handleDel,handleEdit }) => {
    return (
        <>
            {
                todoItems.map((item, index)=><ShowList item={item} key={index} handleDel={handleDel} index={index} handleEdit={handleEdit}/>)
            }

        </>
    )
}

export default List;