import { useState } from "react";
import { Container, IconHome, Title, Inputs, Input, Button } from "./../Create/style";
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate, useParams } from "react-router-dom";
import { updateCompany } from "../../services/api";
import { Company } from "../../services/api";
import { ImHome } from "react-icons/im";
import { GrLogout } from "react-icons/gr";

function UpdateCompanyPage() {
    const [name, setName] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [address, setAddress] = useState("");
    const [signUp, setSignUp] = useState<any>("Atualizar");
    const [selected, setSelected] = useState<boolean>(false);

    const loading = <ThreeDots color="#FFFFFF" />;

    const navigate = useNavigate();

    const { companyId } = useParams();

    function handleInputs() {
        return (
            <Inputs>
                <Input type="text" placeholder="Novo nome"
                    onChange={(e: any) => setName(e.target.value)} value={name}>
                </Input>
                <Input type="text" placeholder="Novo CNPJ"
                    onChange={(e: any) => setCnpj(e.target.value)} value={cnpj}>
                </Input>
                <Input type="text" placeholder="Novo endereço"
                    onChange={(e: any) => setAddress(e.target.value)} value={address}>
                </Input>
            </Inputs>
        )
    }

    async function saveCompany() {
        setSelected(true);
        setSignUp(loading);
        try {
            const company: Company = {
                name,
                cnpj,
                address
            };
            await updateCompany(company, companyId)
            navigate("/");
        }
        catch (error) {
            setSelected(false);
            setSignUp("Atualizar");
            alert("Ocorreu um erro ao cadastrar uma empresa")
        }
    }

    return (
        <Container>
            <IconHome onClick={() => navigate("/")}><ImHome /></IconHome>
            <Title>Atualize a empresa</Title>
            {handleInputs()}
            <Button selected={selected} onClick={() => saveCompany()}>{signUp}</Button>
        </Container>
    )
}

export default UpdateCompanyPage;