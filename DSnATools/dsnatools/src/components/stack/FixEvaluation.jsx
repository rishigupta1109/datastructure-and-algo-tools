import "./FixEvaluation.css";
import React from "react";
import { useState } from "react";
import { prefixEvaluator,reverse,postfixEvaluator } from "./functions";
const FixEvaluation=()=>{
    const [prefixStatementi,setprefixStatementi]=useState("");
    const [postfixStatementii,setpostfixStatementii]=useState("");
    const [prefixEvaluation,setprefixEvaluation]=useState({outputString:"",outputStack:[]})
    const [postfixEvaluation,setpostfixEvaluation]=useState({outputString:"",outputStack:[]})
    const prefixichangeHandler=(e)=>{
        setprefixStatementi(e.target.value);
    }
    const prefixiclickHandler=()=>{
        setprefixEvaluation(prefixEvaluator(prefixStatementi));
    }
    const postfixiichangeHandler=(e)=>{
        setpostfixStatementii(e.target.value);
    }
    const postfixiclickHandler=()=>{
        setpostfixEvaluation(postfixEvaluator(postfixStatementii));
    }
    return(
        <div>
          <div className="conversion">
          <h1>Evaluation</h1>
        <div className="infixtoprefix">
          <div className="leftpart">
          <h2>Evaluating prefix</h2>
        <h3>Prefix statement : <input onChange={prefixichangeHandler}  type="text" name="InfixStatement" id="InfixStatement" /></h3>
        <button onClick={prefixiclickHandler}> Convert</button>
        <h3>Evaluated Value : {prefixEvaluation.outputString} </h3>
          </div>
          <div className="rightpart">
           
          <h4>Reversed String : {reverse(prefixStatementi)} </h4>
          <table>
            <tr>
              
              <th>Stack</th>
            </tr>
            {prefixEvaluation.outputStack.map((element)=>{
              return(
                <tr>
                     <th>{element.map((data)=>{
                    return data[0];
                  })}</th>
                 
                </tr>
              );
            })}
          
          </table>
        
          </div>
        
        </div>
        <div className="infixtopostfix">
        <div className="leftpart">
        <h2>Evaluating postfix</h2>
        <h3>Postfix statement : <input onChange={postfixiichangeHandler}  type="text" name="InfixStatement" id="InfixStatement" /></h3>
        <button onClick={postfixiclickHandler}> Convert</button>
        <h3>Evaluated statement : </h3>
        </div>
        <div className="rightpart ">
        <table>
            <tr>
              <th>Stack</th>
            </tr>
        {postfixEvaluation.outputStack.map((element)=>{
         return(
          <tr>
            
            <th>{element.map((data)=>{
              return data[0];
            })}</th>
          </tr>
        );
        })}
           
        </table>
        </div>
        
        </div>
        </div>
            
        
        </div>)
        
}
export default FixEvaluation;