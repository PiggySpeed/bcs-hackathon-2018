import React from 'react';

const buttonStyles = {
  width: '4rem',
  height: '2rem'
};

const iconButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const PrimaryButton = ({children, style, onClick}) => (
  <button style={{...buttonStyles, ...style}} onClick={onClick}>{children}</button>
);

export const IconButton = ({children, style, onClick}) => (
  <button style={{...iconButtonStyle, ...style}} onClick={onClick}>{children}</button>
);
