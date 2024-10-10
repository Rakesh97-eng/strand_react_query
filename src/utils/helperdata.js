import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import language from "../assest/image/Language.png";
import account from "../assest/image/account.png";
import Lists from "../assest/image/Lists.png";
import output from "../assest/image/output.png";
import subject from "../assest/image/subject.png";

import MessageIcon from '@mui/icons-material/Message';



export const sidebarData = [
    {
        title:"Apply Leave for Emergency",
        icon:<MessageIcon />,
        id:"11"
    },
    {
        id:"22",
        title:"Apply Leave for Emergency",
        icon:<MessageIcon />
    },
    {
        id:"33",
        title:"Apply Leave for Emergency",
        icon:<MessageIcon />
    },
    {
        id:"44",
        title:"Apply Leave for Emergency",
        icon:<MessageIcon  />
    },
    {
        id:"55",
        title:"Apply Leave for Emergency",
        icon:<MessageIcon />
    },
    {
        id:"66",
        title:"Apply Leave for Emergency",
        icon:<MessageIcon />
    },
]
export const sidebarDatalast = [
    {
        title:"Apply Leave for Emergency",
        icon:<MessageIcon />,
        id:"77"
    },
    {
        id:"88",
        title:"Apply Leave for Emergency",
        icon:<MessageIcon />
    },
    {
        id:"99",
        title:"Apply Leave for Emergency",
        icon:<MessageIcon />
    },
    {
        id:"00",
        title:"Apply Leave for Emergency",
        icon:<MessageIcon  />
    },
    {
        id:"001",
        title:"Apply Leave for Emergency",
        icon:<MessageIcon />
    },
    {
        id:"002",
        title:"Apply Leave for Emergency",
        icon:<MessageIcon />
    },
]




//Suggestion Button Data

export const SuggestionBtnData = [
    {
        title:"Subject",
        icon : subject,
        id:"subject",
        isOption:false
    },
    {
        title:"Output",
        id:"output",
        isOption:true,
        optionArr:[
            {label:"Choose"},
            {id:"Output",label:"Fill",value:"fill"},
            {id:"Output",label:"Business",value:"business"},
            {id:"Output",label:"Casual",value:"casual"},
        ],
        icon : output
    },
    {
        title:"Language",
        id:"language",
        isOption:true,
        optionArr:[
            {label:"Choose"},
            {id:"Language",label:"Fill",value:"fill"},
            {id:"Language",label:"English",value:"english"},
            {id:"Language",label:"Hindi",value:"hindi"},
        ],
        icon : language
    },
    {
        title:"Length",
        id:"length",
        isOption:true,
        optionArr:[
            {label:"Choose"},
            {id:"Length",label:"Fill",value:"fill"},
            {id:"Length",label:"100",value:"100"},
            {id:"Length",label:"50",value:"50"},
        ],
        icon : Lists
    },
    {
        title:"Audience",
        id:"audience",
        isOption:false,
        icon : account
    },
]

// export function getCurrentDate(separator=''){
//     const monthArr = ['Jan',"Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

//     let newDate = new Date()
//     let date = newDate.getDate();
//     let month = newDate.getMonth() + 1;
//     let year = newDate.getFullYear();
//     let time = newDate.getTime();
//     //use seperator inbetween when we need to change the ui
//     return `${monthArr[month]} ${date} ${year}`
//     }


export function getFormattedDate() {
    const date = new Date();
  
    // Get the month abbreviation
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
  
    // Get the day of the month
    const day = date.getDate();
  
    // Get the hours and format them for 12-hour clock
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;  // Convert to 12-hour format
  
    // Combine everything into the desired format
    return `${month} ${day} ${hours}:${minutes} ${ampm}`;
  }