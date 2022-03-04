import { useContext } from 'react'
import { AppContext } from "../../App"

function DeleteModal({name, id, setDeleteTimeModalShow}) {

  const { url, setReRender } = useContext(AppContext);

  // function to remove item after confiramtion from delete modal
  function removeItem(id) {
    fetch("http://localhost:8080/mytasks" + "/" + id, {
      method: "DELETE"
    }).then(() => {
      setReRender(prevReRender => !prevReRender)
      setDeleteTimeModalShow(false);
      console.log("user/client deleted")
    })
    .catch(e => console.log("errorčina na DELETE!\n" + e))
  }

  return (
    <>
      <div className="black-alpha fixed-center" onClick={() => setDeleteTimeModalShow(false)}></div>
      <div className='delete-modal fixed-center'>
          <p>Are you sure you want to delete</p>
          <p className="deleted-user">{name}</p>
          <div className="flex-2-1">
              <a className="deleted-yes btn-primary" onClick={() => removeItem(id)}>Yes</a>
              <a className="deleted-no btn-primary btn-white" onClick={() => setDeleteTimeModalShow(false)}>No</a>
          </div>
      </div>
    </>
  )
}

export default DeleteModal