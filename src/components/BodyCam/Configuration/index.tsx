import React from 'react';
import styled from 'styled-components';

import { Option } from './Option/index';
import { TextField } from './TextField';

const ConfigurationContent = styled.div`
  margin-top: 15px;

  & > div {
    margin-bottom: 20px;
  }
`;

export function Configuration() {
  const callBackOption = (data: any) => {
    console.log('Option: ' + data);
  };

  const textFieldCallBack = (data: any) => {
    console.log('TextField: ' + data);
  };

  return (
    <ConfigurationContent>
      <Option callback={callBackOption} />
      <TextField callback={textFieldCallBack} />
    </ConfigurationContent>
  );
}
