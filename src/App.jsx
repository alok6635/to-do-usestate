import { useRef, useState } from 'react';
import Header from './components/Header/Header';
import Deleted from './components/deleted/Deleted';
import List from './components/list/List';
import TodoInput from './components/todoInput/TodoInput';

const App = () => {
    const [todoItems, setTodoItems] = useState([]);
    const [deletedItem,setDeletedItem]=useState([]);
     const [edit,setEdit]=useState();
     const[index,setIndex]=useState();


// add todo
    const handleAdd = (inputValue) => {
        console.log(index);
        if(index==undefined){
            setTodoItems([...todoItems, { name: inputValue }])
        }
        else{
            // editmmode
          let res=   todoItems.map((item,id)=>{
                if(id==index){
                    return {name:inputValue};
                } 
                return item;
             })
             console.log(res);
             setTodoItems(res)
             setIndex(undefined)
        }
    }
// deleted todo 
    const handleDel = (index) => {
        let delItem = todoItems.filter((item, id) => index !==id)
        setTodoItems(delItem);

//completed todo
        let deletedData= todoItems.filter((item,id)=>id ==index)
           setDeletedItem([...deletedItem,...deletedData])
    }
// edit todo
    const handleEdit=(editvalue,index)=>{
        setEdit(editvalue);
        setIndex(index)
    }

    return (
        <>
            <Header />
            <div className="wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <TodoInput todoItems={todoItems} handleAdd={handleAdd} edit={edit}/>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col"><h6>Active todo's</h6></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ul className="list-group">
                                <List todoItems={todoItems} handleDel={handleDel} handleEdit={handleEdit} />
                            </ul>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col"><h6>Completed todo's</h6></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ul className="list-group">
                                <Deleted deletedItem={deletedItem}/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
