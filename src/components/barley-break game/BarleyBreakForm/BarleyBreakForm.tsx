import React, { useState } from 'react';
import {
  Box, Button, TextField,
} from '@mui/material';

type BarleyBreakFormType = {
    onChangeBoardSize: Function
}
const BarleyBreakForm = ({ onChangeBoardSize }: BarleyBreakFormType) => {
  const [size, setSize] = useState<number>(4);

  function checkSizeValidity(n: number) {
    return n > 4 && n < 20;
  }
  const onChange = (e: any) => {
    if (checkSizeValidity(e.target.value)) setSize(e.target.value);
  };
  const onSubmit = () => {
    onChangeBoardSize(size);
  };
  return (
    <form onSubmit={onSubmit}>
      <Box component="form">
        <TextField type="number" label="Board size" onChange={onChange} />
        {/*  todo add warning */}
        <Button disabled={!checkSizeValidity(size)}>Submit</Button>
      </Box>
    </form>
  );
};

export default BarleyBreakForm;
