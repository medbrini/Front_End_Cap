import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from "./agentLayout";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
// import BasicLayout from 'View/components/BasicLayout';
import DashboardLayout from '../../components/Layout/dashboardLayout';
// import DashboardLayout from 'components/LayoutContainers/DashboardLayout';
import curved6 from "assets/images/curved-images/curved14.jpg";
import Card from "@mui/material/Card";
import { useNavigate } from 'react-router-dom';





const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/application')
      .then((response) => setApplications(response.data))
      .catch((error) => console.error('Error fetching applications:', error));
  }, []);

  const handleUpdateState = (id) => {
    axios.put(`http://localhost:5000/application/${id}`)
      .then((response) => {
        const updatedApplication = response.data;
        setApplications((prevApplications) =>
          prevApplications.map((app) =>
            app._id === updatedApplication._id ? updatedApplication : app
          )
        );
      })
      .catch((error) => console.error('Error updating state:', error));
  };

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem("agent");
  //   localStorage.removeItem("agentId");
  //   Navigate('/login');
  // };

  return (
    <DashboardLayout image={curved6}>
      <Card>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox mb={2}>
          <h2>Applications</h2>
          <ul>
            {applications.map((app) => (
              <li key={app._id}>
                {console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", app.state)}
                {app.Services} - {app.RequestType} - {app.firstName} {app.lastName} - State: {app.state && 'Approved'}{!app.state && 'Pending'}
           {   !app.state && <SoftButton variant="gradient" color="dark" onClick={() => handleUpdateState(app._id)}>
                  Approve
                </SoftButton> }
               
              </li>
            ))}
            {/* <SoftButton onClick={() => handleLogout()}>
              Logout
            </SoftButton> */}
          </ul>
          </SoftBox>
        </SoftBox>
      </Card>
    </DashboardLayout>
  );
};

export default Dashboard;
