import "./querybutton.css";

const QueryButton = ({ btntext,btnclick=()=>{},customstyle,onclick ,isDisabled=false}) => {
  return (
    <>
      <button className="querybutton" disabled={isDisabled} onClick={btnclick} style={customstyle}>{btntext}</button>
    </>
  );
};

export default QueryButton;
