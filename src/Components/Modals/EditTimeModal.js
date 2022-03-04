import { computeHeadingLevel } from '@testing-library/react'
import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'

function EditTimeModal({ id, editTimeModalShow, setEditTimeModalShow }) {
    // in parent:
    // const [editTimeModalShow, setEditTimeModalShow] = useState(false)
    // const [id, setId] = useState();
    // {editTimeModalShow && <EditTimeModal id={id} editTimeModalShow={editTimeModalShow} setEditTimeModalShow={setEditTimeModalShow} />}

    // to callback:
    // onClick={() => {
    //   setEditTimeModalShow(true)
    //   setId(() => data.id);
    // }}

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const { setReRender } = useContext(AppContext)

    const today = new Date
    const [timeData, setTimeData] = useState()

  //   {
  //     client_name: name,
  //     task: "",
  //     date: today.toLocaleDateString('sr-Latn-CS'),
  //     time: 0
  // }

    useEffect(() => {
      fetch("http://localhost:8080/mytasks" + "/" + id)
      .then(res => {
        if (!res.ok) {
          throw Error ("Response fetch error")
        }
        return res.json()
      }).then (data => {
        setTimeData(data)
        setIsLoading(false)
      }).catch(error => {
        console.log("errorčina na GET!\n" + error)
        setIsLoading(false)
        setError(error)
      })
    }, [setReRender])

    function handleUpdateTimeSubmit(e) {
      e.preventDefault()
      // Add task to db
      fetch("http://localhost:8080/mytasks" + "/" + id, {
          method: "PUT",
          headers: {
            'Accept':'application/json',
            "Content-Type": "application/json"
          },
          body: JSON.stringify(timeData)
      }).then (() => {
          console.log("new task added");
          setEditTimeModalShow(false);
          setReRender(prevReRender => !prevReRender)
      }).catch (error => {
        console.log("errorčina na DELETE!\n" + error);
     })
    }


  return (
      <>
        {timeData && (<><div className="black-alpha fixed-center" onClick={() => setEditTimeModalShow(false)}></div>
        <div className="time-modal fixed-center show">
            <p className="modal-subtitle">Edit task from: {timeData.developer}</p>
            <form onSubmit={handleUpdateTimeSubmit} className="time-modal-container grid-2-1">
                <div className="time-modal-date">
                    <label>Date:</label>
                    <input className="time-modal-date-picker" type="date" defaultValue={timeData.date} lang="sr-Latn-CS"
                    onChange={(e) => setTimeData({...timeData, date: e.target.value})}
                    />
                    <label>Time spent:</label>
                    <div>
                        <input className="time-modal-number" type="number" placeholder="00" value={timeData.time} required
                        onChange={(e) => setTimeData({...timeData, time: e.target.value})}
                        />
                    </div>
                </div>
                <div className="time-modal-desc">
                    <label>Description:</label>
                    <textarea cols="30" rows="4" placeholder="Work description" value={timeData.task} required
                    onChange={(e) => setTimeData({...timeData, task: e.target.value})}
                    ></textarea>
                </div>
                <div className="time-modal-btns">
                    <button type="submit" className="btn-primary">Yes</button>
                    <button className="btn-primary btn-white" onClick={() => setEditTimeModalShow(false)}>No</button>
                </div>
            </form>
        </div></>)}
      </>
  )
}

export default EditTimeModal