function Sidebar() {
  return (
    <div className="sidebar">
        <img src="img/universal-logo.png" alt="universal logo"/>
        <ul class="sidebar-menu" id="sidebarMenu">
            <li class="current"><Link to= "">Users</Link></li>
            <li><Link to= "">Developers</Link></li>
            <li><Link to= "">Clients</Link></li>
            <li><Link to= "">My profile</Link></li>
        </ul>
        <div class="burger" id="burger">
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
            <div class="bar bar3"></div>
        </div>
    </div>
  )
}

export default Sidebar