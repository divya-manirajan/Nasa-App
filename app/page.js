
export default function page() {

  const currentDate = new Date().toJSON().slice(0, 10);

  //Home Screen turn into basic title screen with NavBar to access everything.
  //For now -- set up basic navBar component for all screens 
  //APOD view to access /apod and /apod/[date]
  //MARS view to access mars data

  return (
    <div>
      
      <div className="h-screen bg-blue-200">HOME SCREEN</div>

      
    </div>
  )
}
 
