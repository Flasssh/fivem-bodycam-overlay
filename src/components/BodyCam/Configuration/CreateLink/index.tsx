import React from 'react';
import styled from 'styled-components';

const Link = styled.button`
  background: #a30036;
  border: none;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;
  width: 100%;

  &:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  &:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const LinkFront = styled.span`
  display: block;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  background: #f0003c;
  color: white;
  transform: translateY(-4px);
`;

const LinkContent = styled.div`
  width: 100%;
  margin-top: 30px;
`;

// https://www.joshwcomeau.com/animation/3d-button/

export function CreateLink() {
  return (
    <LinkContent>
      <Link>
        <LinkFront className="front">Crée le lien.</LinkFront>
      </Link>
    </LinkContent>
  );
}
