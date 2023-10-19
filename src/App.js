import "./App.css";
import CampsitesList from "./features/campsites/CampsitesList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CampsitesList />
    </div>
  );
}

export default App;
