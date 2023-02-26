import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import { colorChanged, statusChanged } from "../redux/filter/actionCreator";
const numberOftodos=(no_of_todos)=>{
    switch (no_of_todos) {
        case 0:
            return "No task"
        case 1:
            return "1 task"
        default:
            return `${no_of_todos} tasks`
    }

}
export default function Footer() {
    const dispatch= useDispatch()
    const todos =useSelector((state) => state.todos)
    const todosRemaining=todos.filter(todo => !todo.completed).length
    const filters =useSelector((state) => state.filter)
    const{status,color}=filters

    const handealStatusChange=(status)=>{
        dispatch(statusChanged(status))
    }

    const handealColorChanged=(colors)=>{
        if(color.includes(colors)){
             dispatch(colorChanged(colors,'remove'))
        }else{
            dispatch(colorChanged(colors,'added'))
        }

    }
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOftodos(todosRemaining)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${status == "All" && "font-bold"}`} onClick={()=>handealStatusChange("All")}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`} onClick={()=>handealStatusChange("Incomplete")}>Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === "Complete" && "font-bold"}`} onClick={()=>handealStatusChange("Complete")}>Complete</li>
                <li></li>
                <li></li>
                <li className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${color.includes("green") && "bg-green-500"}`} onClick={()=>handealColorChanged('green')}></li>
                <li className={`h-3 w-3 border-2 border-red-500 md:hover:bg-green-500 rounded-full cursor-pointer ${color.includes("red") && "bg-red-500"}`} onClick={()=>handealColorChanged('red')}></li>
                <li className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-green-500 rounded-full cursor-pointer ${color.includes("yellow") && "bg-yellow-500"}`} onClick={()=>handealColorChanged('yellow')}></li>
            </ul>
        </div>
    );
}
