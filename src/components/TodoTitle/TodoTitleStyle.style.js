import styled from "styled-components";


export const TodoTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3a3f51;
  border: 1px dashed #00bcd4;
  padding: 8px 12px;
  border-radius: 8px;
  color: white;
  margin-bottom: 10px;
  gap: 12px;
`;


export const TodoTitleText = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
`;


export const TodoButtonAdd = styled.button`
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00acc1;
  }
`;
