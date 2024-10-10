import { useEffect, useRef } from "react"
import "./suggestionfill.css"
const SuggestionFill = ({placeholder="Fill in",isDisable=false,id,suggestionValue,setSuggestionValue})=>{
    const inputRef= useRef();
    const handleChange = (e)=>{
        const {value,name} = e?.target;
        setSuggestionValue({...suggestionValue,[name]:value})
    }
    return (
        <>
            <input ref={inputRef} value={suggestionValue?.[id]} onChange={handleChange} name={id} disabled={isDisable} placeholder={placeholder}  className="suggestioninput"/>
        </>
    )
}

export default SuggestionFill