import "./sidebar.css";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { sidebarData, sidebarDatalast } from "../../utils/helperdata";
import { useLocation, useNavigate } from "react-router-dom";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useGetAllConverstionApi } from "../../api/chat";
import MessageIcon from "@mui/icons-material/Message";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activedata = location.pathname.split("/")[2];

  const { data, isLoading } = useGetAllConverstionApi();
  
  const handleNewChat = () => {
    navigate("/");
  };

  const handleLogout = ()=>{
    sessionStorage.clear()
    navigate('/');
  }

  const handleNavigation = (i) => {
    navigate(`/response/${i}`, { state: { isHistory: true } });
  };
  
  return (
    <div>
      <div className="mainlogo">STRAND</div>
      <div className="hr"></div>
      <div className="maintitle">
        <AutoAwesomeIcon style={{ color: "#718096" }} />
        <p>Chat UI</p>
      </div>
      <button className="chatbtn" onClick={handleNewChat}>
        + New Chat
      </button>
      <div className="hr"></div>
      <div className="conversationarea">
        <p>Your Conversation</p>
        <button>Clear all</button>
      </div>
      <div className="hr"></div>

      {isLoading
        ? "Loading----"
        : data?.data?.results?.map((data, index) => {
          
            return (
              <div
                className="chatflex"
                onClick={() => handleNavigation(data?.conversation_id)}
              >
                <div
                  style={{
                    // width:"20%",
                    height: "22px",
                    color:
                      activedata == data?.conversation_id
                        ? "black"
                        : "rgb(113 128 150 / 28%)",
                  }}
                >
                  <MessageIcon />
                </div>
                <div
                  className="historytitlesection"
                  style={{
                    color:
                      activedata == data?.conversation_id
                        ? "black"
                        : "rgb(113 128 150 / 28%)",
                  }}
                >
                  <span style={{ fontSize: "13px" }}>{data.title} </span>

                  {activedata == data?.conversation_id && (
                    <span className="actionbtn">
                      <DeleteForeverIcon fontSize="16px" />
                      <ModeEditIcon fontSize="16px" />
                    </span>
                  )}
                </div>
              </div>
            );
          })}

      <div className="hr"></div>
      <p className="lastcontent">Last 7 Days</p>
      <div className="hr"></div>
      {sidebarDatalast.map((data, index) => {
        return (
          <div className="chatflex" onClick={() => handleNavigation(data?.id)}>
            <div
              style={{
                // width:"20%",
                height: "22px",
                color:
                  activedata === data?.id ? "black" : "rgb(113 128 150 / 28%)",
              }}
            >
              {data.icon}
            </div>
            <div
              className="historytitlesection"
              style={{
                color:
                  activedata === data?.id ? "black" : "rgb(113 128 150 / 28%)",
              }}
            >
              <span style={{ fontSize: "13px" }}>{data.title} </span>
            </div>
            {/* {activedata === data?.id  && <DeleteForeverIcon fontSize="16px"/>}
              {activedata === data?.id  &&<ModeEditIcon fontSize="16px"/>} */}
            {activedata === data?.id && (
              <span className="actionbtn">
                <DeleteForeverIcon fontSize="16px" />
                <ModeEditIcon fontSize="16px" />
              </span>
            )}
          </div>
        );
      })}

      <button className="chatbtn" style={{position:'sticky',bottom:0}} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
export default SideBar;
