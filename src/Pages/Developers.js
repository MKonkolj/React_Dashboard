import Table from "../Components/Table";
import useFetch from "../Hooks/useFetch";

function Developers() {

  // Get all users from db
  const { data, isLoading, error } = useFetch("http://localhost:8000/users")

  return (
    <div>
      <Table 
        data={data}
        columns={{
          user_avatar: true,
          user_first_name: true,
          user_last_name: true,
          user_city: false,
          user_country: false,
          user_role: false,
          user_status: false,
          user_email: false,
          client_avatar: false,
          client_name: false,
          client_email: false,
        }}
        options={{
          time: false,
          edit: true,
          view: true,
          invoice: false,
          delete: false
        }}
      />
    </div>
  )
}

export default Developers