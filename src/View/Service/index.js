import { useState } from "react";

// react-router-dom components
import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import axios from "axios"; // Ajoutez cette ligne pour importer Axios

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "View/components/BasicLayout";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";

import Select from "@mui/material/Select";

function Service() {
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
    if (!selectedService || !selectedCondition || !formData.nom || !formData.prenom) {
      setError("Veuillez remplir tous les champs requis.");
      return;
    }
   

  

  const dataToSend = {
    Services: selectedService,
    RequestType: selectedCondition,
    cin: formData.cin,
    firstName: formData.nom,
    lastName: formData.prenom,
    state:false
    // Ajoutez d'autres champs du formulaire selon les besoins
  };
  axios
    .post("http://localhost:5000/application", dataToSend)
    .then((response) => {
      // if (response.data.success) {
        alert("Le ticket a été pris avec succès !");
        // Vous pouvez également rediriger l'utilisateur vers une autre page si nécessaire
        navigate(`/Ticket/${dataToSend.Services}`);}
      
    )
    .catch((error) => {
      
        setError(error.response.data.msg);
      
        setError("Une erreur s'est produite lors de la communication avec le serveur.");
      
    });
  };
  const serviceOptions = ["B3", "CIN", "Passeport", "Certificat de résidence"];
 
  const conditionOptions =
  selectedService === "CIN" || selectedService === "Passeport"
    ? ["Demande", "Renouvellement"]
    : selectedService === "B3" || selectedService === "Certificat de résidence"
    ? ["Demande"]
    : [];


  return (
    <BasicLayout image={curved6}>
      <Card>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox mb={2}>
            <Select
              native
              value={selectedService}
              onChange={handleServiceChange}
              placeholder="Service"
            >
              <option value="">Choose Service</option>
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
                placeholder="Condition"
              >
                <option value="">Choose Condition</option>
                {conditionOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </SoftBox>
          )}

          <SoftBox component="form" role="form">
            {/* <SoftBox mb={2}>
              <SoftInput type="text" name="cin" placeholder="CIN" onChange={handleFormData} />
            </SoftBox> */}

          {!(selectedService === "CIN" && selectedCondition === "Demande") && (
            <SoftBox mb={2}>
              <SoftInput type="text" name="cin" placeholder="CIN" onChange={handleFormData} />
            </SoftBox>
          )}


            <SoftBox mb={2}>
              <SoftInput type="text" name="nom" placeholder="Nom" onChange={handleFormData} />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="text" name="prenom" placeholder="Prénom" onChange={handleFormData} />
            </SoftBox>
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
                Prendre une ticket
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default Service;
