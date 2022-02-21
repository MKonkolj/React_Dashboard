function Sidebar() {
  return (
    <div className="sidebar">
        <img src="./images/universal-logo-small.png" alt="universal logo"/>
        <ul className="sidebar-menu" id="sidebarMenu">
            <li className="current"><a>Users</a></li>
            <li><a>Developers</a></li>
            <li><a>Clients</a></li>
            <li><a>My profile</a></li>
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