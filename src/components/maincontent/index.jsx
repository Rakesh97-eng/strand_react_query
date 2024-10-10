import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGenrateQueryApi, useGenrateResponseApi, useSaveQueryApi } from "../../api/chat";
import { getCurrentDate, getFormattedDate } from "../../utils/helperdata";
import QueryButton from "../common/querybutton";
import SuggestionContent from "../suggestion";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./maincontent.css";
const MainContent = () => {
  const navigate = useNavigate();
  const [querymessage, setQuerymessage] = useState("");
  const [isGenerating,setIsGenerating] = useState(false)
  const [isFill,setIsFill] = useState({
    output:true,
    language:true,
    length:true
  })
  const [suggestionValue,setSuggestionValue] = useState({
    subject: "",
    output: "",
    language: "",
    length: "",
    audience: "",
  })

  const generateMutateQuery = useGenrateQueryApi();

  const generateResponseQuery = useGenrateResponseApi();
  const saveGeneratedQuery = useSaveQueryApi();
  const SubmitQuery = async () => {
    let stringifyQuery={query:querymessage}
    setIsGenerating(true)
    const {data} = await generateResponseQuery.mutateAsync({query:JSON.stringify(stringifyQuery),options:suggestionValue,new_conversation:true})
    setIsGenerating(false)
    navigate(`/response/${data?.id}`);
  };

  const saveQuery = async ()=>{
    let data = await saveGeneratedQuery.mutateAsync({data:{...suggestionValue,['query']:querymessage}})
  }

  const generateQuery = async () => {

    let data = await generateMutateQuery.mutateAsync(suggestionValue);

    let apigeneratedQuery = JSON.parse(data?.data?.query);
    setQuerymessage(apigeneratedQuery?.query);
  };

  function CircularIndeterminate() {
    return (
      <Box sx={{ display: 'flex',justifyContent:"center" }}>
        {/* Genreate Query <CircularProgress /> */}
        <span>Generating Query </span> 
        <span class="dot-one"> .</span>
      <span class="dot-two"> .</span>
      <span class="dot-three"> .</span>
      </Box>
    );
  }

  return (
    <div className="maincontentcontainer">
      <div className="maincontenthead">
        Chat UI <span className="maincontentdate">{getFormattedDate()}</span>
      </div>

      <SuggestionContent isFill={isFill} setIsFill={setIsFill} onGenerateQuery={generateQuery}  suggestionValue={suggestionValue} setSuggestionValue={setSuggestionValue}  onSaveQuery={saveQuery}/>

      <Grid container style={{ width: "100%" }} spacing={2}>
        <Grid size={{ xs: 2, md: 8, lg: 9 }}>
          <input
            className="maincontentinput"
            placeholder="send message"
            value={querymessage}
            disabled
          ></input>
        </Grid>
        <Grid size={{ xs: 2, md: 8, lg: 3 }}>
          <QueryButton
            btntext={isGenerating?CircularIndeterminate():"Submit Query"}
            isDisabled = {isGenerating}
            btnclick={SubmitQuery}
            customstyle={{
              width: " 100%",
              height: "55px",
              fontSize: " 17px",
              borderRadius: "35px",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainContent;
