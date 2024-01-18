import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import axios from "axios";
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import BasicLayout from "View/components/BasicLayout";
import curved6 from "assets/images/curved-images/curved14.jpg";
import Select from "@mui/material/Select";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
    setSelectedCondition(""); // Reset the condition when service changes
  };

  const handleConditionChange = (e) => {
    setSelectedCondition(e.target.value);
  };

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedService || !selectedCondition || !formData.nom || !formData.prenom || !formData.email || !formData.message) {
      setError("Veuillez remplir tous les champs requis.");
      return;
    }
    // Envoyer le formulaire à votre backend ou effectuer d'autres actions nécessaires.
    alert("Votre message a été envoyé avec succès!");
  };

  const serviceOptions = ["Demande générale", "Support client", "Retour d'information", "Autre"];
  const conditionOptions =
    selectedService === "Support client"
      ? ["Urgent", "Non-Urgent"]
      : [];

  return (
    <BasicLayout image={curved6}>
      <Card>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox mb={2}>
            <SoftInput
              type="text"
              name="nom"
              placeholder="Votre Nom"
              onChange={handleFormData}
              fullWidth
            />
          </SoftBox>

          <SoftBox mb={2}>
            <SoftInput
              type="text"
              name="prenom"
              placeholder="Votre Prénom"
              onChange={handleFormData}
              fullWidth
            />
          </SoftBox>

          <SoftBox mb={2}>
            <SoftInput
              type="text"
              name="email"
              placeholder="Votre Email"
              onChange={handleFormData}
              fullWidth
            />
          </SoftBox>

          <SoftBox mb={2}>
            <Select
              native
              value={selectedService}
              onChange={handleServiceChange}
              placeholder="Motif de votre message"
            >
              <option value="">Choisissez le motif</option>
              {serviceOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </SoftBox>

          {selectedService && (
            <SoftBox mb={2}>
              <Select
                native
                value={selectedCondition}
                onChange={handleConditionChange}
                placeholder="Urgence"
              >
                <option value="">Choisissez l'urgence</option>
                {conditionOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </SoftBox>
          )}

          <SoftBox mb={2}>
            <SoftInput
              type="text"
              name="message"
              placeholder="Votre message"
              onChange={handleFormData}
              fullWidth
            />
          </SoftBox>

          <SoftBox component="form" role="form">
            <SoftBox mt={2} mb={2} textAlign="center">
              <h6
                style={{
                  fontSize: ".8em",
                  color: "red",
                  textAlign: "center",
                  fontWeight: 400,
                  transition: ".2s all",
                }}
              >
                {error}
              </h6>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark" onClick={handleSubmit} fullWidth>
                Envoyer le message
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default Contact;
