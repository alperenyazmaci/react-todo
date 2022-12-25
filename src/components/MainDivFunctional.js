import { useState } from "react";

function MainDivFunctional(){
    const [counter, setCounter] = useState(0);
    const [toDoList, setToDoList] = useState([]);
    const [toDoItemAdd, setToDoItemAdd] = useState("");
    const [warning, setWarning] = useState("");

    const handleAdd = () => {
        if(toDoItemAdd !== ""){
            setCounter(counter + 1);
            let tempArr = toDoList;
            tempArr.push(toDoItemAdd);
            setToDoList(tempArr);
            setToDoItemAdd("");
        }else{
            setWarning("Please enter an item.");
        }
    };

    const handleAddEnter = (event) => {
        if(event.key === "Enter"){
            handleAdd();
        }
    };

    const handleRemoveAll = () => {
        if(counter > 0){
            setWarning("All Items are removed!");
        }else{
            setWarning("No Items to remove!");
        }
        setToDoList([]);
        setCounter(0);
    };

    const handleRemove = (indexParam) => {
        setCounter(counter - 1);
        let tempArr = toDoList;
        tempArr.splice(indexParam, 1);
        setToDoList(tempArr);
    }

    const ListItem = (props)=>{
        return (
            <div className="toDoListDiv">
                <h1>{props.name}</h1>
                <button onClick={() => handleRemove(props.index)}>REMOVE</button>
            </div>
        );
    }

    const toDoListHTML = toDoList.map((item, index) => (
                // <div key={index} className="toDoListDiv">
                //     <h1>{item}</h1>
                //     <button onClick={handleRemove}>REMOVE</button>
                // </div>
                    <ListItem key = {index} name = {item} index = {index}></ListItem>
                ))

    const handleOnChange = (event) => {
        if(warning !== ""){
            setWarning("");
        }
        setToDoItemAdd(event.target.value);
    };

    return(
        (<div className="container">
            <div className="div1">
                <input className="input" type = "text" value={toDoItemAdd} onChange={handleOnChange} onKeyDown={handleAddEnter}></input>
                <button className="button1" onClick={handleAdd}>ADD</button>
                <button className="button2" onClick={handleRemoveAll}>REMOVE ALL</button>
            </div>
            <div className="div2">
                <h1>Item Count: {counter}</h1>
                <h1>{warning}</h1>
            </div>
            <div className="div3">
                {toDoListHTML}
            </div>
        </div>)
    );
}export default MainDivFunctional;