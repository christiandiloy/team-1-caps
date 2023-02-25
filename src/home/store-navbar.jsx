let subMenu = document.getElementById("subMenu");
function openProfile() {
    subMenu.classList.toggle("open-menu");
}

const logout = () => {
  localStorage.clear();
  window.location.reload();
};

function StoreNavbar() {
  return (
    <>
      {/* <!-- Navbar --> */}
      <div className="warning">
        <p>
          <span>WARNING: </span>
          This product contains nicotine. Nicotine is an addictive chemical.
          <br />
          Only for adults. Anyone below the age of 21 is prohibited from buying e-cigarette.
        </p>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#08002a', boxShadow: '0.2px 0.2px 10px #000'}}>
        {/* <!-- Container wrapper --> */}
        <div class="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <a
              class="navbar-brand mt-2 mt-lg-0"
              href="#"
              style={{ color: "white", fontWeight: "bold", fontSize: "25px" }}
            >
              <img src="/assets/images/goodsource.jpg" alt="" style={{width: '230px', height: '70px'}}/>
              
            </a>
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div class="navbar navbar-light">
            <div class="container-fluid">
              <a
                class="nav-link"
                href="#"
                style={{ color: "white", marginRight: "15px" }}
              >
                <u>All Products</u>
              </a>
              <form class="d-flex input-group w-auto">
                <input
                  type="search"
                  class="form-control rounded search"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span class="input-group-text border-0" id="search-addon">
                  <i class="fas fa-search"></i>
                </span>
              </form>
            </div>
          </div>
          <div class="d-flex align-items-center">
            {/* <!-- Icon --> */}

            <a class="text-reset me-3" href="#">
              <i class="fa-solid fa-cart-shopping" style={{color: 'white'}}></i>
            </a>
            {/* <!-- Avatar --> */}
            <div class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    
                  <img src="/assets/images/johndoe.jpg" alt="JohnDoe" class="john-doe-icon" style={{width: '30px', height: '30px', borderRadius: '50%'}} onClick={openProfile} />

                    <div className="sub-menu-wrap" id="subMenu">
                      <div className="sub-menu">
                        <div className="user-info">
                        <img src="/assets/images/johndoe.jpg" alt="JohnDoe-dd" style={{width: '70px', height: '70px', borderRadius: '50%'}}/>
                          <h3 style={{marginLeft: '25px', color: '#525252'}}>John Doe</h3>
                        </div>
                        <hr />
                        <a href="#" className="sub-menu-link" style=    {{textDecoration: 'none'}}>
                          <i class="fa-solid fa-cart-shopping"></i>
                          <p>My Cart</p>
                          <span>&#62;</span>
                        </a>
                        <a href="#" className="sub-menu-link" style=    {{textDecoration: 'none'}}>
                          <i class="fa-solid fa-right-from-bracket"></i>
                          <p onClick={logout}>Logout</p>
                          <span>&#62;</span>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </>
  );
}

export default StoreNavbar;
