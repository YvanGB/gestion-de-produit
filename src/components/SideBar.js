import React from 'react'
import StatsCard from './StatsCard'

function SideBar() {
  return (
    <div className="container-fluid">
        <div className="row">
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="https://www.perplexity.ai/">
                    <span> <i className="bi bi-house-door"> </i> </span>
                    Dashboard
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.perplexity.ai/">
                    <span> <i className="bi bi-shop"></i> </span>
                    Products
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.perplexity.ai/">
                    <span> <i className="bi bi-cart-plus"></i> </span>
                    Ajouter un Products
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.perplexity.ai/">
                    <span> <i className="bi bi-tags"></i> </span>
                    Catégories
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.perplexity.ai/">
                    <span> <i className="bi bi-info-circle"></i> </span>
                    Reports
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