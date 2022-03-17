import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { AppContext } from "../App"
import Profile from "../Components/Profile"
import Tasks from "../Components/Tasks"

function MyProfile() {

  const { setUrl } = useContext(AppContext)
  
  useEffect (() => {
    setUrl("http://localhost:8000/users")
  }, [])

  return (
    <div className="profile-hours-container grid-2-1">
      <Profile />
      <Tasks />
    </div>
  )
}

export default MyProfile