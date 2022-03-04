import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { AppContext } from "../App"
import Profile from "../Components/Profile"
import Tasks from "../Components/Tasks"

function ClientPage() {
  
  const { setUrl } = useContext(AppContext)
  
  useEffect (() => {
    setUrl("http://localhost:8000/clients")
  }, [])

  return (
    <div className="profile-hours-container grid-2-1">
      <Profile />
      <Tasks />
    </div>
  )
}

export default ClientPage