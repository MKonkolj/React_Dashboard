function MyProfile() {

  return (
    <div className="profile-hours-container grid-2-1">
      {/* PROFILE SIDE */}
      <div className="profile-container">
        <div>
          <span className="edit-profile edit-option options-icon"></span>
          <img className="profile-avatar" src="./images/profile-images/profile-guy-one.png" alt="profile avatar"/>
          <p className="profile-title">Lorem Ipsum</p>
        </div>
        <ul className="profile-info">
          <li><strong>First Name: </strong><span>Lorem</span></li>
          <li><strong>Last Name: </strong><span>Ipsum</span></li>
          <li><strong>Email: </strong><span>loremipsum@mail.com</span></li>
          <li><strong>Role: </strong><span> Developer</span></li>
          <li><strong>Bank account: </strong><span> 55** **** **** **66</span></li>
          <li><strong>Status: </strong><span>&#128994; Active</span></li>
        </ul>
        <div>
          <a className="insert-hours-btn btn-primary">Insert hours</a>
          <p><strong>This month: <span> 120:16:45</span></strong></p>
          <a className="log-out-btn btn-primary btn-white">Log out</a>
        </div>
      </div>
      {/* TABLE SIDE */}
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
    </div>
  )
}

export default MyProfile