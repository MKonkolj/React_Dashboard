const TableBody = ({ data, columns, options }) => {
    // ======== Expected paramaters ================
    // data={searchedUsers}  - for mapping
    // columns={{            - for selecting columns
          // user_avatar: true,
          // user_first_name: true,
          // user_last_name: true,
          // user_city: false,
          // user_country: false,
          // user_role: false,
          // user_status: false,
          // user_email: false,
          // client_avatar: false,
          // client_name: true,
          // client_email: false
    // }}
    // options={{            - for selecting options
    //     time: false,
    //     edit: true,
    //     view: true,
    //     invoice: true,
    //     delete: true
    // }}
    //==============================================
  return (
    <div className="table-div">
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
                        {options.time && <span className="time-option options-icon" id="timeBtn"></span>}
                        {options.edit && <span className="edit-option options-icon" id="editBtn"></span>}
                        {options.view && <a><span className="view-option options-icon"></span></a>}
                        {options.invoice && <span className="invoice-option options-icon"></span>}
                        {options.delete && <span className="delete-option options-icon" id="deleteBtn"></span>}
                    </div>
                </td>
              )}
            </tr>
            )})}
          </tbody>
          {/* TABLE BODY END */}
        </table>
      </div>
  )
}

export default TableBody