import queryString from 'query-string';
import React from 'react';

interface Props {
  location: any;
}

export function Overlay({ location }: Props) {
  // eslint-disable-next-line no-unused-vars
  let parsed = queryString.parse(location.search, {
    parseBooleans: true,
    parseNumbers: true,
  });

  return <div></div>;
}
