import AddTask from '@/components/AddTask'
import Todolist from "@/components/Todolist"
import { getAllTodos } from '../../api'

export default async function Home() {
  const tasks = await getAllTodos()

  return (
    <main className='max-w-4xl mx-auto mt-4 '>
      <div className='text-center flex my-5 flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List App</h1>
        <AddTask />
      </div>
      <Todolist tasks={tasks}/>
    </main>
  )
}
