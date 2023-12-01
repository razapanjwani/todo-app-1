"use client"

import { Itask } from "../../types/tasks"
import { FiEdit, FiTrash2 } from "react-icons/fi"
import { FormEventHandler, useState } from "react"
import Modal from "./Modal"
import { useRouter } from "next/navigation"
import { deleteTodo, editTodo } from "../../api"

interface TaskProps {
    task: Itask
}

const Task:React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();

  const [modalOpenEdit, setmodalOpenEdit] = useState<boolean>(false);
  const [modalOpenDeleted, setmodalOpenDeleted] = useState<boolean>(false);
  const [textToEdit, settextToEdit] = useState(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: textToEdit,
    })
    setmodalOpenEdit(false);
    router.refresh();
  }

  const handeDeleteTask =async (id:string) => {
    await deleteTodo(id);
    setmodalOpenDeleted(false);
    router.refresh();
  }

  return (
    <tr key={task.id}>
        <td className="w-full">{task.text}</td>
        <td className="gap-5 flex">
          <FiEdit onClick={() => setmodalOpenEdit(true)} cursor="pointer" size={25} className="text-blue-500"/>
          <Modal modalOpen = {modalOpenEdit} setmodalOpen = {setmodalOpenEdit}>
            <form onSubmit={handleSubmitEditTodo}>
              <h3 className=" font-bold text-lg">Edit Task</h3>
              <div className="modal-action">
              <input value={textToEdit} onChange={e => settextToEdit(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full " />
              <button type="submit" className="btn">Submit</button>
              </div>
            </form>
          </Modal>
          <FiTrash2 onClick={() => setmodalOpenDeleted(true)} size={25} cursor="pointer" className="text-red-500"/>
          <Modal modalOpen = {modalOpenDeleted} setmodalOpen = {setmodalOpenDeleted}>
            <h3 className="text-lg">Are you sure ,you want to delete this task?</h3>
            <div>
              <button onClick={() => handeDeleteTask(task.id)} className="btn btn-primary">Yes</button>
            </div>
          </Modal>
        </td>
    </tr>
  )
}

export default Task