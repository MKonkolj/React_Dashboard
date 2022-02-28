import { useState } from "react"
import AddModal from "./AddModal"

const Searchbar = ({ handleOnChange, url }) => {

  const [addModalShow, setAddModalShow] = useState(false);

  return (
    <div>
      <div className="top-section">
          <input onChange={handleOnChange} className="searchbar" type="text" placeholder="Search" />
          <input className="add-user-btn btn-primary" type="submit" value="Add new" onClick={() => setAddModalShow(true)} />
      </div>
      {addModalShow && <div className="black-alpha fixed-center" onClick={() => setAddModalShow(false)}></div>}
      <AddModal addModalShow={addModalShow} setAddModalShow={setAddModalShow} url={url}/>
    </div>
  )
}

export default Searchbar