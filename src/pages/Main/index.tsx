import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import CompanyData from "./company";
import { closeServerByAPIGet, getAllCompanies } from "../../services/api";
import { Container, Title, IconClose, IconAdd, Div } from "./style";

import { Oval } from 'react-loader-spinner';
import { GrAddCircle } from "react-icons/gr";
import { GrLogout } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function MainApp() {

    const [postCompany, setPostCompany] = useState(false);
    const [companies, setCompanies] = useState<any>([]);
    const [reloadPage, setReloadPage] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setPostCompany(true);
        setReloadPage(false);

        async function getCompanies() {
            try {
                const companies = await getAllCompanies();
                setCompanies(companies);
                setPostCompany(false);
                if (companies.length !== 0) {
                    setReloadPage(true);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        getCompanies();
    }, []);

    function handleCompanies() {
        if (postCompany) return <Oval color="#FFFFFF" height={80} width={80} secondaryColor="#20ACDE" />
            ;
        if (reloadPage) {
            return (
                companies.map((company: any) => {
                    const { id, name, cnpj, address } = company;
                    return (
                        <CompanyData key={id} id={id} name={name} cnpj={cnpj}
                            address={address} />
                    )
                })
            );
        } else
            return (
                <>
                    <h1>Não há empresas cadastradas ainda</h1>
                    <h1>Clique no botão de + para fazer o cadastro!!!</h1>
                </>
            )
    }

    async function closeServer() {
        const checkCloseServer = window.confirm("Deseja desligar o servidor?");
        if (checkCloseServer) {
            const message = await closeServerByAPIGet();
            alert(message);
        }
    }

    return (
        <>
        <Header />
        <Container>
            <Div>
                <IconClose id="creation" onClick={() => closeServer()}><GrLogout /></IconClose>
                <Title>Empresas Cadastradas</Title>
                <IconAdd id="creation" onClick={() => navigate("/create")}><GrAddCircle /></IconAdd>
            </Div>
            {handleCompanies()}
        </Container>
        </>
    )
}