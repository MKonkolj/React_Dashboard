import Searchbar from "../Components/Searchbar"
import TableBody from "../Components/TableBody";
import { useEffect, useState } from "react";

function Table({ data, columns, options }) {

  // Set all users initially to be displayed =====================
  const [searchedData, setSearchedData] = useState();

  useEffect(() => {
      setSearchedData(data);
      }, [data])

  // Filter Data by searchbox value ==============================
  function handleOnChange (e) {
      let searchQuery = e.target.value.toLowerCase();
      if (columns.client_name) {
        // search by client attributes
        setSearchedData(data.filter(client => 
          client.client_name.toLowerCase().includes(searchQuery)
          // || client.email.toLowerCase().includes(searchQuery)
        ))
      } else {
        setSearchedData(data.filter(user => 
          // search by user attributes
          user.first_name.toLowerCase().includes(searchQuery)
          || user.last_name.toLowerCase().includes(searchQuery)
          || user.email.toLowerCase().includes(searchQuery)
          ))
      }
  }

  return (
    <div>
        {/* SEARCHBAR */}
        <Searchbar handleOnChange={handleOnChange}/>
        {/* TABLE */}
        <TableBody
            data={searchedData}
            columns={columns}
            options={options}
        />
        {/* TABLE END */}
    </div>
  )
}

export default Table