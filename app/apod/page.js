'use client'

import ApodItem from "@/components/ApodItem";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const router = useRouter()
  const searchParams = useSearchParams()
  let currentDate = new Date().toJSON().slice(0, 10);
  
  const [info, setInfo] = useState(null)
  const [startDate, setStartDate] = useState(searchParams.get('start') || currentDate)
  const [endDate, setEndDate] = useState(searchParams.get('end') || currentDate)

  const fetchData = async () => {
    const params = new URLSearchParams({start: startDate, end: endDate})
    router.push(`?${params.toString()}`)

    const APOD_API = `https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`

    try{
      const response = await fetch(APOD_API)
      const data = await response.json()
      if(data.code == "400"){
        alert("Please Enter Valid Dates")
        setStartDate(currentDate)
        setEndDate(currentDate)
      }
      else{
        console.log(data)
        setInfo(data)
      }
    } catch (e) {
      console.log(e)
    }  
  }

  useEffect(() => {
    fetchData()
  }, [startDate, endDate]) 

  return (
    <div className="min-h-screen bg-fixed bg-no-repeat flex flex-col items-center bg-linear-to-b from-black via-indigo-900 to-purple-900 ">
        <form className="bg-linear-to-br from-violet-500 to-fuchsia-500 w-64 h-fit mt-20 rounded-2xl p-4 shadow-xl shadow-yellow-200/50 text-center text-white font-serif">
          <div className="mb-2">
            <label className="">Enter Start Date: </label>
            <input className="bg-indigo-950 p-1" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}></input>
          </div>
          <div className="mb-2">
            <label>Enter End Date: </label>
            <input className="bg-indigo-950 p-1" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} ></input> 
          </div>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(info) && info.map((item) => (
            <ApodItem key={item.date} item={item} />
          ))}

        </div>

    </div>
  )
}
