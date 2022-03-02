import { useEffect, useContext} from "react"
import { useParams } from "react-router-dom"
import Profile from "../Components/Profile"
import Tasks from "../Components/Tasks"

function ProfilePage() {

  const { id } = useParams()

  useEffect (() => {

  }, [id])

  return (
    <div className="profile-hours-container grid-2-1">
      <Profile />
      <Tasks />
    </div>
  )
}

export default ProfilePage