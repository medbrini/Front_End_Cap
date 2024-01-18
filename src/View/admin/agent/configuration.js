import React from "react";
import { useNavigate } from "react-router-dom";
import BasicLayout from "View/components/BasicLayout";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import curved6 from "assets/images/curved-images/curved14.jpg";


const Configuration = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Ajoutez ici le traitement que vous souhaitez effectuer lors de la soumission du formulaire.
    alert("Formulaire soumis avec succès !");
    navigate("/ticket");
  };

  return (
    <BasicLayout  image={curved6}>
      <SoftBox pt={2} pb={3} px={3}>
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="dark" onClick={handleSubmit} fullWidth>
            Prendre une ticket
          </SoftButton>
        </SoftBox>
      </SoftBox>
    </BasicLayout>
  );
};

export default Configuration;
