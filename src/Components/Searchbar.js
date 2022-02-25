const searchbar = ({ handleOnChange }) => {

  return (
    <div className="top-section">
        <input onChange={handleOnChange} className="searchbar" type="text" placeholder="Search" />
        <input className="add-user-btn btn-primary" type="submit" value="Add user" />
    </div>
  )
}

export default searchbar