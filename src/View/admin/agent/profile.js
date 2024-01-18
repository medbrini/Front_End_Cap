import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import Card from "@mui/material/Card";
import BasicLayout from 'View/components/BasicLayout';
import curved6 from "assets/images/curved-images/curved14.jpg";

const Profile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [matricule, setMatricule] = useState('');
  const Id = localStorage.getItem('agentId');

  useEffect(() => {
    const fetchAgentDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/agent/${Id}`);
        const agent = response.data;
        setFullName(agent.fullName);
        setEmail(agent.email);
        // setMatricule(agent.matricule);
      } catch (error) {
        console.error('Error fetching agent details:', error);
      }
    };

    fetchAgentDetails();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/agent/${Id}`, {
        fullName,
        email,
        password  
      });
      await alert ("profile updated successfully");
      console.log('Profile updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <BasicLayout image={curved6}>
    <Card>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox mb={2}></SoftBox>
      <SoftBox pt={2} pb={3} px={3}>
        <h2>Edit Profile</h2>
          <SoftBox mb={2}>
            <label>
              Full Name:
              <SoftInput type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </label>
          </SoftBox>
          <SoftBox mb={2}>
            <label>
              Email:
              <SoftInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </SoftBox>
          <SoftBox mb={2}>
            <label>
              Password:
              <SoftInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
          </SoftBox>
          <SoftBox mb={2}>
            <SoftButton type="button" onClick={handleUpdateProfile}>
              Update Profile
            </SoftButton>
          </SoftBox>
      </SoftBox>
    </SoftBox>
  </Card>  
</BasicLayout>
  );
};

export default Profile;
