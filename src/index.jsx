import {useState} from "react";
import '../src/App.css';
import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";

export default function App(){
  
    const [todo, setTodo] = useState([
        {
            title:"go to gym",
            discription: 'workout is necessary',
            done:false
        }
    ]);

    function addTodo(){
        let newArr = [];
        for(let i=0;i<todo.length;i++){
            newArr.push(todo[i]);
        }

        newArr.push({
            title:"food",
            discription: 'necessary',
            done:true
        })

        setTodo(newArr);
    }

    return(
        <div>
            <button onClick={addTodo}>Add a todo</button>
            {JSON.stringify(todo)}
        </div>
    );
} 

