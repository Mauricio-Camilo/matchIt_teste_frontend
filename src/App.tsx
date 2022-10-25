import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle.jsx";
import MainApp from './pages/Main';
import CreateCompany from "./pages/Create";
import UpdateCompanyPage from "./pages/Update";

function App() {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainApp />} />
                    <Route path="/create" element={<CreateCompany />} />
                    <Route path="/update/:companyId" element={<UpdateCompanyPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;