'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const router = useRouter()
  const currentDate = new Date().toJSON().slice(0, 10);


  const [APOD_IMG, setAPOD_IMG] = useState(null)


  const getImages = async () => {
    try{
      const APOD_API = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}`

      const response = await fetch(APOD_API)
      const data = await response.json()
      console.log(data.url)
      setAPOD_IMG(data.url)
    } catch (e) {
      console.log(e)
    }    
  }

  useEffect(() => {
    getImages()
  } , [])

//Home Screen turn into basic title screen

  return (
    <div className="min-h-screen bg-linear-to-b from-indigo-900 to-purple-900 font-serif p-5 flex flex-row justify-center text-white">
      <div className="h-full w-[800px] text-center">
        <h1 className="mb-5 text-xl text-white ">Welcome to Cosmic View</h1>
        <div className="grid grid-cols-2 grid-rows-4 gap-4">
          <div className="bg-blue-100 row-span-2 flex flex-col items-center p-4 rounded-3xl bg-radial from-blue-950 to-sky-700 shadow-md shadow-cyan-500/50 hover:shadow-inner cursor-pointer" onClick={() => router.push(`/apod?start=${currentDate}&end=${currentDate}`)}>
            <h1 className="text-lg mb-2">Astronomy Picture of the Day (APOD)</h1>
            {APOD_IMG && <img className="h-48" src={APOD_IMG} />}
            <p className="mt-2 text-sm">Astronomy Picture of the Day (APOD) is a website provided by 
              NASA and Michigan Technological University (MTU) dedicated to 
              astronomical images. Each day a different image or photograph 
              of our universe is featured, along with a brief explanation
              written by a professional astronomer.</p>
          </div>
          <div className="bg-blue-100 col-start-2 row-start-2 row-span-2 flex flex-col items-center p-4 rounded-3xl bg-radial from-blue-950 to-sky-700 shadow-md shadow-cyan-500/50">
            <h1 className="text-lg mb-2">Mars Rover Photos</h1>
            {/* <img className="h-48" src="/vercel.svg" /> */}
            <p className="bg-black ">Coming Soon</p>
            <p className="mt-2 text-sm">This API is designed to collect image data gathered by NASA's 
              Curiosity, Opportunity, and Spirit rovers on Mars and make it 
              more easily available to other developers, educators, and 
              citizen scientists. This API is maintained by Chris Cerami.</p>
          </div>
          <div className="bg-blue-100 col-start-1 row-start-3 row-span-2 flex flex-col items-center p-4 rounded-3xl bg-radial from-blue-950 to-sky-700 shadow-md shadow-cyan-500/50">
            <h1 className="text-lg mb-2">Earth Polychromatic Imaging Camera (EPIC)</h1>
              {/* <img className="h-48" src="/vercel.svg" /> */}
              <p className="bg-black">Coming Soon</p>
            <p>A 10-channel spectroradiometer aboard NOAA's Deep Space Climate Observatory (DSCOVR) 
              spacecraft. EPIC provides color images of the entire sunlit face of Earth at least 
              once every two hours from 1 million miles away.</p>
          </div>
          
          
        </div>
      </div>
    </div>

      
  )
}
 
