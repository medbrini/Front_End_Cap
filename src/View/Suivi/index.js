import { useState } from "react";

// react-router-dom components
import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "View/components/BasicLayout";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";

function Suivi() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("");

  const handleServiceButtonClick = (service) => {
    setSelectedService(service);
    navigate(`/ticket/${service}`);
  };

  const serviceOptions = ["B3", "CIN", "Passeport", "Certificat de résidence"];
  return (
    <BasicLayout image={curved6}>
      <Card>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox mb={2}>
            {serviceOptions.map((service, index) => (
              <SoftButton
                key={index}
                onClick={() => handleServiceButtonClick(service)}
                fullWidth
                style={{ marginRight: 8, marginBottom: 8 }}
              >
                {service}
              </SoftButton>
            ))}
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default Suivi;
