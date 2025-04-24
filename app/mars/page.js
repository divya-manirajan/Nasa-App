'use client'
export default function page() {

  // https://api.nasa.gov/mars-photos/api/v1/rovers/{rover_name}/photos?{params}&api_key=xkWAoktdm19dskmAsmgiDoxR8kPsIeRwRfaGC1xV

  // 1 - Style main page and form div
  // 2 - Write out form to keep track of all params as variables
  // 3 - Fetch relevant data from API
  // 4 - Desplay Data in Gallery View (img and description)
  // 5 - Have Detailed View for each (all relevant info)

 
  return (
    <div> {/* Style out background of page */}
      <form>
        {/* Build out form with main params ++ sytle */}
      </form>
      {/* params = sol or earth-date, camera, (page - optional), api_key, rover_name (Curiosity,	Opportunity,	Spirit) */}
      {/* Cameras: FHAZ, RHAZ, MAST, CHECMCAM, MAHLI, MARDI, NAVCAM, PANCAM, MINITES */}
      {/* Abbreviation	        Camera
          FHAZ	           Front Hazard Avoidance Camera
          RHAZ	           Rear Hazard Avoidance Camera
          MAST	           Mast Camera
          CHEMCAM	         Chemistry and Camera Complex
          MAHLI	           Mars Hand Lens Imager
          MARDI	           Mars Descent Imager
          NAVCAM	         Navigation Camera
          PANCAM	         Panoramic Camera
          MINITES	         Miniature Thermal Emission Spectrometer (Mini-TES) */}
    </div>
  )
}
