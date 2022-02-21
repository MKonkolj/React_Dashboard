import useFetch from "../Hooks/useFetch"
import Searchbar from "../Components/Searchbar"

function Users() {

  const { data: users, isLoading, error } = useFetch("http://localhost:8000/users")

  return (
    <div>
      <Searchbar />
      <div className="table-div">
        <table className="table">
          <thead>
            <tr>
            <th className="table-cell avatar-column">Avatar</th>
            <th className="table-cell name-column">First name</th>
            <th className="table-cell surname-column">Last name</th>
            <th className="table-cell city-column">City</th>
            <th className="table-cell role-column">Role</th>
            <th className="table-cell status-column">Status</th>
            <th className="table-cell email-column">Email</th>
            <th className="table-cell options-column">Options</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user, index) => {
              return(
              <tr key={index}>
              <td className="table-cell avatar-column"><img src={user.avatar.image_path} alt={user.avatar.image_alt}/></td>
              <td className="table-cell name-column">{user.first_name}</td>
              <td className="table-cell surname-column">{user.last_name}</td>
              <td className="table-cell city-column">{user.city}</td>
              <td className="table-cell role-column">{user.role}</td>
              <td className="table-cell status-column">{user.status}</td>
              <td className="table-cell email-column">{user.email}</td>
              <td className="table-cell options-column">
                <div className="options-container">
                  <span className="edit-option options-icon" id="editBtn"></span>
                  <a><span className="view-option options-icon"></span></a>
                  <span className="delete-option options-icon" id="deleteBtn"></span>
                </div>
              </td>
            </tr>
            )})}
            {/* <tr>
              <td className="table-cell avatar-column"><img src="./img/avatars/avatar-1.png" alt="user avatar"/></td>
              <td className="table-cell name-column">Loreta</td>
              <td className="table-cell surname-column">Ipsum</td>
              <td className="table-cell city-column">Subotica</td>
              <td className="table-cell role-column">Designer</td>
              <td className="table-cell status-column">Active</td>
              <td className="table-cell email-column">loremipsum@gmail.com</td>
              <td className="table-cell options-column">
                <div className="options-container">
                  <span className="edit-option options-icon" id="editBtn"></span>
                  <a><span className="view-option options-icon"></span></a>
                  <span className="delete-option options-icon" id="deleteBtn"></span>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users