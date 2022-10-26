import styled from "styled-components";

const Container = styled.div`
    min-width: 700px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding-top: 10px;
    padding-bottom: 50px;
    margin-top: 60px;
    background-color: #F2F2F2;
`
const Div = styled.div `
    min-width: 350px;
    max-width: 800px;
    width: 80%;
    position: relative;
`
const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    color: #2173AA;
    margin-top: 10px;
`
const SubContainer = styled.div`
    min-width: 350px;
    max-width: 800px;
    width: 80%;
    border: 1px solid black;
    padding: 10px 0;
    display: flex;
    position: relative;
    background-color: lightgray;

        div {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        h2 {
            font-size: 20px;
        }
`
const ClientContainer = styled.div`
    padding-left: 15px;
    max-width: 700px;
    display: flex;
    word-wrap: break-word;  
    position: relative;

        h2 {
            font-size: 20px;
        }
`
const IconClose = styled.p`
    font-size: 30px;
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
`
const IconAdd = styled.p`
    font-size: 30px;
    position: absolute;
    top: 10px;
    left: 20px;
    cursor: pointer;
`
const IconDelete = styled.p`
    font-size: 25px;
    position: absolute;
    top: 60px;
    right: 20px;
    cursor: pointer;
`
const IconUpdate = styled.p`
    font-size: 25px;
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
`
export {
    Container,
    Div,
    Title,
    SubContainer,
    ClientContainer,
    IconClose,
    IconAdd,
    IconDelete,
    IconUpdate
}