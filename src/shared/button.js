import React from 'react';

const buttonStyles = {
  width: '4rem',
  height: '2rem'
};

const iconButtonStyle = {

};

export const PrimaryButton = ({children, styles, onClick}) => (
  <button style={{...buttonStyles, ...styles}} onClick={onClick}>{children}</button>
);

export const IconButton = ({children, styles, onClick}) => (
  <button style={{...iconButtonStyle, ...styles}} onClick={onClick}>{children}</button>
);
