import Table from "../Components/Table";

function Users() {

  // Get all users from db
  const url = "http://localhost:8000/users";

  return (
    <div>
      <Table 
        url={url}
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