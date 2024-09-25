import styled from 'styled-components';
import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
  }

const SButton = styled.button<{}>`
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return <SButton onClick={onClick}>{label}</SButton>;
  };
  
export default Button;