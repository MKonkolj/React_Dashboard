import Searchbar from "../Components/Searchbar";
import TableBody from "../Components/TableBody";
import { useEffect, useState, createContext } from "react";

//Create context
export const UrlContext = createContext();

function Table({ url, columns, options }) {

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
      <UrlContext.Provider value={url}>
        <Searchbar handleSearch={handleSearch} />
        <TableBody
            url={url}
            data={searchedData}
            columns={columns}
            options={options}
            setData={setData}
        />
      </UrlContext.Provider>
  )
}

export default Table