import styled from 'styled-components';

export const ProgressContainer = styled.div`
  margin: 10px 0;
  text-align: center;
`;

export const ProgressText = styled.p`
  margin-bottom: 5px;
  color: #f1f5f9;
  font-weight: bold;
`;

export const ProgressBar = styled.div`
  background-color: #334155;
  border-radius: 10px;
  height: 10px;
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  background-color: #38bdf8;
  height: 100%;
  width: 0%;
  transition: width 0.3s ease-in-out;
`;
