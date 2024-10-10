import { useEffect } from "react";
import { useState } from "react";
import { useGetEditCategoryApi } from "../../../api/chat";
import "./suggestionDropdown.css"

const SuggestionDropdown = ({customstyle,onChange,isDisable,id,options})=>{
    const {data} = useGetEditCategoryApi();
    const[optionApiValue,setOptionValue] = useState([])
    // let optionApiValue =data?.data?.results;
    // let findoptionLabel = ()=>{
    //     optionApiValue?.map((val)=>{
    //         if(val?.choice_type == id.charAt(0).toUpperCase() + id.slice(1)){
    //            return [...options,{label:val?.value,value:val?.value}]
    //         }
    //     })
        
    // }

    useEffect(()=>{
        setOptionValue(data?.data?.results)
    },[data])


    let findoptionLabel = () => {
        return optionApiValue?.reduce((acc, val) => {
            if (val?.choice_type === id?.charAt(0).toUpperCase() + id?.slice(1)) {
                return [...acc, { label: val?.value, value: val?.value }];
            }
            return acc; 
        }, [...options]); 
    };

    return (
        <>
            <select className="suggestionselectcontainer"  style={customstyle} onChange={(e)=>onChange(e?.target,id)} disabled={isDisable}>
                {
                    findoptionLabel()?.map((option)=>{
                        return option.value == "fill" ? <option id={id} name={id} value={`${option?.value}-${id}`}>{option?.label}</option>:<option id={id} name={id} value={option?.value}>{option?.label}</option>
                    })
                }
                {/* <option>Choose</option> */}
                {/* <option  id={id} name={id} value="business">
                    Formal
                </option>
                <option  id={id} name={id} value="business">
                    Business
                </option>
                <option  id={id} name={id} value={`fill-${id}`}>
                    Fill
                </option>
                <option  id={id} name={id} value="business">
                    Casual
                </option> */}
            </select>
        </>
    )
}

export default SuggestionDropdown