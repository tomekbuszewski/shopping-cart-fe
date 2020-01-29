import * as React from "react";
import styled from "styled-components";

export const Image = styled.img`
  display:block;
  max-width: 100%;
`;

export const ImageWrapper = styled.figure`
  position: relative;
  overflow: hidden;
  height: 200px;
  margin: 8px 0;
  
  > ${Image} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
  }
`;
