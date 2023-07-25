import { HeaderPartial } from "./Partials/HeaderPartial/HeaderPartial";
import { HomePage } from "./pages/Home/HomePage";
import { MinhasPastasPage } from "./pages/MinhasPastas/MinhasPastasPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./store/AppContext";
import { Pasta } from "./pages/Pasta/PastaPage";

const initialState = {
  activePinId: null,
  activeFolderId: null,
  currentPage: 1,
  mode: null,
  folders: [],
  type: null,
  savedPins:[],
  pins: [],
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContext initialState={initialState}>
        <HeaderPartial />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/minhas-pastas" element={<MinhasPastasPage />} />
          <Route path="/pasta" element={<Pasta/>}/>
        </Routes>
        </AppContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
