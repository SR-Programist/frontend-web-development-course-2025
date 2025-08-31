import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  const [task, setTask] = useState([])

  const AddTask = (e)=>{
    e.preventDefault();

    let newTask = e.target.task.value;

    let taskValue = [...task, newTask]
    setTask(taskValue);
    console.log(task);
  }

  let allTask = task.map((v , i)=>{
    return(
      <TaskInfo value={v}  index={i} task={task} setTask={setTask}/>
    )
  })
  return(
    <>
      <Header/>

      <div className="w-[1280px] min-h-screen m-auto py-5">
        <form onSubmit={AddTask} className="w-full my-8 flex justify-center">
          <input name='task' type="text" className='w-[65%] p-2 border border-black'  placeholder='Enter Your Task'/>
          <button className='px-4 py-2 text-[18px] font-bold text-white bg-black'>Add Task</button>
        </form>

        { allTask }
      </div>

      <Footer/>
    </>
  )
}

export default App

let TaskInfo =({value , index , task , setTask})=>{

  const [done, setDone] = useState(false);

  let completeTask = ()=>{
    setDone(!done);
  }

  let deleteTask = ()=>{
    let restTask = task.filter((v , i)=> i !== index);
    setTask(restTask);
  }
  return(
    <div className="mb-5 p-3 flex justify-between bg-gray-300">
      <p className={`${done ? 'text-gray-400' : ''} text-2xl`}>{value}</p>
      <div className="flex gap-4">
        <span onClick={completeTask} className="text-3xl cursor-pointer">&#10003;</span>
        <span onClick={deleteTask} className="text-4xl cursor-pointer">&times;</span>
      </div>
    </div>
  )
}
