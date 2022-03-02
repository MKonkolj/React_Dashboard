const Tasks = () => {
  return (
    <div className="profile-table-container">
        <table className="table profile-table">
            <thead>
            <tr>
                <th>Client</th>
                <th>Task</th>
                <th>Month</th>
                <th>Time</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="profile-table-cell">Lorem ispum very long client name</td>
                <td className="profile-table-cell">Work on lorem ipsuming the pdf on the html channel</td>
                <td className="profile-table-cell">12.11.2021.</td>
                <td className="profile-table-cell">00:45:00</td>
                <td className="profile-table-cell profile-hours-option">
                <div className="hours-option">
                    <span className="dot dot1"></span>
                    <span className="dot dot2"></span>
                    <span className="dot dot3"></span>
                </div>
                </td>
            </tr>
            <tr>
                <td className="profile-table-cell">Lorem Ipsum</td>
                <td className="profile-table-cell">Very very long lorem ipsum clients task in hand</td>
                <td className="profile-table-cell">12.11.2021.</td>
                <td className="profile-table-cell">00:45:00</td>
                <td className="profile-table-cell profile-hours-option">
                    <div className="hours-option">
                    <div className="dot dot1"></div>
                    <div className="dot dot2"></div>
                    <div className="dot dot3"></div>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Tasks