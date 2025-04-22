'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
export default function page({ params }) {

  const router = useRouter()
 
  const { date } = React.use(params)
  const [info, setInfo] = useState(null)

  const currentDate = new Date().toJSON().slice(0, 10)
  const activeDate = new Date(date).toJSON().slice(0, 10);

  const prevDate = new Date(activeDate)
  prevDate.setDate(prevDate.getDate() - 1)
  const formattedPrevDate = prevDate.toJSON().slice(0, 10);

  const nextDate = new Date(activeDate)
  nextDate.setDate(nextDate.getDate() + 1)
  const formattedNextDate = nextDate.toJSON().slice(0, 10);
  
  const getData = async () => {
    try{
      const APOD_API = `https://api.nasa.gov/planetary/apod?start_date=${date}&end_date=${date}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`

      const response = await fetch(APOD_API)
      const data = await response.json()
      if(data.code == "400"){
        router.push(`/apod/${formattedPrevDate}`)
        alert("Date Does not Exist Yet")
      }
      else{
        console.log(data)
        setInfo(data[0])
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="min-h-screen bg-fixed bg-no-repeat flex flex-col items-center bg-linear-to-b from-black via-indigo-900 to-purple-900 ">
      <div className="flex flex-col items-center font-serif text-white bg-linear-to-b from-indigo-500 to-emerald-800 m-5 p-5 rounded-lg shadow-md shadow-cyan-200 hover:shadow-inner">
        {info && 
          <>
            <p>{info.date}</p>
            {info.media_type === "image" ? (
              info.hdurl ? (
                <img className="h-48" src={info.hdurl} />
              ) : (
                <img className=" h-48" src={info.url} />
              )
            ) : (
              <iframe className="h-48" src={info.url} />
            )}
            <h1 className="text-xl mt-2">{info.title}</h1>
            <p>{info.explanation}</p>
          </> 
        }
      </div>
      <div className="flex flex-row text-white font-serif">
        <Link className="mr-1 bg-black p-3 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50" href={`/apod/${formattedPrevDate}`}>PREV</Link>
        {currentDate !== activeDate && 
        <Link className="ml-1 bg-black p-3 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50" href={`/apod/${formattedNextDate}`}>NEXT</Link>}
      </div>


    </div>
  )
}
