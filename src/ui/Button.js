import * as React from "react";
import styled, { css } from "styled-components";

export const Button = styled.button`
  border: 0;
  outline: 0;
  text-align: center;
  
  padding: 8px;
  
  &:active, &:focus {
    outline: 0;
  }
  
  ${props => props.accent && css`
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.base};
  `};
  
  ${props => props.important && css`
    background: ${props => props.theme.colors.breakage};
    color: ${props => props.theme.colors.base};
  `};
  
  ${props => props.rounded && css`
    border-radius: 100%;
    margin-left: 4px;
    margin-right: 4px;
  `};
  
  ${props => props.small && css`
    width: 24px;
    height: 24px;
    line-height: 24px;
    padding: 0;
  `};
  
  ${props => props.medium && css`
    width: 40px;
    height: 40px;
    line-height: 40px;
    padding: 0;
  `};
`;
