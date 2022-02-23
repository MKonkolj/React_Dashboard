import Table from "../Components/Table";
import useFetch from "../Hooks/useFetch";

function Users() {

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
          user_city: true,
          user_country: false,
          user_role: true,
          user_status: true,
          user_email: true
        }}
        options={{
          time: false,
          edit: true,
          view: true,
          invoice: false,
          delete: true
        }}
      />
    </div>
  )
}

export default Users