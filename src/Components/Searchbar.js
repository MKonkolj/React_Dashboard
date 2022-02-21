const searchbar = () => {
  return (
    <div className="top-section">
        <input className="searchbar" type="text" placeholder="Search" />
        <input className="add-user-btn btn-primary" type="submit" value="Add user" id="addUserBtn" />
    </div>
  )
}

export default searchbar