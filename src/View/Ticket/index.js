import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
 import CoverLayout  from "View/components/CoverLayout";
 import curved9 from "assets/images/curved-images/image04.jpg";
 import { useParams } from "react-router-dom";
 const Ticket = () => {
  const location = useLocation();
  const [ticketNumber, setTicketNumber] = useState(null);
  
  const {service} = useParams();
    console.log("aaa",service);

  useEffect(() => {
    
    axios
      .post(`http://localhost:5000/application/last/${service}`)
      .then((response) => {

        
        // if (response.data && response.data.NumeroTicket) {
          console.log('rrrrrrrrrrrrrrr',response.data);
          setTicketNumber(response.data);
          console.log('rrrrr',response.data.NumeroTicket);
          console.log('tttt',ticketNumber);
        // } else {
          console.error(
            "Le numéro de ticket n'a pas été récupéré correctement depuis l'API."
          );
        // }
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération du numéro de ticket :",
          error
        );
      });
  }, []);

  return (
    <CoverLayout
      title="Numéro de Ticket"
      description={
        ticketNumber !== null
          ? `Le numéro de ticket est : ${ticketNumber}`
          : "Chargement du numéro de ticket..."
      }
      image={curved9}
    />
  );
};
export default Ticket;
