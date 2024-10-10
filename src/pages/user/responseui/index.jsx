import "./responseui.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SuggestionContent from "../../../components/suggestion";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useGetResponseApi, useModifyQueryApi } from "../../../api/chat";
import { Box } from "@mui/material";
const ResponseUi = () => {
  const {id} = useParams();
    const location = useLocation();
    let isHistory = location?.state?.isHistory ?? false;
    const [ismodify,setIsModify] = useState(false);
    const [response,setResponse] = useState("");
    const [query,setQuery] = useState()
    const { data, error, isLoading } = useGetResponseApi(id,isHistory);
    const generateModifyResponse = useModifyQueryApi(id)
  const [isFill,setIsFill] = useState({
    output:false,
    language:false,
    length:false,
    subject:false,
    audience:false,
  })
  const [suggestionValue,setSuggestionValue] = useState({
    subject: "",
    output: "",
    language: "",
    length: "",
    audience: "",
  })
  const [modifyLoading,setModifyLoading] = useState(false)
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const lines = response?.split('\n'); // Split the response into lines
    if (currentLineIndex < lines?.length) {
      const words = lines[currentLineIndex].split(' '); // Split current line into words

      if (currentWordIndex < words.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prevText) => prevText + words[currentWordIndex] + ' ');
          setCurrentWordIndex(currentWordIndex + 1); // Move to the next word
        }, 100); // Delay for each word (300ms)

        return () => clearTimeout(timeout); // Clean up timeout
      } else {
        // Move to the next line when the current line is done  
        const lineTimeout = setTimeout(() => {
          setDisplayedText((prevText) => prevText + '\n'); // Add a line break
          setCurrentWordIndex(0); // Reset word index for the new line
          setCurrentLineIndex(currentLineIndex + 1); // Move to the next line
        }, 100); // Delay after completing a line (1 second)

        return () => clearTimeout(lineTimeout);
      }
    }
  }, [currentWordIndex, currentLineIndex, response]);

  useEffect(()=>{
    if(data?.data?.queries){
      setResponse(data?.data?.queries[0]?.response)
      setSuggestionValue(data?.data?.queries[0]?.options)
      setQuery(data?.data?.queries[0]?.query)
    }
    else{
      setResponse(data?.data?.response)
      setSuggestionValue(data?.data?.options)
      setQuery(data?.data?.query)
    }
  },[data])


  const modifyResponse = async()=>{  
    setIsModify(true);
    let modifyValue = {
      "generated_prompt": {
          "query": JSON.parse(query)
      },
      "response_from_gpt": data?.data?.queries? data?.data?.queries[0]?.response:data?.data?.response,
      "input_for_modification": suggestionValue
  }
    setModifyLoading(true)
    let modifiedData = await generateModifyResponse.mutateAsync(modifyValue);
    setModifyLoading(false)
    setResponse(modifiedData?.data?.modified_response)

  }



  const loader = ()=>{
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
    <>
      <div className="responseuiinputcontainer">
        <AccountCircleIcon style={{ background: "intial" }} />{" "}
        <input
          placeholder="Write a email to HR for leave Request"
          className="responseuiinput"
          disabled
          value={query ? JSON.parse(query)?.query:""}
        />
      </div>
      <p style={{ fontSize: "22px" }}>{ismodify?"Modified Response":"Response"}</p>
      <div className="responsetextdiv">
      {isLoading || modifyLoading ? loader() :
       <p style={{ whiteSpace: 'pre-line' }}>
         {response}
        </p>}
      </div>
      <div style={{marginTop:"4%"}}>
         <SuggestionContent  isClass={false} onModifyClick={modifyResponse}  isFill={isFill} setIsFill={setIsFill}  suggestionValue={suggestionValue} setSuggestionValue={setSuggestionValue}/>
      </div>
    </>
  );
};

export default ResponseUi;
