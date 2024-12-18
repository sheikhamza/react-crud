import React from 'react';
import Card from './Card';
import ProgressBar from './ProgressBar';

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <button className="btn btn-primary btn-sm shadow-sm">
                    <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
                </button>
            </div>

            <div className="row">
                <Card title="Earnings (Monthly)" value="$40,000" icon="fa-calendar" color="primary" />
                <Card title="Earnings (Annual)" value="$215,000" icon="fa-dollar-sign" color="success" />
                <Card title="Tasks" value="50%" icon="fa-clipboard-list" color="info" />
                <Card title="Pending Requests" value="18" icon="fa-comments" color="warning" />
            </div>

            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                        </div>
                        <div className="card-body">
                            <ProgressBar label="Server Migration" percent={20} color="danger" />
                            <ProgressBar label="Sales Tracking" percent={40} color="warning" />
                            <ProgressBar label="Customer Database" percent={60} color="info" />
                            <ProgressBar label="Payout Details" percent={80} color="info" />
                            <ProgressBar label="Account Setup" percent={100} color="success" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
