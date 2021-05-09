import React from 'react';
import styled from 'styled-components';

import { GlobalProvider } from '../../../context';
import { CreateLink } from './CreateLink';
import { Option } from './Option/index';
import { Size } from './Size';
import { Style } from './Style';
import { TextField } from './TextField';

const ConfigurationContent = styled.div`
  margin-top: 15px;

  & > div {
    margin-bottom: 20px;
    border-radius: 6px;
  }
`;

export function Configuration() {
  return (
    <GlobalProvider>
      <ConfigurationContent>
        <Option />
        <TextField />
        <Size />
        <Style />
        <CreateLink />
      </ConfigurationContent>
    </GlobalProvider>
  );
}
