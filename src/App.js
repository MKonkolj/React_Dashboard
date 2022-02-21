import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App grid-2-1">
      <Sidebar />
      <div className="dashboard-container">
        <div className="dashboard">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
