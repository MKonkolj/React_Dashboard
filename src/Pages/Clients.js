
import Table from "../Components/Table";

function Clients() {

  return (
    <div>
      <Table 
        url="http://localhost:8000/clients"
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
      />
    </div>
  )
}

export default Clients