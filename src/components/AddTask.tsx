"use client"

import { AiOutlinePlus } from "react-icons/ai"
import Modal from "./Modal"
import { FormEventHandler, use, useState } from "react"
import { addTodo } from "../../api"
import { useRouter } from "next/navigation"
import {v4 as uuidv4} from "uuid"

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setmodalOpen] = useState<boolean>(false);
  const [newtaskValue, setnewtaskValue] = useState<string>("")

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newtaskValue,
    })
    setnewtaskValue("");
    setmodalOpen(false);
    router.refresh();
  }

  return (
    <div>
        <button onClick={() => {setmodalOpen(true)}} className="btn btn-primary w-full">Add New Task<AiOutlinePlus size={10} classname="ml-5"/></button>
        <Modal modalOpen = {modalOpen} setmodalOpen = {setmodalOpen}>
          <form onSubmit={handleSubmitNewTodo}>
            <h3 className=" font-bold text-lg">Add New Task</h3>
            <div className="modal-action">
            <input value={newtaskValue} onChange={e => setnewtaskValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full " />
            <button type="submit" className="btn">Submit</button>
            </div>
          </form>
        </Modal>
    </div>
  )
}

export default AddTask