import Searchbar from "../Components/Searchbar"
import Table from "../Components/Table";
import useFetch from "../Hooks/useFetch";
import { useEffect, useState } from "react";

function Users() {

  // Get all users from db
  const { data: users, isLoading, error } = useFetch("http://localhost:8000/users")

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
      <Table
        data={searchedUsers}
        columns={{
          avatar: true,
          first_name: true,
          last_name: true,
          city: true,
          country: false,
          role: true,
          status: true,
          email: true
        }}
        options={{
          time: false,
          edit: true,
          view: true,
          invoice: false,
          delete: true
        }}
      />
      {/* TABLE END */}
    </div>
  )
}

export default Users