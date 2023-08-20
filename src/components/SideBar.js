import React from 'react'

function SideBar() {
  return (
    <div className="container-fluid">
        <div className="row">
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item d-flex justify-content-between">
                        <a className="nav-link active" aria-current="page" href="https://www.perplexity.ai/">
                            <span>Dashboard</span>
                            <span className="font-weight-bold">
                            <i className="bi bi-house-door"></i>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item d-flex justify-content-between">
                        <a className="nav-link" href="https://www.perplexity.ai/">
                            <span>Products</span>
                            <span className="font-weight-bold">
                            <i className="bi bi-shop"></i>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item d-flex justify-content-between">
                        <a className="nav-link" href="https://www.perplexity.ai/">
                            <span>Ajouter un Products</span>
                            <span className="font-weight-bold">
                            <i className="bi bi-cart-plus"></i>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item d-flex justify-content-between">
                        <a className="nav-link" href="https://www.perplexity.ai/">
                            <span>Catégories</span>
                            <span className="font-weight-bold">
                            <i className="bi bi-tags"></i>
                            </span>
                        </a>
                    </li>
                    <li className="nav-item d-flex justify-content-between">
                        <a className="nav-link" href="https://www.perplexity.ai/">
                            <span>Reports</span>
                            <span className="font-weight-bold">
                            <i className="bi bi-info-circle"></i>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    </div>
  )
}

export default SideBar