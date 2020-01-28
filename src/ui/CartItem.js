import * as React from "react";
import styled from "styled-components";

import { show } from "./animations";
import { Category, Header, Image, ImageWrapper } from "./";

export const CartItem = styled(props => (
  <li className={props.className}>
    <Header as="h3" border={false}>
      {props.name}
    </Header>
    {props.category && <React.Fragment><Category>{props.category}</Category><br /></React.Fragment>}
    {props.img && <ImageWrapper><Image src={props.img} alt={props.name} /></ImageWrapper>}
    {props.children}
  </li>
))`
  animation: ${show} 350ms ease-out forwards;
  opacity: 0;
  padding: ${props => props.large ? "16px" : "8px"};
  margin: ${props => props.large && "8px"};
  margin-bottom: 8px;
  border: 1px solid ${props => props.theme.colors.baseDark};
  width: 100%;
  
  ${props => props.theme.breakpoints.tablet} {
    max-width: ${props => props.large && "calc(50% - 16px)"};
  }
  
  ${props => props.theme.breakpoints.desktop} {
    max-width: ${props => props.large && "calc(33% - 16px)"};
  }
`;
