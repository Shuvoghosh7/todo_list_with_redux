import { useSelector } from "react-redux";
import Todo from "./Todo";


export default function TodoList() {
    const todos =useSelector((state) => state.todos)
    const filters =useSelector((state) => state.filter)
    const filterByStatus=todo => {
        const{status}=filters;
        switch (status) {
            case "Complete":
                return todo.completed;
            case "Incomplete":
                return !todo.completed;    
            default:
                return true;
        }
    
    }
    const filterByColor=todo => {
        const{color}=filters;
        if(color.length > 0){
            return color.includes(todo?.color)
        }
        return true;
    }
    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
                todos
                .filter(filterByStatus)
                .filter(filterByColor)
                .map(todo => <Todo 
                todo={todo}
                key={todo.id}
                />)
            }
            
        </div>
    );
}
