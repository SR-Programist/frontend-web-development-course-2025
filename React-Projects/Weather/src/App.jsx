import { useState } from "react"
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify";

function App() {
  const apiKey = "YOUR API_KEY"

  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);

  const getData = async (e)=>{
    e.preventDefault();
    try {
      let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      console.log(res.data);
      if(res.data.cod == 200){
        setData(res.data)
        setShow(true)
      }
    } catch (error) {
      toast.error(error.message)
    }
    
  }

  return(
    <div className="">
      <div className="w-[480px] mt-[150px] mx-auto p-5 rounded-lg border-2 border-black bg-white">
        <h1 className="mb-10 text-center text-3xl font-bold">Wheather</h1>
        <form className="mb-5 flex gap-5">
          <input onChange={(e)=> setCity(e.target.value)} value={city} className="w-[400px] px-2 border border-black rounded-lg" type="text" name="" id="" placeholder="Enter City Name" />
          <button onClick={getData} className="px-3 py-2 text-xl font-bold border border-black rounded-[50%] bg-pink-400">Go</button>
        </form>

        { show ? <ShowData data={data}/> : '' }

      </div>
      <ToastContainer/>
    </div>
  )
}

export default App


const ShowData = ({data})=>{
  return(
    <div className="flex flex-col items-center gap-5">
          <img className="w-[150px] my-5" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
          <h2 className="text-2xl font-bold">{data.main.temp} &deg;C</h2>
          <p className="text-xl">{data.weather[0].description}</p>

          <div className="w-[400px] flex justify-between">
            <div >
              <p className="mb-2">Humidity</p>
              <h2 className="text-2xl font-bold">{data.main.humidity} %</h2>
            </div>
            <div >
              <p className="mb-2">Wind Speed</p>
              <h2 className="text-2xl font-bold">{data.wind.speed} m/s</h2>
            </div>
          </div>
        </div>
  )
}
