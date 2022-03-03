import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../App'

function InsertTimeModal({ name, setInsertTimeModalShow }) {

    const { setReRender } = useContext(AppContext)

    const today = new Date
    const [timeData, setTimeData] = useState({
        client_name: name,
        task: "",
        date: today.toLocaleDateString('en-CA'),
        time: 0
    })

    function handleTimeSubmit(e) {
        e.preventDefault()
        // Add task to db
        fetch("http://localhost:8080/mytasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(timeData)
        }).then (() => {
            console.log("new task added");
            setInsertTimeModalShow(false);
            setReRender(prevReRender => !prevReRender)
        })
    }

  return (
    <div className="black-alpha fixed-center">
        <div className="time-modal fixed-center show">
            <p className="modal-subtitle">Enter time used for: {name}</p>
            <form onSubmit={handleTimeSubmit} className="time-modal-container grid-2-1">
                <div className="desc-time">
                    <label>Description:</label>
                    <textarea cols="30" rows="4" placeholder="Work description" 
                    onChange={(e) => setTimeData({...timeData, task: e.target.value})}
                    ></textarea>
                    <label>Time spent:</label>
                    <div>
                        <input className="time-modal-number" type="number" placeholder="00"/>
                        <input className="time-modal-number" type="number" placeholder="00"
                        onChange={(e) => setTimeData({...timeData, time: e.target.value})}
                        />
                    </div>
                </div>
                <div className="date-picker">
                    <label>Date:
                    <input type="date" defaultValue={today.toLocaleDateString('en-CA')} lang="sr-Latn-CS"
                    onChange={(e) => setTimeData({...timeData, date: e.target.value})}
                    /></label>
                </div>
                <div className="time-modal-btns">
                    <button type="submit" className="btn-primary">Yes</button>
                    <button className="btn-primary btn-white" onClick={() => setInsertTimeModalShow(false)}>No</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default InsertTimeModal