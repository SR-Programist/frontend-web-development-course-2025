import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import { AuthContext } from './context/context'
import { useRef } from 'react'

export default function App() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    let { data } = AuthContext();

    let [count , setCount] = useState(0);

    useEffect(()=>{
        console.log("This is a useEffect")
    })

    let NameRef = useRef();

    const handleSubmit =(e)=>{
        e.preventDefault();

        alert(NameRef.current.value);
    }

    const handalChange = (e)=>{
        setForm({...form , [e.target.name]: e.target.value });
    }


    const submitNow = (e)=>{
        e.preventDefault();
        console.log(form)
    }

    
    return(
        <>
            <div className="w-[1280px] h-[800px] m-auto flex flex-col justify-center items-center gap-10">
                <p className="text-4xl">{count}</p>
                <button onClick={()=>setCount(count++) } className='w-[150px] p-2 text-2xl border bg-pink-500 rounded-lg'>Start</button>
                <p className="text-2xl">{data}</p>
            </div>
            <div className="my-10">
                <form onSubmit={handleSubmit} className="w-[450px] m-auto p-4">
                    <input ref={NameRef} type="text" name="" className='p-2 border' />
                    <button className="p-2 bg-pink-500" type='submit'>Search</button>
                </form>
            </div>

            <div className="my-10">
                <form onClick={submitNow} className="w-[480px] m-auto flex flex-col gap-5">
                    <label htmlFor="">Name</label>
                    <input onChange={handalChange} value={form.name} type="text" name="name" className='p-2 border border-black' placeholder='Enter You Name'/>
                    <label htmlFor="">Email</label>
                    <input onChange={handalChange} value={form.email} type="email" name="email" className='p-2 border border-black' placeholder='Enter Your Email'/>
                    <label htmlFor="">Password</label>
                    <input onChange={handalChange} value={form.password} type="password" name="password" className='p-2 border border-black' placeholder='Enter Your Password'/>
                    <button className='px-4 py-2 bg-pink-500'>Singup</button>
                </form>
            </div>
        </>
    )
}

