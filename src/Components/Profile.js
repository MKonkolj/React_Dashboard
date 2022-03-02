function Profile() {
  return (
    <div className="profile-container">
        <div className="profile-header">
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
        <div className="profile-buttons">
          <a className="insert-hours-btn btn-primary">Insert hours</a>
          <p><strong>This month: <span> 120:16:45</span></strong></p>
          <a className="log-out-btn btn-primary btn-white">Log out</a>
        </div>
    </div>
  )
}

export default Profile