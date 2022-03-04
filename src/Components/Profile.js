import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { AppContext } from "../App"
import Loading from "./Loaders/Loading";
import NoData from "./Loaders/NoData";
import EditModal from "./Modals/EditModal";
import InsertTimeModal from "./Modals/InsertTimeModal";

function Profile() {

  // Fetch data
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState("")

  const { id } = useParams()
  const { url, reRender } = useContext(AppContext)
  const [ insertTimeModalShow, setInsertTimeModalShow ] = useState(false)
  const [ name, setName ] = useState()
  const [ editModalShow, setEditModalShow] = useState(false)
  const [ tasksTime, setTasksTime] = useState(0)

  const date = new Date

  console.log(url + "/" + id)

  // fetch user data
  useEffect (() => {
    fetch(url + "/" + id)
    .then(res => {
      if (!res.ok) {
        throw Error ("Response fetch error")
      }
      return res.json()
    }).then(data => {
      setData(data)
      setIsLoading(false)
    }).catch(error => {
      console.log("errorčina na GET!\n" + error)
      setError(error)
      setIsLoading(false)
    })
  }, [reRender, url])

    // fetch tasks
    useEffect (() => {
      fetch("http://localhost:8080/mytasks")
      .then(res => {
      if (!res.ok) {
          throw Error ("Response fetch error")
      }
      return res.json()
      }).then(data => {
        setTasksTime(0)
        let tasksThisMonth = data.filter(task => task.date.slice(3, 5) == 11)
        tasksThisMonth.map(task => setTasksTime(prevTime => prevTime + task.time))
      }).catch(error => {
      console.log("errorčina na GET!\n" + error)
      setError(error)
      })
  }, [data])

  return (
    <>
    {isLoading && <Loading />}
    {error && <NoData />}
    {data && url.includes("users") && (<div className="profile-container">
        <div className="profile-header">
          <span className="edit-profile edit-option options-icon" onClick={() => {
                  setEditModalShow(true)
                }}></span>
          <img className="profile-avatar" src={"." + data.avatar.image_path} alt={"." + data.avatar.image_alt}/>
          <p className="profile-title">{data.first_name + " " + data.last_name}</p>
        </div>
        <ul className="profile-info">
          <li><strong>First Name: </strong><span>{data.first_name}</span></li>
          <li><strong>Last Name: </strong><span>{data.last_name}</span></li>
          <li><strong>Email: </strong><span><a href={"mailto:" + data.email}>{data.email}</a></span></li>
          <li><strong>Role: </strong><span> {data.role}</span></li>
          <li><strong>Bank account: </strong><span>{data.tekuci_racun}</span></li>
          <li><strong>Status: </strong><span>{(data.status == "Active") ? "🟢 Active" : "🔴 Inactive"}</span></li>
        </ul>
        <div className="profile-buttons">
          <button className="insert-hours-btn btn-primary" onClick={() => {
            setInsertTimeModalShow(true)
            setName(() => data.first_name + " " + data.last_name);
          }}>Insert hours</button>
          <p><strong>This month: {Math.floor(tasksTime/60) + "h "+ tasksTime % 60 + "min"}</strong></p>
          <button className="log-out-btn btn-primary btn-white">Log out</button>
        </div>
    </div>)}
    {data && url.includes("clients") && (<div className="profile-container">
        <div className="profile-header">
          <span className="edit-profile edit-option options-icon" onClick={() => {
                  setEditModalShow(true)
                }}></span>
          <img className="profile-avatar" src={data.avatar} alt={data.client_name}/>
          <p className="profile-title">{data.client_name}</p>
        </div>
        <ul className="profile-info">
          <li><strong>Name: </strong><span>{data.client_name}</span></li>
          <li><strong>Email: </strong><span><a href={"mailto:" + data.email}>{data.email}</a></span></li>
          <li><strong>Manager: </strong><span> {data.manager}</span></li>
          <li><strong>Manager factor: </strong><span>{data.manager_factor}</span></li>
          <li><strong>Payment method: </strong><span>{data.paymentMethod}</span></li>
        </ul>
        <div className="profile-buttons">
          <button className="insert-hours-btn btn-primary" onClick={() => {
            setInsertTimeModalShow(true)
            setName(() => data.first_name + " " + data.last_name);
          }}>Insert hours</button>
          <p><strong>This month: {Math.floor(tasksTime/60) + "h "+ tasksTime % 60 + "min"}</strong></p>
          <button className="log-out-btn btn-primary btn-white">Log out</button>
        </div>
    </div>)}
    {editModalShow && <div className="black-alpha fixed-center" onClick={() => setEditModalShow(false)}></div>}
    <EditModal editModalShow={editModalShow} setEditModalShow={setEditModalShow} id={id} />
    {insertTimeModalShow && <InsertTimeModal name={name} id={id} setInsertTimeModalShow={setInsertTimeModalShow} />}
    </>
  )
}

export default Profile