import Sidebar from "./Components/Sidebar";
import Users from "./Pages/Users";
import Developers from "./Pages/Developers";
import Clients from "./Pages/Clients";
import MyProfile from "./Pages/MyProfile";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App grid-2-1">
      <BrowserRouter>
      <Sidebar />
      <div className="dashboard-container">
        <div className="dashboard">
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
