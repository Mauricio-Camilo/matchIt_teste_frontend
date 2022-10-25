import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle.jsx";
import MainPage from './pages/Main';

function App() {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;