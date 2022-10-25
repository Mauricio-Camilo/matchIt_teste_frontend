import styled from "styled-components";

const Container = styled.div`
    min-width: 700px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding-bottom: 50px;
    margin-top: 50px;
    background-color: blue;
`
const Title = styled.h1`
    font-size: 20px;
    text-align: center;
    color: black;
    margin-top: 10px;
`
const SubContainer = styled.div`
    min-width: 350px;
    max-width: 950px;
    width: 80%;
    border: 1px solid black;
    padding: 10px 0;
    display: flex;
    position: relative;
    background-color: green;

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
const IconDelete= styled.p`
    font-size: var(--icon-size-desktop);
    position: absolute;
    top: 60px;
    right: 20px;
    cursor: pointer;

    @media (max-width: 450px) {
        font-size: var(--icon-size-mobile);
        right: 15px;
    }
`
const IconUpdate = styled.p`
    font-size: var(--icon-size-desktop);
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;

    @media (max-width: 450px) {
        font-size: var(--icon-size-mobile);
        right: 15px;
    }
`
export {
    Container,
    Title,
    SubContainer,
    ClientContainer,
    IconDelete,
    IconUpdate
}