import Table from "../Components/Table";

function Users() {

  return (
    <div>
      <Table 
        url="http://localhost:8000/users"
        columns={{
          user_avatar: true,
          user_first_name: true,
          user_last_name: true,
          user_city: true,
          user_country: false,
          user_role: true,
          user_status: true,
          user_email: true,
          client_avatar: false,
          client_name: false,
          client_email: false,
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