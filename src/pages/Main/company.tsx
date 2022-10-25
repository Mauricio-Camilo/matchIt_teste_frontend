import { SubContainer, ClientContainer, IconDelete, IconUpdate } from "./style";
import { MdCreate } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { removeCompany } from "../../services/api";
import { useNavigate } from "react-router-dom";

function CompanyData(props : any) {

    const { id, name, cnpj, address } = props;

    const navigate = useNavigate();

    function handleCompany() {
        return (
            <ClientContainer key={id}>
                <h2><strong>Nome: </strong>{name}</h2>
                <h2><strong>CNPJ: </strong>{cnpj}</h2>
                <h2><strong>Endereço: </strong>{address}</h2>
            </ClientContainer>
        )
    }

    async function deleteCompany(id : number) {
        const checkDelete = window.confirm("Deseja deletar essa empresa?");
        if (checkDelete) {
            await removeCompany(id);
            window.location.reload();
        }
    }

    function handleButtons() {
        return (
            <>
                <IconDelete onClick={() => deleteCompany(id)}><AiFillDelete/></IconDelete>
                <IconUpdate onClick={() => navigate(`/update/${id}`)}><MdCreate/></IconUpdate>
            </>
        )
    }

    return (
        <SubContainer key={id}>
            {handleCompany()}
            {handleButtons()}
        </SubContainer>
    )

}

export default CompanyData;