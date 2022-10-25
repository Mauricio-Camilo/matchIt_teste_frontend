import { useEffect, useState } from "react";
import { getAllCompanies } from "../../services/api";
import { Container, Title } from "./style";
import { Oval } from 'react-loader-spinner';
import CompanyData from "./company";

export default function MainApp() {

    const [postCompany, setPostCompany] = useState(false);
    const [companies, setCompanies] = useState<any>([]);
    const [reloadPage, setReloadPage] = useState(false);

    useEffect(() => {
        setPostCompany(true);
        setReloadPage(false);

        async function getCompanies() {
            try {
                const companies = await getAllCompanies();
                console.log(companies)
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
                            <CompanyData key={id} name={name} cnpj={cnpj}
                             address={address} />
                        )
                    })
            );
        } else
            return <h1>Não há empresas cadastradas ainda!!!</h1>
    }

    return (
        <Container>
            <Title>Empresas Cadastradas</Title>
            {handleCompanies()}
        </Container>
    )
}