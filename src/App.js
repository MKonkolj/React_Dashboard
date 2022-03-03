import Sidebar from "./Components/Sidebar";
import Users from "./Pages/Users";
import Developers from "./Pages/Developers";
import Clients from "./Pages/Clients";
import MyProfile from "./Pages/MyProfile";
import { createContext, useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from "./Pages/ProfilePage";
import ClientPage from "./Pages/ClientPage"

//Create context
export const AppContext = createContext();

function App() {
  // useContext variables
  const [reRender, setReRender] = useState(true);
  const [url, setUrl] = useState("http://localhost:8000/users");

  const context = {
    url: url,
    setUrl,
    reRender: reRender,
    setReRender
  }

  return (
    <AppContext.Provider value={context}>
      <div className="App">
        <div className="grid-2-1">
          <BrowserRouter>
          <Sidebar />
          <div className="dashboard-container">
            <div className="dashboard">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/user/:id" element={<ProfilePage />} />
            <Route path="/clients/:id" element={<ClientPage />} />
          </Routes>
            </div>
          </div>
          </BrowserRouter>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
