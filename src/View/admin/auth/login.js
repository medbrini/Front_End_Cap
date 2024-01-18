import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import BasicLayout from "View/components/BasicLayout"; // Importez BasicLayout
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import curved6 from "assets/images/curved-images/curved14.jpg";


const Login = () => {
 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value 
    });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/agent/login", formData);
      
      const { token, agent } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("agent", agent.fullName);
      localStorage.setItem("agentId", agent._id);
      
      console.log(res.data);
      navigate('/dashboard', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BasicLayout image={curved6}> {/* Ajoutez le wrapper BasicLayout */}
      <Card>
      <SoftBox pt={2} pb={3} px={3}>
          <SoftBox mb={2}>
                <SoftInput
                  type="email"
                  placeholder="Entrez votre email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </SoftBox>

              <SoftBox mb={2}>
                <SoftInput
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </SoftBox>

              <SoftBox mt={4} mb={1}>
                <SoftButton variant="gradient" color="dark" onClick={handleSubmit} fullWidth>
                  Se connecter
                </SoftButton>
              </SoftBox>
            <h3>Not a member? <a href="/register">Sign Up</a></h3>
</SoftBox>

      </Card>
    </BasicLayout>

  );
};

export default Login;
