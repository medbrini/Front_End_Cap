import CoverLayout from "View/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/PoliceLogo.jpg";

function Acceuil() {
   return (
    <CoverLayout
      title="CapConnect"
      description="CapConnect est une plateforme en ligne dédiée aux services administratifs du ministère de l'Intérieur dans la région de Tataouine. En quelques clics, vous pouvez désormais prendre un rendez-vous pour effectuer une demande de bulletin n°3, de carte d'identité nationale, ou de passeport, que ce soit pour une première demande ou un renouvellement."
      image={curved9}
  
    >
      </CoverLayout>
  );
}

export default Acceuil;
