import './App.css';
import ClassComp from "./components/ClassComp"
import FunctionComp from "./components/FunctionComp"

function App() {
  return (
    <div className="App">
    <h1>Hi</h1>
    <ClassComp nama="Jane Doe"/>
    <FunctionComp nama="John Doe"/>
    </div>
  );
}

export default App;
