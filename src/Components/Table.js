import Searchbar from "../Components/Searchbar";
import TableBody from "../Components/TableBody";
import { useEffect, useState, createContext } from "react";

function Table({ columns, options }) {

  // Set all users initially to be displayed =====================
  const [data, setData] = useState();
  const [searchedData, setSearchedData] = useState();

  useEffect(() => {
    setSearchedData(data);
    }, [data])

  // Search & display  ==============================
  function handleSearch (e) {
      let searchQuery = e.target.value.toLowerCase();
      if (columns.client_name) {
        // search clients
        setSearchedData(data.filter(client => 
          client.client_name.toLowerCase().includes(searchQuery)
        ))
      } else {
        // search users
        setSearchedData(data.filter(user => 
          user.first_name.toLowerCase().includes(searchQuery)
          || user.last_name.toLowerCase().includes(searchQuery)
          || user.email.toLowerCase().includes(searchQuery)
          ))
      }
  }

  return (
      <>
        <Searchbar handleSearch={handleSearch} />
        <TableBody
            data={searchedData}
            columns={columns}
            options={options}
            setData={setData}
        />
      </>
  )
}

export default Table