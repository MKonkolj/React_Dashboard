const TableBody = ({ data, columns, options }) => {
    // ======== Expected paramaters ================
    // data={searchedUsers}  - for mapping
    // columns={{            - for selecting columns
    //     avatar: true,
    //     first_name: true,
    //     last_name: true,
    //     city: true,
    //     country: false,
    //     role: true,
    //     status: true,
    //     email: true
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
            {columns.avatar && <th className="table-cell avatar-column">Avatar</th>}
            {columns.first_name && <th className="table-cell name-column">First name</th>}
            {columns.last_name && <th className="table-cell surname-column">Last name</th>}
            {columns.city && <th className="table-cell city-column">City</th>}
            {columns.country && <th className="table-cell country-column">Country</th>}
            {columns.role && <th className="table-cell role-column">Role</th>}
            {columns.status && <th className="table-cell status-column">Status</th>}
            {columns.email && <th className="table-cell email-column">Email</th>}
            {options && <th className="table-cell options-column">Options</th>}
            </tr>
          </thead>
          {/* TABLER HEADER END */}
          {/* TABLE BODY */}
          <tbody>
            {data && data.map((user, index) => {
              return(
              <tr key={index}>
              {columns.avatar && <td className="table-cell avatar-column"><img src={user.avatar.image_path} alt={user.avatar.image_alt}/></td>}
              {columns.first_name && <td className="table-cell name-column">{user.first_name}</td>}
              {columns.last_name && <td className="table-cell surname-column">{user.last_name}</td>}
              {columns.city && <td className="table-cell city-column">{user.city}</td>}
              {columns.country && <td className="table-cell country-column">{user.country}</td>}
              {columns.role && <td className="table-cell role-column">{user.role}</td>}
              {columns.status && <td className="table-cell status-column">{user.status}</td>}
              {columns.email && <td className="table-cell email-column">{user.email}</td>}
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