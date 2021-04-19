import React from 'react';

let heartStyle = {
  color: '#e25555',
};

let linkStyle = {
  textDecoration: 'underline',
};

export function Footer() {
  return (
    <div className="w-full sticky bottom-0 text-center">
      Made with <span style={heartStyle}>&hearts;</span> in Switzerland, by{' '}
      <a
        href="https://github.com/Flasssh"
        target="_blank"
        style={linkStyle}
        rel="noreferrer">
        Flasssh
      </a>
    </div>
  );
}
