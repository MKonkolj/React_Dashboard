import { useEffect, useState } from "react";
import Loading from "./Loading";
import DeleteModal from "./DeleteModal";
import NoData from "./NoData";

const TableBody = ({ url, data, columns, options, setData }) => {

 // Fetch data
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reRender, setReRender] = useState(true);

  // State for deleteModal
  const [deleteModalShow, setDeleteModalShow] = useState (false);
  const [name, setName] = useState();
  const [id, setId] = useState();

  // State for add user modal
  
  

  // Initial fetch for all users
  useEffect (() => {
      fetch (url)
        .then (res => {
          if(!res.ok) {
            throw Error ("Response fetch error");
          }
          return res.json();
        }).then (data => {
          setData(data);
          setIsLoading(false);
          setError(null);
        }).catch(e => {
          console.log("errorčina na GET!\n" + e);
          setIsLoading(false);
          setError(error);
        })
    },[url, reRender])

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
    <div className="table-div">
      {isLoading && <Loading />}
      {!isLoading && !data && <NoData />}
      {!isLoading && data && (
        <table className="table">
          {/* TABLE HEADER */}
            <thead>
              <tr>
              {columns.user_avatar && <th className="table-cell avatar-column">Avatar</th>}
              {columns.user_first_name && <th className="table-cell name-column">First name</th>}
              {columns.user_last_name && <th className="table-cell surname-column">Last name</th>}
              {columns.user_city && <th className="table-cell city-column">City</th>}
              {columns.user_country && <th className="table-cell country-column">Country</th>}
              {columns.user_role && <th className="table-cell role-column">Role</th>}
              {columns.user_status && <th className="table-cell status-column">Status</th>}
              {columns.user_email && <th className="table-cell email-column">Email</th>}
              {columns.client_avatar && <th className="table-cell avatar-column">Avatar</th>}
              {columns.client_name && <th className="table-cell name-column">Client name</th>}
              {options && <th className="table-cell options-column">Options</th>}
              </tr>
            </thead>
            {/* TABLER HEADER END */}
            {/* TABLE BODY */}
            <tbody>
            {data && data.map((data, index) => {
              return(
                <tr key={index}>
                {columns.user_avatar && <td className="table-cell avatar-column"><img src={data.avatar.image_path} alt={data.avatar.image_alt}/></td>}
                {columns.user_first_name && <td className="table-cell name-column">{data.first_name}</td>}
                {columns.user_last_name && <td className="table-cell surname-column">{data.last_name}</td>}
                {columns.user_city && <td className="table-cell city-column">{data.city}</td>}
                {columns.user_country && <td className="table-cell country-column">{data.country}</td>}
                {columns.user_role && <td className="table-cell role-column">{data.role}</td>}
                {columns.user_status && <td className="table-cell status-column">{data.status}</td>}
                {columns.user_email && <td className="table-cell email-column">{data.email}</td>}
                {columns.client_avatar && <td className="table-cell avatar-column"><img src={data.avatar} alt="user avatar"/></td>}
                {columns.client_name && <td className="table-cell name-column">{data.client_name}</td>}
                {options && (
                  <td className="table-cell options-column">
                      <div className="options-container">
                          {options.time && <span className="time-option options-icon"></span>}
                          {options.edit && <span className="edit-option options-icon"></span>}
                          {options.view && <a><span className="view-option options-icon"></span></a>}
                          {options.invoice && <span className="invoice-option options-icon"></span>}
                          {options.delete && <span className="delete-option options-icon"
                            onClick={() => {
                              setDeleteModalShow(true);
                              setName(() => {
                                let name = "";
                                if (data.first_name) {
                                  return data.first_name + " " + data.last_name;
                                } else {
                                  return data.client_name;
                                }
                              });
                              setId(data.id)
                            }}></span>}
                      </div>
                  </td>
                )}
              </tr>
            )})}
            </tbody>
          {/* TABLE BODY END */}
        </table>
        )}
        {/* MODALI */}
        {deleteModalShow && <DeleteModal name={name} id={id} removeItem={removeItem} setDeleteModalShow={setDeleteModalShow}/>}
        
      </div>
  )
}

export default TableBody