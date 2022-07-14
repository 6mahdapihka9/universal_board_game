import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Image from '../Image';
import CenteredBox from '../design/CenteredBox';

type propTypes = {
  onClose: any;
}

const CreateCardForm = ({ onClose }: propTypes) => {
  const [width, setWidth] = useState('');
  const onChange = (e: any) => {
    setWidth(e.target.value);
  };

  return (
    <CenteredBox component="form">
      <Image />
      <TextField id="outlined-basic" variant="outlined" value={width} onChange={onChange} />
      <Button onClick={onClose}>Cancel</Button>
      <Button type="submit">Submit</Button>
    </CenteredBox>
  );
};

export default CreateCardForm;
