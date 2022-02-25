import React from 'react'
import { ReactDOM } from 'react'

function DeleteModal({name, id, removeItem, setDeleteModalShow}) {

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