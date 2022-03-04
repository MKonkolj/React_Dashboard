import { useContext, useEffect, useState } from "react"
import { AppContext } from "../App"
import Loading from "./Loaders/Loading"
import NoData from "./Loaders/NoData"

const Tasks = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [tasks, setTasks] = useState()

    const { url, reRender } = useContext(AppContext)

    // fetch user data
    useEffect (() => {
        fetch("http://localhost:8080/mytasks")
        .then(res => {
        if (!res.ok) {
            throw Error ("Response fetch error")
        }
        return res.json()
        }).then(data => {
        setTasks(data)
        setIsLoading(false)
        }).catch(error => {
        console.log("errorčina na GET!\n" + error)
        setError(error)
        setIsLoading(false)
        })
    }, [reRender])

  return (
    <>
    {error && <NoData />}
    {isLoading ? <Loading /> : (
    <div className="profile-table-container">
        <table className="table profile-table">
            <thead>
            <tr>
                {console.log(url)}
                {url.includes("users") && <th>Client</th>}
                {url.includes("clients") && <th>Developer</th>}
                <th>Task</th>
                <th>Date</th>
                <th>Time</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {tasks && tasks.map(task => {
                return (
                    <tr key={task.id}>
                        {url.includes("users") && <td className="profile-table-cell">{task.client_name}</td>}
                        {url.includes("clients") && <td className="profile-table-cell">{task.developer}</td>}
                        <td className="profile-table-cell">{task.task}</td>
                        <td className="profile-table-cell">{task.date}</td>
                        <td className="profile-table-cell">{Math.floor(task.time/60) + ":"+ task.time % 60}</td>
                        <td className="profile-table-cell profile-hours-option">
                        <div className="hours-option">
                            <span className="dot dot1"></span>
                            <span className="dot dot2"></span>
                            <span className="dot dot3"></span>
                        </div>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
    )}
    </>
  )
}

export default Tasks