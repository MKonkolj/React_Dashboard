import { NavLink } from "react-router-dom"

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
          <img src="./images/universal-logo-small.png" alt="universal logo"/>
          <ul className="sidebar-menu" id="sidebarMenu">
              <li><NavLink to="/users">Users</NavLink></li>
              <li><NavLink to="/developers">Developers</NavLink></li>
              <li><NavLink to="/clients">Clients</NavLink></li>
              <li><NavLink to="/my-profile">My profile</NavLink></li>
          </ul>
          <div className="burger" id="burger">
              <div className="bar bar1"></div>
              <div className="bar bar2"></div>
              <div className="bar bar3"></div>
          </div>
      </div>
    </div>
  )
}

export default Sidebar