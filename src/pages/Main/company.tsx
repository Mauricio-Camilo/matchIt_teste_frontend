import { SubContainer, ClientContainer, IconDelete, IconUpdate } from "./style";
import { MdCreate } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

function CompanyData(props : any) {

    const { id, name, cnpj, address} = props;

    function handleCompany() {
        return (
            <ClientContainer key={id}>
                <h2><strong>Nome: </strong>{name}</h2>
                <h2><strong>CNPJ: </strong>{cnpj}</h2>
                <h2><strong>Endereço: </strong>{address}</h2>
            </ClientContainer>
        )
    }

    function handleButtons() {
        return (
            <>
                {/* <IconDelete id="delete" onClick={() => deleteClient(id)}><AiFillDelete/></IconDelete>
                <IconUpdate id="update" onClick={() => navigate(`/update/${id}`)}><MdCreate/></IconUpdate> */}
                <IconDelete><AiFillDelete/></IconDelete>
                <IconUpdate><MdCreate/></IconUpdate>
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