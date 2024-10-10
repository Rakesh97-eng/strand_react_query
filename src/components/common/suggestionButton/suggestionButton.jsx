import "./suggestionButton.css";
const SuggestionButton = ({data,customstyle={}}) => {

    return (
      <div className="suggestionContainer" style={customstyle}>
        <p style={{ margin: 0 ,width:"50%"}}>{data?.title}</p>{" "}
        <img src={data?.icon} style={{ width: "20px",height:"17px", objectFit: "contain" }} />
      </div>
    );
};

export default SuggestionButton;
