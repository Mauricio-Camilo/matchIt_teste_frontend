import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #126BA5;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
`

const Title = styled.h1`
    font-family: 'Playball', cursive;
    font-size: 30px;
    text-align: center;
    color: white;
    margin-top: 10px;
`
export {
    Container,
    Title
}