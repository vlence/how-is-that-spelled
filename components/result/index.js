import React from 'react';
import styled from 'styled-components';

const Transcript = styled.span`
  font-size: 40px;
  font-family: Bangers, cursive;
`;

const Result = ({transcript}) => (
  <React.Fragment>
    <small>You said:</small><br />

    <Transcript>"{transcript}"</Transcript>
  </React.Fragment>
);

export default Result;