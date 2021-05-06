import React from 'react';
import styled from 'styled-components';

const PreviewContent = styled.div`
  width: 800px;
  height: 450px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 0 2px rgba(107, 114, 128, 1);
  border-radius: 6px;
  margin-top: 15px;
`;

export function Preview() {
  return <PreviewContent>ça marche théo!</PreviewContent>;
}
