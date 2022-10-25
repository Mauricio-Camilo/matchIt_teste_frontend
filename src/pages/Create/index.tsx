import { useState } from "react";
import { Container, Title, Inputs, Input, Button } from "./style";
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";
import { createCompany } from "../../services/api";
import { Company } from "../../services/api";

function CreateCompany() {

    const [name, setName] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [address, setAddress] = useState("");
    const [signUp, setSignUp] = useState<any>("Cadastrar");
    const [selected, setSelected] = useState<boolean>(false);

    const loading = <ThreeDots color="#FFFFFF" />;

    const navigate = useNavigate();

    function handleInputs() {
        return (
            <Inputs>
                <Input type="text" placeholder="Name" required
                    onChange={(e: any) => setName(e.target.value)} value={name}>
                </Input>
                <Input type="text" placeholder="CNPJ" required
                    onChange={(e: any) => setCnpj(e.target.value)} value={cnpj}>
                </Input>
                <Input type="text" placeholder="Address" required
                    onChange={(e: any) => setAddress(e.target.value)} value={address}>
                </Input>
            </Inputs>
        )
    }

    async function saveCompany() {
        if ( name === "" || cnpj === "" || address === "") {
            alert("Selecione todas as opções antes de prosseguir com o cadastro");
        }
        else {
            setSelected(true);
            setSignUp(loading);
            try {
                const company : Company = {
                    name,
                    cnpj,
                    address
                };
                await createCompany(company)
                navigate("/");
            }
            catch (error) {
                setSelected(false);
                setSignUp("Cadastrar");
                alert("Ocorreu um erro ao cadastrar uma empresa")
            }
        }
    }

    return (
        <Container>
            <Title>Cadastre a empresa</Title>
            {handleInputs()}
            <Button selected={selected} onClick={() => saveCompany()}>{signUp}</Button>
        </Container>
    )
}

export default CreateCompany;