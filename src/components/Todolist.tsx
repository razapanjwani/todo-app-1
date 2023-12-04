import { Itask } from "../../types/tasks";
import Task from "./Task";

interface Todolistprops {
    tasks: Itask[]; 
}

const TodoList:React.FC<Todolistprops> = ({tasks}) => {
return (
    <div className="overflow-x-auto">
        <table className="table w-full">
            {/* head */}
            <thead>
                <tr className="bg-base-200">
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {    
                tasks.map((task) =>(<Task key={task.id} task={task}/>))
                }
            </tbody>
        </table>
    </div>
);
}

export default TodoList