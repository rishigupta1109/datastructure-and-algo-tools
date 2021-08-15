import "./InfixCnE.css";
import React from "react";
import { useState } from "react";
import {infixToPrefix, reverse} from "./functions";
import {infixToPostfix} from "./functions";
const InfixCnE=()=>{
    const [infixStatementi,setinfixStatementi]=useState("");
    const [infixStatementii,setinfixStatementii]=useState("");
    const [infixToPrefixStatement,setinfixToPrefixStatement]=useState({outputStack:[[]],outputString:"",outputStringArray:[]});
    const [infixToPostfixStatement,setinfixToPostfixStatement]=useState({outputStack:[[]],outputString:"",outputStringArray:[]});
  const infixichangeHandler=(e)=>{
    setinfixStatementi(e.target.value);
  }
  const infixiichangeHandler=(e)=>{
    setinfixStatementii(e.target.value);
  }
  const infixiclickHandler=()=>{
    setinfixToPrefixStatement(infixToPrefix(infixStatementi));
  }
  const infixiiclickHandler=()=>{
    setinfixToPostfixStatement(infixToPostfix(infixStatementii));
  }


return(
<div>
  <div className="conversion">
  <h1>Conversion</h1>
<div className="infixtoprefix">
  <div className="leftpart">
  <h2>converting infix to prefix</h2>
<h3>Infix statement : <input onChange={infixichangeHandler}  type="text" name="InfixStatement" id="InfixStatement" /></h3>
<button onClick={infixiclickHandler}> Convert</button>
<h3>Prefix statement :{infixToPrefixStatement.outputString} </h3>
  </div>
  <div className="rightpart">
    <h4>Reversed String : {reverse(infixStatementi)} </h4>
    <h4>Conversion Table</h4>    
  <table>
    <tr>
      <th>Output String</th>
      <th>Stack</th>
    </tr>
    {infixToPrefixStatement.outputStringArray.map((element,index)=>{
   
      return(
        <tr>
          <th>{element}</th>
          <th>{infixToPrefixStatement.outputStack[index].map((element)=>{
            return element[0];
          })}</th>
        </tr>
      );
    })}
    <tr>
      <th>{reverse(infixToPrefixStatement.outputString)}</th>
      <th> </th>
    </tr>
  </table>
  <h4>Revered String(Answer) : {infixToPrefixStatement.outputString}</h4>
  </div>

</div>
<div className="infixtopostfix">
<div className="leftpart">
<h2>converting infix to postfix</h2>
<h3>Infix statement : <input onChange={infixiichangeHandler}  type="text" name="InfixStatement" id="InfixStatement" /></h3>
<button onClick={infixiiclickHandler}> Convert</button>
<h3>Postfix statement :{infixToPostfixStatement.outputString} </h3>
</div>
<div className="rightpart ">
<table>
    <tr>
      <th>Output String</th>
      <th>Stack</th>
    </tr>
{infixToPostfixStatement.outputStringArray.map((element,index)=>{
 return(
  <tr>
    <th>{element}</th>
    <th>{infixToPostfixStatement.outputStack[index].map((element)=>{
      return element[0];
    })}</th>
  </tr>
);
})}
    <tr>
      <th>{(infixToPostfixStatement.outputString)}</th>
      <th> </th>
    </tr>
</table>
</div>

</div>
</div>
    

</div>)
}

export default InfixCnE;