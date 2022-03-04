import { useState } from "react"
import AddModal from "./Modals/AddModal"

const Searchbar = ({ handleSearch }) => {

  const [addModalShow, setAddModalShow] = useState(false);

  return (
    <div>
      <div className="top-section">
          <input onChange={handleSearch} className="searchbar" type="text" placeholder="Search" />
          <input className="add-user-btn btn-primary" type="submit" value="Add new" onClick={() => setAddModalShow(true)} />
      </div>
      <AddModal addModalShow={addModalShow} setAddModalShow={setAddModalShow} />
    </div>
  )
}

export default Searchbar