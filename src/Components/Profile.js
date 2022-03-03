import { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import Loading from "./Loaders/Loading";
import EditModal from "./Modals/EditModal";

function Profile({ id }) {
  // Fetch data
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [ user, setUser ] = useState("")

  const { reRender } = useContext(AppContext)
  const [ editModalShow, setEditModalShow] = useState(false)

  // fetch user data
  useEffect (() => {
    fetch("http://localhost:8000/users/" + id)
    .then(res => {
      if (!res.ok) {
        throw Error ("Response fetch error")
      }
      return res.json()
    }).then(data => {
      setUser(data)
      setIsLoading(false)
    }).catch(error => {
      console.log("errorčina na GET!\n" + error)
      setError(error)
      setIsLoading(false)
    })
  }, [reRender])

  return (
    <>
    {isLoading ? <Loading /> : (
    <div className="profile-container">
        <div className="profile-header">
          <span className="edit-profile edit-option options-icon" onClick={() => {
                  setEditModalShow(true)
                }}></span>
          <img className="profile-avatar" src={"." + user.avatar.image_path} alt={"." + user.avatar.image_alt}/>
          <p className="profile-title">{user.first_name + " " + user.last_name}</p>
        </div>
        <ul className="profile-info">
          <li><strong>First Name: </strong><span>{user.first_name}</span></li>
          <li><strong>Last Name: </strong><span>{user.last_name}</span></li>
          <li><strong>Email: </strong><span>{user.email}</span></li>
          <li><strong>Role: </strong><span> {user.role}</span></li>
          <li><strong>Bank account: </strong><span>{user.tekuci_racun}</span></li>
          <li><strong>Status: </strong><span>{(user.status == "Active") ? "🟢 Active" : "🔴 Inactive"}</span></li>
        </ul>
        <div className="profile-buttons">
          <a className="insert-hours-btn btn-primary">Insert hours</a>
          <p><strong>This month: <span> 120:16:45</span></strong></p>
          <a className="log-out-btn btn-primary btn-white">Log out</a>
        </div>
    </div>
    )}
    {editModalShow && <div className="black-alpha fixed-center" onClick={() => setEditModalShow(false)}></div>}
    <EditModal editModalShow={editModalShow} setEditModalShow={setEditModalShow} id={id} />
    </>
  )
}

export default Profile