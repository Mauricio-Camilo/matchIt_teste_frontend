import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle.jsx";
import MainApp from './pages/Main';
import CreateCompany from "./pages/Create";

function App() {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainApp />} />
                    <Route path="/create" element={<CreateCompany />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;