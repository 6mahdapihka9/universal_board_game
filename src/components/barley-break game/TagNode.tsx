import React from 'react';
import { styled } from '@mui/material';

type props = {
    children: React.ReactNode,
    x: number,
    y: number,
    handleTagClick: Function
}

const TagButton = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: 10px;
  width: 50px;
  height: 50px;
  // transform: 'position .3s easy-in',
  // background-color: (props) => props.disabled ? : ;
  //&:active {
  //  background-color: cornflowerblue;
  //}
`;

const TagNode = ({
  children, x, y, handleTagClick,
}: props) => (
  <TagButton
    style={{
      // backgroundColor: `${children ? 'lightblue' : 'none'}`,
      top: `${y * 70}px`,
      left: `${x * 70}px`,
    }}
    disabled={!children}
    onClick={() => handleTagClick(x, y)}
  >
    {children}
  </TagButton>
);

export default TagNode;
