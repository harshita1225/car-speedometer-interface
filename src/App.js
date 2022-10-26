import "./App.css";
import Car from "./components/Car";
import ContextProvider from "./components/CarContext";
function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Car />
      </ContextProvider>
    </div>
  );
}

export default App;
