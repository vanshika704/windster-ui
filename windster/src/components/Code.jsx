import React from "react";


function Code() {
  return (
    <>
        <div
          className="sidebar"
          style={{ border: "1.5px solid #EEEEEE", borderTop: "none" }}
        >
          <a href="#">
            <i class="fa-solid fa-chart-pie"></i>Dashboard
          </a>
          <a href="#">
            <i class="fa-solid fa-boxes-stacked"></i>Kanban <button style={{padding:"0vh 1vh 0vh 1vh", border:"none", borderRadius: "10px", marginLeft:"10vh"}}>Pro</button>
          </a>
          <a href="#">
            <i class="fa-solid fa-inbox"></i>Inbox <button style={{padding:"0vh 1vh 0vh 1vh", border:"none", borderRadius: "10px", marginLeft:"12.2vh"}}>Pro</button>
          </a>
          <a href="#">
            <i class="fa-solid fa-user"></i>User
          </a>
          <a href="#">
            <i class="fa-solid fa-bag-shopping"></i>Products
          </a>
          <a href="#">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>Sign In
          </a>
          <a href="#">
            <i class="fa-solid fa-table"></i>Sign Up
          </a>
          <hr style={{ color: "gray" }} />
          <a href="#">
            <i class="fa-solid fa-gem"></i>Upgrade To Pro
          </a>
          <a href="#">
            <i class="fa-solid fa-clipboard-list"></i>Documentation
          </a>
          <a href="#">
            <i class="fa-solid fa-layer-group"></i>Components
          </a>
          <a href="#">
            <i class="fa-solid fa-circle-radiation"></i>Help
          </a>
        </div>
        <div
          className="topnav"
          style={{ border: "1.5px solid #EEEEEE", borderTop: "none" }}
        >
          <a class="active" href="#logo">
            <img src="windster-ui\windster\src\assets\windsteruilogo.svg"/>
          </a>
          <a href="#">
            <strong>Windster</strong>
          </a>
          <div
            className="search"
            style={{
              marginLeft: "17vh",
              marginBottom:"1vh",
              border: "1px solid #dee2e6 ",
              borderRadius: "10px",
              display: "flex",
              backgroundColor: "#f6f9fc",
              alignItems: "center",
              padding: "1vh",
              paddingTop: "0",
              width: "35vh",
            }}
          >
            <i
              class="fa-solid fa-magnifying-glass"
              style={{
                marginRight: "10px",
                marginTop: "8px",
                color: "#9E9E9E",
              }}
            ></i>
            <input
              type="text"
              placeholder="Search"
              style={{
                border: "none",
                background: "transparent",
                marginTop: "8px",
              }}
            />
          </div>
          <a style={{marginLeft:"78vh", color:"#808080"}}>Open source <i class="fa-solid fa-heart" style={{color: "red"}}></i></a>
          <button style={{padding:"0vh 1.3vh 0vh 1.3vh", border:"1px solid #dee2e6", borderRadius: "3px", marginBottom:"10px"}}><i class="fa-regular fa-star"></i> Star</button>
          <button style={{marginLeft:"2.5vh", marginBottom:"5px", border:"none", borderRadius:"10px", background:"#00ACC1", padding:"1vh 2vh 1vh 2vh", color:"white"}}><i class="fa-solid fa-gem"></i> Upgrade to Pro</button>
        </div>
        <div className="main" style={{ backgroundColor: "#f6f9fc", height: "calc(100vh - 7.3vh)", marginLeft: "16.6vw", width: "calc(100% - 16.6vw)"}}>
        </div>
    </>
  );
}

export default Code;
