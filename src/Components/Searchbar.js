import { useState } from "react"
import AddModal from "./AddModal"

const Searchbar = ({ handleSearch }) => {

  const [addModalShow, setAddModalShow] = useState(false);

  return (
    <div>
      <div className="top-section">
          <input onChange={handleSearch} className="searchbar" type="text" placeholder="Search" />
          <input className="add-user-btn btn-primary" type="submit" value="Add new" onClick={() => setAddModalShow(true)} />
      </div>
      {addModalShow && <div className="black-alpha fixed-center" onClick={() => setAddModalShow(false)}></div>}
      <AddModal addModalShow={addModalShow} setAddModalShow={setAddModalShow} />
    </div>
  )
}

export default Searchbar