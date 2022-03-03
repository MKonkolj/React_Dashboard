import { useEffect, useContext} from "react"
import { useParams } from "react-router-dom"
import Profile from "../Components/Profile"
import Tasks from "../Components/Tasks"

function ProfilePage() {

  const { id } = useParams()

  return (
    <div className="profile-hours-container grid-2-1">
      <Profile id={id} />
      <Tasks />
    </div>
  )
}

export default ProfilePage