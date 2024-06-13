import React, { createContext, useState } from "react";
import run from "../config/gimini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData,setResultData] =useState('');

  const delaypara=(index,nextword)=>{
    setTimeout(function (){
      setResultData(prev=>prev+nextword)
    },75*index)
  }

  const onSent = async (prompt) => {

    setResultData("")
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)
    setPrevPrompt(prev=>[...prev,input])
    const response= await run(input);
    let responesArray = response.split("**")
    let newResponse;
    for(let i=0;i<responesArray.length;i++){
      if(i===0 || i%2!== 1){
        newResponse+=responesArray[i];
      }else{
        newResponse+="<b>"+responesArray[i]+"</b>";
      }
    }
    let newResponse2=newResponse.split("*").join("</br>")
    let newResponseArray= newResponse2.split(" ");
    for(let i=0;i<newResponseArray.length;i++){
      const nextword=newResponseArray[i]
      delaypara(i,nextword+" ")
    }
    setLoading(false);
    setInput('');

  };
  
  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    setShowResult,
    setLoading
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
