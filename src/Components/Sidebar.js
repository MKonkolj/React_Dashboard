import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">
        <img src="./images/universal-logo-small.png" alt="universal logo"/>
        <ul className="sidebar-menu" id="sidebarMenu">
            <li className="current"><Link to="/">Users</Link></li>
            <li><Link to="/developers">Developers</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/my-profile">My profile</Link></li>
        </ul>
        <div className="burger" id="burger">
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
        </div>
    </div>
  )
}

export default Sidebar