import Searchbar from "../Components/Searchbar"
import TableBody from "../Components/TableBody";
import { useEffect, useState } from "react";

function Table({ data: users, columns, options }) {

  // Set all users initially to be displayed
  const [searchedUsers, setSearchedUsers] = useState();

  useEffect(() => {
      setSearchedUsers(users);
      }, [users])

  // Filter users by searchbox value
  function handleOnChange (e) {
      let searchQuery = e.target.value.toLowerCase();
      setSearchedUsers(users.filter(user => 
      user.first_name.toLowerCase().includes(searchQuery)
      || user.last_name.toLowerCase().includes(searchQuery)
      || user.email.toLowerCase().includes(searchQuery)
      ))
  }

  return (
    <div>
        {/* SEARCHBAR */}
        <Searchbar handleOnChange={handleOnChange}/>
        {/* TABLE */}
        <TableBody
            data={searchedUsers}
            columns={columns}
            options={options}
        />
        {/* TABLE END */}
    </div>
  )
}

export default Table