// This handle is defined in Table.js ==========================
const searchbar = ({ handleOnChange }) => {
  return (
    <div className="top-section">
        <input onChange={handleOnChange} className="searchbar" type="text" placeholder="Search" />
        <input className="add-user-btn btn-primary" type="submit" value="Add user" id="addUserBtn" />
    </div>
  )
}

export default searchbar