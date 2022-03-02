import Profile from "../Components/Profile"
import Tasks from "../Components/Tasks"

function MyProfile() {

  return (
    <div className="profile-hours-container grid-2-1">
      <Profile />
      <Tasks />
    </div>
  )
}

export default MyProfile