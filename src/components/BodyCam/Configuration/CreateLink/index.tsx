import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  background-color: rgb(52, 211, 153);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
  width: calc(100% - 2em);
  text-align: center;

  &:hover {
    background: rgb(5, 150, 105);
  }
`;

const LinkContent = styled.div`
  width: 100%;
`;

// https://www.joshwcomeau.com/animation/3d-button/

export function CreateLink() {
  return (
    <LinkContent>
      <Link target="_blank">Create a link.</Link>
    </LinkContent>
  );
}
