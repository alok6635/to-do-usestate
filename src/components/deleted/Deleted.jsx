const Deleted=({deletedItem})=>{
    
    return(
        <>
       {
        deletedItem.map((item,index)=>{
          return  <li className="list-group-item pb-2"key={index}>{item.name}</li>
        })
       }
        </>
    )
}
export default Deleted;