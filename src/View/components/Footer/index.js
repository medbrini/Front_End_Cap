import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function Footer() {
  return (
    <SoftBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <SoftBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <SoftBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SoftTypography component="a" href="#" variant="body2" color="secondary">
                Accueil
              </SoftTypography>
            </SoftBox>
            <SoftBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SoftTypography component="a" href="#" variant="body2" color="secondary">
                Services
              </SoftTypography>
            </SoftBox>
            <SoftBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <SoftTypography component="a" href="#" variant="body2" color="secondary">
                Suivi
              </SoftTypography>
            </SoftBox>
            <SoftBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <SoftTypography component="a" href="#" variant="body2" color="secondary">
                Contact
              </SoftTypography>
            </SoftBox>
            
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <SoftTypography variant="body2" color="secondary">
            Copyright &copy; 2024.
          </SoftTypography>
        </Grid>
      </Grid>
    </SoftBox>
  );
}

export default Footer;
