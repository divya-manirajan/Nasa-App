import Link from "next/link";

export default function NavBar() {
  const currentDate = new Date().toJSON().slice(0, 10);

  return (
    <div>
        <Link className="bg-blue-200" href={`/apod?start=${currentDate}&end=${currentDate}`}>TO APOD</Link>
        <Link className="bg-blue-300" href={`/mars`}>TO MARS</Link>
    </div>
  )
}
