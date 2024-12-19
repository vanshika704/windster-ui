import React from "react";

function Code() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="http://127.0.0.1:5500/windster-ui/windster/src/assets/windsteruilogo.svg"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            <strong> Windster</strong>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <form class="d-flex e-5" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button class="btn btn-secondary btn-sm me-md-2" type="submit">
                <i class="bi bi-star"> Star</i>
              </button>
              <button class="btn btn-primary" type="button">
                <i class="bi bi-gem"> Upgrade to Pro</i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div class="row">
        <div class="col-2">
          <nav
            id="navbar-example3"
            class="h-100 flex-column align-items-stretch pe-4 border-end">
            <nav class="nav nav-pills flex-column">
              <a class="nav-link" href="#">
                <i class="bi bi-pie-chart-fill"> Dashboard</i>
              </a>
              <a class="nav-link " href="#">
                <i class="bi bi-grid-fill">Kanban</i>
              </a>
              <a class="nav-link " href="#">
                <i class="bi bi-inbox-fill"> Inbox</i>
              </a>
              <a class="nav-link" href="#2">
                <i class="bi bi-person-circle"> Users</i>
              </a>
              <a class="nav-link" href="#">
                <i class="bi bi-handbag-fill"> Products</i>
              </a>
              <a class="nav-link " href="#">
                <i class="bi bi-box-arrow-in-right"> Sign-in</i>
              </a>
              <a class="nav-link " href="#">
                <i class="bi bi-postcard-fill"> Sign-up</i>
              </a>
              <hr />
              <a class="nav-link" href="#">
                <i class="bi bi-gem"> Upgrade to Pro</i>
              </a>
              <a class="nav-link " href="#">
                <i class="bi bi-file-earmark-text-fill"> Documentation</i>
              </a>
              <a class="nav-link " href="#">
                <i class="bi bi-collection-fill"> Components</i>
              </a>
              <a class="nav-link" href="#2">
                <i class="bi bi-question-circle-fill"> Help</i>
              </a>
            </nav>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Code;
{
  /* 
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
    </nav>
    </div> */
}
