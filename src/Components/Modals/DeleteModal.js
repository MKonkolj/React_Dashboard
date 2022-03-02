import { useContext } from 'react'
import { TableContext } from "../Table"

function DeleteModal({name, id, setDeleteModalShow}) {
  // in parent:
  // {deleteModalShow && <DeleteModal name={name} id={id} setDeleteModalShow={setDeleteModalShow}/>}
  
  // to callback:
  // onClick={() => {
  //   setDeleteModalShow(true);
  //   setName(() => {
  //     let name = "";
  //     if (data.first_name) {
  //       return data.first_name + " " + data.last_name;
  //     } else {
  //       return data.client_name;
  //     }
  //   });
  //   setId(data.id)
  // }}

  const { url, setReRender } = useContext(TableContext);

  // function to remove item after confiramtion from delete modal
  function removeItem(id) {
    fetch(url + "/" + id, {
      method: "DELETE"
    }).then(() => {
      setReRender(prevReRender => !prevReRender)
      setDeleteModalShow(false);
    })
    .catch(e => console.log("errorčina na DELETE!\n" + e))
  }

  return (
    <div className="black-alpha fixed-center">
        <div className='delete-modal fixed-center'>
            <p>Are you sure you want to delete</p>
            <p className="deleted-user">{name}</p>
            <div className="flex-2-1">
                <a className="deleted-yes btn-primary" onClick={() => removeItem(id)}>Yes</a>
                <a className="deleted-no btn-primary btn-white" onClick={() => setDeleteModalShow(false)}>No</a>
            </div>
        </div>
    </div>
  )
}

export default DeleteModal