import Table from "../Components/Table";

function Developers() {

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