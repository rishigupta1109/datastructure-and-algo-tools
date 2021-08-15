import './App.css';
import InfixCnE from "./components/stack/InfixCnE";
import FixEvaluation from './components/stack/FixEvaluation';
function App() {
  return (
    <div className="App">
      <div className="navbar"><h1>Tools</h1></div>
     <InfixCnE></InfixCnE>
     <FixEvaluation></FixEvaluation>
    </div>
  );
}

export default App;
