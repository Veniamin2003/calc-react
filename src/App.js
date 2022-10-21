import './App.css';
import StairsTypesContainer from "./Components/StairsTypes/StairsTypesContainer";
import MaterialsContainer from "./Components/Materials/MaterialsContainer";
import CountStagesContainer from "./Components/CountStages/CountStagesContainer";
import ResultsContainer from "./Components/Results/ResultsContainer";

function App(props) {
    debugger
    return (
        <div>
            <StairsTypesContainer/>
            <MaterialsContainer />
            <CountStagesContainer />
            <ResultsContainer />
        </div>
    );
}

export default App;
