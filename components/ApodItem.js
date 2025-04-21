import Link from "next/link";

export default function ApodItem({ item }) {
  return (
    <Link className="cursor-default" href={`apod/${item.date}`}>
      <div className="h-80 flex flex-col items-center font-serif text-white bg-linear-to-b from-indigo-500 to-emerald-800 m-5 p-5 rounded-lg shadow-md shadow-cyan-200 hover:shadow-inner">
        <p>{item.date}</p>
        {item.media_type === "image" ? (
          item.hdurl ? (
            <img className="h-48" src={item.hdurl} />
          ) : (
            <img className=" h-48" src={item.url} />
          )
        ) : (
          <iframe className="h-48" src={item.url} />
        )}
        <h1 className="text-xl mt-2">{item.title}</h1>
      </div>
    </Link>
      
  )
}
