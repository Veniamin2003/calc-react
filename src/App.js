import './App.css';
import StairsTypesContainer from "./Components/StairsTypes/StairsTypesContainer";
import MaterialsContainer from "./Components/Materials/MaterialsContainer";
import CountStagesContainer from "./Components/CountStages/CountStagesContainer";

function App(props) {
    debugger
    return (
        <div>
            <StairsTypesContainer/>
            <MaterialsContainer />
            <CountStagesContainer />
        </div>
    );
}

export default App;
