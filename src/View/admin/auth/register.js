import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BasicLayout from "View/components/BasicLayout"; // Importez BasicLayout
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import curved6 from "assets/images/curved-images/curved14.jpg";


const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const registerUser = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/agent/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("User registered:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("There was a problem registering the user:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    registerUser(formData);
    setFormData({
      fullName: "",
      email: "",
      age: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <BasicLayout image={curved6}> {/* Ajoutez le wrapper BasicLayout */}
      <Card>
      <SoftBox pt={2} pb={3} px={3}>
          <SoftBox mb={2}>
                <SoftInput
                  type="text"
                  placeholder="Entrez votre nom complet"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </SoftBox>

              <SoftBox mb={2}>
                <SoftInput
                  type="email"
                  placeholder="Entrez votre email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </SoftBox>

              {/* ... autres champs de formulaire avec SoftBox et SoftInput ... */}

              <SoftBox mb={2}>
                <SoftInput
                  type="password"
                  placeholder="Créez votre mot de passe"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </SoftBox>

              <SoftBox mb={2}>
                <SoftInput
                  type="password"
                  placeholder="Confirmez votre mot de passe"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </SoftBox>

              <SoftBox mt={4} mb={1}>
                <SoftButton variant="gradient" color="dark" onClick={handleSubmit} fullWidth>
                  S'inscrire
                </SoftButton>
              </SoftBox>

            <h3>
              Déjà un compte? <a href="/login">Connectez-vous maintenant</a>
            </h3>
       </SoftBox>
      </Card>
    </BasicLayout>
  );
};

export default Register;
