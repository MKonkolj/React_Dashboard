import Table from "../Components/Table";
import useFetch from "../Hooks/useFetch";

function Clients() {

  // Get all users from db ===============================
  const { data, isLoading, error } = useFetch("http://localhost:8000/clients")

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
      <Table 
        data={data}
        columns={{
          user_avatar: false,
          user_first_name: false,
          user_last_name: false,
          user_city: false,
          user_country: false,
          user_role: false,
          user_status: false,
          user_email: false,
          client_avatar: true,
          client_name: true,
          client_email: false,
        }}
        options={{
          time: true,
          edit: true,
          view: true,
          invoice: true,
          delete: true
        }}
      />)}
    </div>
  )
}

export default Clients