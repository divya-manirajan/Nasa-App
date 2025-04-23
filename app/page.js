'use client'

export default function page() {


  const test = async () => {
    const APOD_API = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_API_KEY}`

    const response = await fetch(APOD_API)
    const data = await response.json()
    console.log(data)

  }

//Home Screen turn into basic title screen

  return (
    <div className="min-h-screen bg-blue-200 font-serif p-5 flex flex-row justify-center">
      <div className="h-full w-[800px] text-center">
        <h1 className="mb-5">Welcome to the Nasa App</h1> {/* edit title text (color, font, size), margin/padding */}
        <div className="grid grid-cols-2 grid-rows-4 gap-4">
          <div className="bg-blue-100 row-span-2 flex flex-col items-center p-4">
            <h1>Astronomy Picture of the Day (APOD)</h1>
            <img className="h-48" src="/vercel.svg" />
            <p>Description</p>
            {/* use APOD_API to get the picture. Edit description of what APOD is. change 'card' background, shadow, rounded ... */}
          </div>
          <div className="bg-blue-100 col-start-2 row-start-2 row-span-2 flex flex-col items-center p-4">
            <h1>Astronomy Picture of the Day (APOD)</h1>
              <img className="h-48" src="/vercel.svg" />
            <p>Description</p>
            {/* Edit mars title, leave picture and descriptionn. Add "coming soon" */}
          </div>
          <div className="bg-blue-100 col-start-1 row-start-3 row-span-2 flex flex-col items-center p-4">
            <h1>Astronomy Picture of the Day (APOD)</h1>
              <img className="h-48" src="/vercel.svg" />
            <p>Description</p>
            {/* Figure out next API. Add "coming soon" */}
          </div>
          
          
        </div>
      </div>
    </div>

      
  )
}
 
