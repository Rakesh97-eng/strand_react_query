import SuggestionButton from "../../../components/common/suggestionButton/suggestionButton";
import SuggestionDropdown from "../../../components/common/suggestionDropdown";
import subject from "../../../assest/image/subject.png";
import "./editsuggestion.css";
import SuggestionFill from "../../../components/common/suggestionFill";
import QueryButton from "../../../components/common/querybutton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { getFormattedDate } from "../../../utils/helperdata";
import { useLocation } from "react-router-dom";
import { useEditCategoryApi } from "../../../api/chat";
import { useState } from "react";

const EditSuggestion = () => {

  const location = useLocation();
  const editCategory = useEditCategoryApi()
  const [categoryValue,setCategoryValue] = useState('')

  const {options,id} = location?.state;
  const data = {
    title: id,
    icon: subject,
    isOption: false,
  };

  const actionElementArr = [
    {
      icon: (
        <AddCircleOutlineIcon fontSize="15px" style={{ color: "#35A600" }} />
      ),
    },
    {
      icon: <EditNoteIcon fontSize="15px" style={{ color: "#F29D38" }} />,
    },
    {
      icon: <DeleteIcon fontSize="15px" style={{ color: "#F70000" }} />,
    },
  ];

  const addCategory = async()=>{
      let choiceData = {
        "choice_type":id.charAt(0).toUpperCase() + id.slice(1),
        "value": categoryValue
    }
      let data = await editCategory.mutateAsync(choiceData)
  }

  const actionbtnelement = (element) => {
    return <div className="actionbtncontainer">{element}</div>;
  };
  return (
    <>
     <div className="maincontenthead">
        Chat UI <span className="maincontentdate">{getFormattedDate()}</span>
      </div>
      <div className="editsuggestioncontainer">
        <div className="editsuggestionoption">
          <SuggestionButton data={data} customstyle={{ width: "30%" }} />
          <SuggestionDropdown customstyle={{ width: "30%" }} options={options} />
        </div>
        <div className="editsuggestionfillsection">
          {/* <SuggestionFill placeholder={"Edit Category"}/> */}
          <input className="suggestioninput" placeholder="Edit Category" value={categoryValue} onChange={(e)=>setCategoryValue(e?.target?.value)}/>
          <div style={{ display: "flex", maxHeight: "27px" }}>
            {actionElementArr.map((actionelem) =>
              actionbtnelement(actionelem?.icon)
            )}
          </div>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}
      >
        <QueryButton btntext={"Save Category"} btnclick={addCategory}/>
      </div>
    </>
  );
};

export default EditSuggestion;
