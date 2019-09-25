/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'linaria/react';

const StyledButton = styled.button`
  width: 610px;
  height: 75px;
  background: #70b1f2;
  border-radius: 5px;
  color: #fff;
  font-family: sans-serif;
  font-size: 24px;
  text-align: center;
`;

function Button(props) {
  return <StyledButton>{props.children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
