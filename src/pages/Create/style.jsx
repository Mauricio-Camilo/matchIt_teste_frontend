import styled from "styled-components";

const Container = styled.div`
    min-width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    padding-bottom: 25px;

`
const Title = styled.h1`
    font-size: 32px;
    text-align: center;
    color: black;
    margin-top: 25px;
    margin-bottom: 20px;
    width: 350px;
`

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const Input = styled.input`
    font-size: 20px;
    width: 326px;
    height: 58px;
    border-radius: 5px;
    padding-left: 15px;
    &::placeholder {
        font-size: 15px;
        color: gray;
    }
`

const Button = styled.button`
    width: 326px;
    height: 46px;
    font-size: 20px;
    font-weight: 700;
    border-radius: 5px;
    color: white;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    pointer-events: ${(props) => props.selected? "none" : "auto"};
    cursor: pointer;
`
export {
    Container,
    Title,
    Inputs,
    Input,
    Button
}