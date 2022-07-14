import styled from 'styled-components';
import { Box } from '@mui/material';

const CenteredBox = styled(Box)`
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  
  padding: 15px;
  border: 1px solid black;
  border-radius: 5px;
`;

export default CenteredBox;
