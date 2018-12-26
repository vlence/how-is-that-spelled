import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 40px;
  font-family: Bangers, cursive;

  padding: 8px 24px;

  background-color: #eee;
  border: 1px solid #ddd;

  &:hover {
    cursor: pointer;
  }
`;

const ListenButton = ({onClick}) => (
  <Button type="button" onClick={onClick}>Say Something</Button>
);

export default ListenButton;