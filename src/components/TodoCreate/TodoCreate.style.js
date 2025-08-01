import styled from "styled-components";

export const TodoContent = styled.form`
  width:100%;
  max-width:500px;
  background-color:#1a1a1a;
  border-radius: 8px;
  padding: 1.2em;
  display: flex;
  place-items:center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color:white;
`;



export const TodoContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  width: 100%;
`;


export const TodoContentBotton = styled.button`
  background: transparent;
  border: none;
  color: #ff4d4f;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #ff7875;
  }
`;

export const TodoModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;


export const TodoTextArea = styled.textarea`
  background-color: #2c2c2c;
  color: white;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 0.8rem;
  font-size: 1rem;
  resize: none;
  min-height: 100px;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #28a745;
  }

`;



export const TodoButtonCreate = styled.button`
  background-color: #444;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.8rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #28a745;
  }
`;


