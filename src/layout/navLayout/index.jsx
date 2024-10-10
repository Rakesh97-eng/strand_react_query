import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/sidebar";

const Layout = () => {
  return (
    <>
      <Grid container sx={{minWidth:"80vw",overflowX:"auto"}}>
        <Grid size={{ xs: 2, md: 2, lg: 2 }} className="leftcontainer">
          <SideBar />
        </Grid>
        <Grid size={{ xs: 2, md: 10, lg: 10 }} className="rightcontainer">
          <Container>
            <Outlet />
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
