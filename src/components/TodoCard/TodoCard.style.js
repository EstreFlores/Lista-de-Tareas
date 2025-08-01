import styled from "styled-components";

export const TodoCardContainer = styled.div`

border-radius: 8px;
border:1px solid transparent;
padding: 0.6em 1.2em;
font-size: 1em;
font-weight: 500;
font-family: inherit;
background-color: #1a1a1a;
transition: border-color 0.25s;
color: white;
display: flex;
justify-content: space-between;
align-items:center ;
margin-bottom:10px

`;

export const TodoCardButton = styled.button`
background-color: transparent;
border: none;
font-weight: 500;
font-size: 1em;
cursor: pointer;
outline: none;
color: white;
transition: background-color 0.25s;

`;

export const TodoCardText = styled.div ``;