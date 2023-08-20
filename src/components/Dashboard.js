import React from 'react'
import StatsCard from './StatsCard'
import CustomNavbar from './CustomNavbar'

function Dashboard() {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
        </div>

        <div className="row">
            <StatsCard title="Statistique 1" data="Donnée statistique 1" color="primary" />
            <StatsCard title="Statistique 2" data="Donnée statistique 2" color="success" />
            <StatsCard title="Statistique 3" data="Donnée statistique 3" color="warning" />
            <StatsCard title="Statistique 4" data="Donnée statistique 4" color="danger" />
        </div>

        <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
    </main>
  )
}

export default Dashboard