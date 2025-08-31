import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  let [darkMode , setDarkMode] = useState(false);
  return(
    <>
      
      <div className={` pt-5 ${ darkMode ? 'bg-black text-white' : ''}`}>
        <div className="w-[1280px] min-h-screen m-auto">
          <button onClick={()=> setDarkMode(!darkMode)} className='w-[150px] mb-5 p-2 border bg-pink-500'>Change Mode</button>

          <p className="mb-5 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus provident magni repudiandae hic ducimus doloribus accusamus eligendi libero excepturi, doloremque assumenda repellat dolorem odio explicabo sit. Quidem, adipisci aliquam.</p>
          <p className="mb-5 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus provident magni repudiandae hic ducimus doloribus accusamus eligendi libero excepturi, doloremque assumenda repellat dolorem odio explicabo sit. Quidem, adipisci aliquam.</p>
          <p className="mb-5 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus provident magni repudiandae hic ducimus doloribus accusamus eligendi libero excepturi, doloremque assumenda repellat dolorem odio explicabo sit. Quidem, adipisci aliquam.</p>
          <p className="mb-5 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus provident magni repudiandae hic ducimus doloribus accusamus eligendi libero excepturi, doloremque assumenda repellat dolorem odio explicabo sit. Quidem, adipisci aliquam.</p>
          <p className="mb-5 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi delectus provident magni repudiandae hic ducimus doloribus accusamus eligendi libero excepturi, doloremque assumenda repellat dolorem odio explicabo sit. Quidem, adipisci aliquam.</p>
        </div>
      </div>
    </>
  )
}

export default App
