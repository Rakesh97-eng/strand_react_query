import { Container } from "@mui/material";
import Grid from '@mui/material/Grid2';
import QueryButton from "../../../components/common/querybutton";
import MainContent from "../../../components/maincontent";
import SideBar from "../../../components/sidebar";
import SuggestionContent from "../../../components/suggestion";

import "./chatui.css"

const ChatUI = () => {
  return (
    <>
      {/* <Grid container >
        <Grid size={{ xs: 2, md: 8,lg:2 }}className="leftcontainer">
          <SideBar />
        </Grid>
        <Grid size={{ xs: 2, md: 8 ,lg:10}} className="rightcontainer">
            <Container>
              <MainContent/>
            </Container>
        </Grid>
      </Grid> */}
      <MainContent/>

    </>
  );
};

export default ChatUI;
