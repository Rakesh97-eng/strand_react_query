import { SuggestionBtnData } from "../../utils/helperdata";
import SuggestionButton from "../common/suggestionButton/suggestionButton";
import Grid from "@mui/material/Grid2";
import SuggestionDropdown from "../common/suggestionDropdown";
import SuggestionFill from "../common/suggestionFill";
import QueryButton from "../common/querybutton";
import "./suggestion.css";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useNavigate } from "react-router-dom";
const SuggestionContent = ({ isClass = true, onModifyClick,onGenerateQuery,suggestionValue,setSuggestionValue,onSaveQuery,isFill,setIsFill }) => {
  const navigate = useNavigate();

  const handleEdit = (options,id)=>{
    navigate('/edit',{state:{options,id}})
  }

  const handleDropDown = ({value},id)=>{
      let ids = value.split('-');
    if(ids[0] == "fill"){
      setIsFill({...isFill,[ids[1]]:false})
    }
    else{
      let isfilldata = {output:true, language:true,
        length:true}
      setSuggestionValue({...suggestionValue,[id]:value})
      setIsFill({...isFill,...isfilldata})
    }
  }
  return (
    <>
      <Grid
        container
        style={{ width: "100%" }}
        alignItems="stretch"
        spacing={2}
      >
        {SuggestionBtnData.map((data) => {
          return (
            <>
              <Grid size={{ lg: 2, md: 3, xs: 4 }}>
                <SuggestionButton data={data} />
              </Grid>
              {isClass && (
                <Grid size={{ lg: 2, md: 3, xs: 4 }}>
                  {data?.isOption && (
                    <div style={{ display: "flex" }}>
                      <SuggestionDropdown id={data?.id} options={data?.optionArr} onChange={handleDropDown}/>{" "}
                      <EditNoteIcon
                        onClick={()=>handleEdit(data?.optionArr,data?.id)}
                        style={{ color: "#F29D38", cursor: "pointer" }}
                      />
                    </div>
                  )}
                </Grid>
              )}
              <Grid size={{ lg: isClass ? 8 : 10, md: 3, xs: 4 }}>
                <SuggestionFill isDisable={isFill[data?.id]}  id={data?.id}   suggestionValue={suggestionValue}  setSuggestionValue={setSuggestionValue}/>
              </Grid>
            </>
          );
        })}
        <div className="suggestioncontentbtn">
          {isClass ? (
            <>
              <QueryButton btntext={"Generate Query"} btnclick={onGenerateQuery}/>
              <QueryButton btntext={"Save Query"} btnclick={onSaveQuery}/>
            </>
          ) : (
            <QueryButton btntext={"Modify Response"} btnclick={onModifyClick} />
          )}
        </div>
      </Grid>
    </>
  );
};

export default SuggestionContent;
